"use client";

import { useState } from "react";

import { api } from "~/trpc/react";

export function ServerTest() {
  const [latestPost] = api.post.getLatest.useSuspenseQuery();

  const utils = api.useUtils();
  const createPost = api.post.create.useMutation({
    onSuccess: async () => {
      await utils.post.invalidate();
    },
  });

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p>{latestPost.name}</p>
      ) : (
        <p></p>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createPost.mutate({ name: "start" });
        }}
        className="flex flex-col gap-2"
      >
        <button
          type="submit"
          className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
          disabled={createPost.isPending}
        >
          {createPost.isPending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
