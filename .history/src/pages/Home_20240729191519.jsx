import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import AboutMe from "../components/about/About";
import Services from "../components/services/Services";
export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutMe />
      <Services/>
    </>
  );
}
