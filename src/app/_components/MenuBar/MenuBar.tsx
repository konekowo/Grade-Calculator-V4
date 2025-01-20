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
          background: "rgba(0, 0, 0, 0.2)",
        }}
      >
        <Stack
          direction={"row"}
          spacing={0}
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Stack
            direction={"row"}
            spacing={0}
            sx={{
              width: "100%",
              height: "100%",
            }}
          >
            <MenuItem>
              <span style={{ margin: "15px" }}>
                Grade Calculator <span style={{ color: "gray" }}>V4</span>
              </span>
            </MenuItem>
            <MenuButton>
              <span>Home</span>
            </MenuButton>
            <MenuButton>
              <span>Course Grades</span>
            </MenuButton>
          </Stack>
          <MenuButton>
            <span style={{ margin: "5px" }}>Login</span>
          </MenuButton>
        </Stack>
      </Box>
    </>
  );
}
