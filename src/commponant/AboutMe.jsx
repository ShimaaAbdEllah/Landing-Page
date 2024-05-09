import { Box, Stack } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function AboutMe() {
  return (
    <>
      <Typography
        variant="h5"
        noWrap
        sx={{
          mr: 2,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "black",
          textDecoration: "none",
          textAlign: "center",
          marginTop: "15px",
        }}
      >
        About Me
      </Typography>
      <Stack
        direction="row" // Set direction to "row"
        justifyContent={"center"}
        alignItems={"center"}
        gap={4}
        marginTop={5}
        width={"90%"}
        marginX={"auto"}
        gridRow={"1 / span 1"}
        sx={{
          minHeight: "500px",
          background: "rgba(128, 128, 128, 0.5)",
        }}
      >
        <Box
          sx={{
            backgroundImage: 'url("/public/images/1.jpg") ',
            minHeight: "400px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            width: " 400px",
          }}
        ></Box>

        <Typography
          variant="h5"
          noWrap
          sx={{
            mr: 2,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "white",
            textDecoration: "none",
          }}
        >
          Hey there&#x1F44B;
          <br />
          I'am Shimaa AbdEllah <br /> Front End Developer
          <br />
          & web UI
          <br />
          <br /> MY Email
          <br />
          shimaaabd69@gmail.com
          <br /> <br /> <br />
          <GitHubIcon
            sx={{ "&:hover": { cursor: "pointer" } }}
            fontSize="large"
            color="black"
          />
          <LinkedInIcon
            sx={{ "&:hover": { cursor: "pointer" } }}
            fontSize="large"
            color="primary"
          />
        </Typography>
      </Stack>
    </>
  );
}
