import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

export default function Hero() {
  return (
    <div>
      <Box
        sx={{
          backgroundImage:
            'url("	https://preview.colorlib.com/theme/create/images/hero_1.jpg") ',
          minHeight: "800px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ minHeight: "800px", background: "rgba(128, 128, 128, 0.5)" }}
        >
          <Typography
            variant="h1"
            noWrap
            // component="a"
            // href="#app-bar-with-responsive-menu"
            sx={{
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
              textAlign: "center",

              //   position: "relative",
              //   left: "1%",
              //   top: "80%",
            }}
          >
            I'M Shimaa
          </Typography>
          <Typography
            variant="h1"
            noWrap
            // component="a"
            // href="#app-bar-with-responsive-menu"
            sx={{
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
              textAlign: "center",

              //   position: "relative",
              //   left: "1%",
              //   top: "80%",
            }}
          >
            Web & UI Developer
          </Typography>
        </Stack>
      </Box>
      {/* <Box sx={{ minHeight: "2000px" }}></Box> */}
    </div>
  );
}
