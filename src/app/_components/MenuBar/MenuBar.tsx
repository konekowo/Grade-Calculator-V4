import { Box, Stack } from "@mui/material";
import MenuItem from "~/app/_components/MenuBar/MenuItem";
import MenuButton from "~/app/_components/MenuBar/MenuButton";

export default function MenuBar() {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "50px",
          position: "sticky",
          top: "0",
          overflow: "hidden",
          padding: "0",
          paddingLeft: "15px",
          paddingRight: "15px",
        }}
      >        <Stack
          direction={"row"}
          spacing={1}
          sx={{
              width: "100%",
              height: "100%",
          }}
      >
        <Stack
          direction={"row"}
          spacing={1}
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <MenuItem>
            <span>
              Grade Calculator <span style={{ color: "gray" }}>V4</span>
            </span>
          </MenuItem>
          <MenuButton>
            <span>Home</span>
          </MenuButton>
          <MenuButton>
            <span>Course Grades</span>
          </MenuButton>
          <MenuButton>
            <span>Login</span>
          </MenuButton>
        </Stack>
      </Box>
    </>
  );
}
