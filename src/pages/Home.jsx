import React from "react";
import NavBar from "../commponant/NavBar";
import Hero from "../commponant/Hero";
import { Box, Stack, Typography } from "@mui/material";
import OutlinedCard from "../commponant/Card";
import AboutMe from "../commponant/AboutMe";
import WovenImageList from "../commponant/projectes";
import Footar from "../commponant/Footar";
import Contact from "../commponant/contact";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      {/* <Stack
        justifyContent={"center"}
        alignItems={"center"}
        direction={"row"}
        gap={12}
        marginTop={5}
      >
        <Box>
          <OutlinedCard />
        </Box>
        <Box>
          <OutlinedCard />
        </Box>
        <Box>
          <OutlinedCard />
        </Box>
      </Stack> */}
      <OutlinedCard />
      <AboutMe />
      <WovenImageList />
      <Contact />
      <Footar />
    </>
  );
}
