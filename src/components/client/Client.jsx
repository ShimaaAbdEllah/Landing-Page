import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import HeaderSection from "./HeaderSection";
import ServiceDescriptions from "./ServiceDescriptions";
import AboutCardsSection from "./AboutCardsSection";
import ClientTestimonials from "./ClientTestimonials";
import NavigationArrows from "./NavigationArrows";
import { styles } from "../../styles/styles";
import { color } from "../../colors/colors";
import "./client.css";

const Client = () => {
  const [selected, setSelected] = useState("🡢");

  const handleSetSelected = (shape) => {
    setSelected(shape);
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box id="about" sx={styles.about}>
      <img
        style={{
          position: "absolute",
          top: "0",
          height: "72vh",
          width: "100%",
        }}
        src="../../../public/car3.png"
        alt=""
      />
      <HeaderSection isVisible={isVisible} />
      <ServiceDescriptions isVisible={isVisible} />
      <AboutCardsSection isVisible={isVisible} />
      <Button
        sx={{
          width: "150px",
          height: "50px",
          color: "#F05326",
          background: "#fff",
          border: "1px solid #F05326",
          borderRadius: "50px",
          boxShadow: "0 4px 6px rgba(240, 83, 38, 0.3)",
          "&:hover": {
            color: "#fff",
            backgroundColor: "#F05326",
          },
        }}
      >
        Read More
      </Button>
      <ClientTestimonials isVisible={isVisible} />
      <NavigationArrows
        selected={selected}
        handleSetSelected={handleSetSelected}
      />
      <Box className="shape3"></Box>
      <Box className="shape4"></Box>
    </Box>
  );
};

export default Client;
