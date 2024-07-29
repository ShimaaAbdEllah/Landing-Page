import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import AboutMe from "../components/About/About";
import Services from "../components/services/Services";
import Client from "../components/client/Client";
export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutMe />
      <Services/>
      <Client/>
    </>
  );
}