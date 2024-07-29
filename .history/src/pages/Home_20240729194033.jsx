import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import AboutMe from "../components/About/About";
import Services from "../components/services/Services";
import Client from "../components/client/Client";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import { Box } from "@mui/material";
export default function Home() {
  return (
    <Box sx={{overflowX:'hidden'}}>
      <NavBar />
      <Hero />
      <AboutMe />
      <Services/>
      <Client/>
      <Contact/>
      <Footer/>
    </B>
  );
}
