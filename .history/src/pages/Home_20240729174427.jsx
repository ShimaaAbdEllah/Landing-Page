import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import NavBar from "../commponant/NavBar";
import Hero from "../commponant/Hero";
import OutlinedCard from "../commponant/Card";
import AboutMe from "../commponant/About";
import WovenImageList from "../commponant/projectes";
import Footar from "../commponant/Footar";
import Contact from "../commponant/contact";
import img from "../assets/images/Rectangle 1.png";
export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutMe />
    </>
  );
}
