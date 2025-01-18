import {Box} from "@mui/material";
import {PropsWithChildren} from "react";

export default function MenuItem({ children }: PropsWithChildren) {
  return (
    <>
      <Box
        sx={{
          height: "100%",
          maxHeight: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </Box>
    </>
  );
}