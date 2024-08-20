import {api, HydrateClient} from "~/trpc/server";
import { ServerTest } from "~/app/_components/test";
export default async function Page() {
    void api.post.getLatest.prefetch();
    return (
        <HydrateClient>
            <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
                <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
                    <ServerTest />
                </div>
            </main>
        </HydrateClient>
    );
}