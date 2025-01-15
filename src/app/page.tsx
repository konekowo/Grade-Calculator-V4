"use client";

import {Box, Button, Dialog, DialogContent, DialogTitle, FormControl, TextField, Typography} from "@mui/material";
import React from "react";
import {Stack} from "@mui/system";

export default function Home() {
  const [open, setOpen] = React.useState(true);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

  return (
    <>
      <Dialog
          open={open}
      >
          <DialogTitle>
              {"Login to Grading Portal"}
          </DialogTitle>
          <DialogContent>
              <Stack direction="column" spacing={2} alignItems="center">
                  <FormControl>
                      <TextField
                          required
                          id="username-input"
                          defaultValue=""
                          label="Username"
                          variant="standard"
                      />
                      <TextField
                          required
                          id="password-input"
                          label="Password"
                          type="password"
                          autoComplete="current-password"
                          variant="standard"
                      />
                      <Button onClick={handleClose}>Login</Button>
                  </FormControl>
              </Stack>
          </DialogContent>
      </Dialog>
    </>
  );
}
