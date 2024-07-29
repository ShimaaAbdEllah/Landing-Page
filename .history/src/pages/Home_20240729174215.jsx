import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import NavBar from "../commponant/NavBar";
import Hero from "../commponant/Hero";
// import AboutSection from "./AboutSection";
// import ServicesSection from "./ServicesSection";
// import PlatformSection from "./PlatformSection";
// import TestimonialsSection from "./TestimonialsSection";
// import QuoteSection from "./QuoteSection";
// import Footer from "./Footer";
import OutlinedCard from "../commponant/Card";
import AboutMe from "../commponant/About";
import WovenImageList from "../commponant/projectes";
import Footar from "../commponant/Footar";
import Contact from "../commponant/contact";
import img from "../assets/images/Rectangle 1.png";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutMe />
    </>
  );
}
