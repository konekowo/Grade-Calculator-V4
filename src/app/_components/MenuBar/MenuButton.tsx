import { PropsWithChildren } from "react";
import { Button } from "@mui/material";
import MenuItem from "~/app/_components/MenuBar/MenuItem";

export default function MenuButton({ children }: PropsWithChildren) {
  return (
    <>
      <MenuItem>
        <Button sx={{ width: "100%", height: "100%", borderRadius: "0px" }}>
          {children}
        </Button>
      </MenuItem>
    </>
  );
}
