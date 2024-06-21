import React from "react";
import { Box, Divider, Grid } from "@mui/material";
import HideableDrawer from "../../utils/HideableDrawer";
import EmailSender from "./EmailSender";

export default function ContactPage() {
  return (
    <Box style={{ height: "100vh" }}>
      <Box position="absolute" sx={{ marginLeft: "1%", marginTop: "1%" }}>
        <HideableDrawer />
      </Box>
      <Grid container>
        <Grid item xs={6}></Grid>
        <Grid
          item
          xs={6}
          height={"100vh"}
          p={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box height={"70vh"} width={"100%"}>
            <EmailSender></EmailSender>
          </Box>
        </Grid>
      </Grid>

      <Divider
        orientation="vertical"
        flexItem
        sx={{
          height: "90vh",
          position: "absolute",
          left: "50%",
          top: "5%",
          bgcolor: "#000000",
        }}
      />
    </Box>
  );
}
