import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import HeaderSection from "./HeaderSection";
import ServiceDescriptions from "./ServiceDescriptions";
import AboutCardsSection from "./AboutCardsSection";
import ClientTestimonials from "./ClientTestimonials";
import NavigationArrows from "./NavigationArrows";
import { styles } from "../../styles/styles";
import { color } from "../../colors/colors";
import "./.css"

const client = () => {
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
                style={{ position: "absolute", top: "0", height: "72vh", width: "100%" }}
                src="../../../public/car3.png"
                alt=""
            />
            <HeaderSection isVisible={isVisible}/>
            <ServiceDescriptions isVisible={isVisible}/>
            <AboutCardsSection isVisible={isVisible}/>
            <Button
                variant="contained"
                sx={{
                    fontSize: "15px",
                    fontWeight: 600,
                    width: "200px",
                    padding: "18px 0",
                    backgroundColor: color.white,
                    color: color.orange,
                    borderRadius: "30px",
                    boxShadow: "rgba(240, 83, 38, 0.3) 0px 5px",
                    border: "none",
                    cursor: "pointer",
                    "&:hover": {
                        backgroundColor: color.white,
                        boxShadow: "rgba(240, 83, 38, 0.5) 0px 7px"
                    }
                }}
            >
                Read More
            </Button>
            <ClientTestimonials isVisible={isVisible}/>
            <NavigationArrows selected={selected} handleSetSelected={handleSetSelected} />
            <Box className="shape3"></Box>
            <Box className="shape4"></Box>
        </Box>
    );
};

export default Client;
