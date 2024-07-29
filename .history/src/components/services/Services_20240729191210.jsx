import React, { useEffect, useState } from "react";
import { styles } from "../../styles/styles";
import { Box, Grid, Typography, Button } from "@mui/material";
import { color } from "../../colors/colors";
import OrangeArrow from "../OrangeArrow";
import ServiceCard from "./ServiceCard";
import "./services.css"

const Services = () => {
    const [selected, setSelected] = useState("../../../public/man.png");

    
    const handleSelectedElement = (imageSrc) => {
        setSelected(imageSrc);
    };
    
    const handleSetSelected = (shape) => {
        setSelected(shape);
    };
    
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById("services");
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
        <Box id="services" sx={styles.services}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: { xs: "center", md: "flex-start" },
                        gap: { xs: "50px", md: "22%" },
                        width: "80%",
                        flexDirection: { xs: "column", md: "row" },
                    }}
                >
                    <Box>
                        <OrangeArrow />
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                color: color.white,
                                width: "100%",
                                textAlign: "center",
                                fontSize: "16px",
                                lineHeight: "20px",
                            }}
                        >
                            Elevate your organization with the leading Naqlyat loading panel
                            for Achieve a national vision for your loads and expand your
                            capacity and profitability by using industry-leading load loading
                            platforms for brokers from "NQLYATsolutions".
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Grid container spacing={2} sx={{ width: '80%' }}>
                    <Grid item xs={12} sm={6} md={4} className={isVisible? "left-section" : ""}>
                        <ServiceCard
                            handleSelectedElement={handleSelectedElement}
                            selected={selected}
                            imageSrc="../../../public/man.png"
                        >
                            <span>
                                <img
                                    width={"100%"}
                                    src="../../../public/man.png"
                                    alt="Icon 1"
                                />
                            </span>
                            <Typography sx={{ color: "white", padding: '10px' }}>
                                Cargo loading platforms from "NQLYAT solutions" are designed to
                                simplify your operations and keep your cargo in constant motion every time.
                            </Typography>
                        </ServiceCard>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className={isVisible? "middleSection" : ""}>
                        <ServiceCard
                            handleSelectedElement={handleSelectedElement}
                            selected={selected}
                            imageSrc="../../../public/cars.png"
                        >
                            <span>
                                <img
                                    width={"100%"}
                                    src="../../../public/cars.png"
                                    alt="Icon 1"
                                />
                            </span>
                            <Typography sx={{ color: "white", padding: '10px' }}>
                                Cargo loading platforms from "NQLYAT solutions" are designed to
                                simplify your operations and keep your cargo in constant motion every time.
                            </Typography>
                        </ServiceCard>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className={isVisible? "right-section" : ""}>
                        <ServiceCard
                            handleSelectedElement={handleSelectedElement}
                            selected={selected}
                            imageSrc="../../../public/car2.png"
                        >
                            <span>
                                <img
                                    width={"100%"}
                                    src="../../../public/car2.png"
                                    alt="Icon 1"
                                />
                            </span>
                            <Typography sx={{ color: "white", padding: '10px' }}>
                                Cargo loading platforms from "NQLYAT solutions" are designed to
                                simplify your operations and keep your cargo in constant motion every time.
                            </Typography>
                        </ServiceCard>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Button
                    variant="contained"
                    sx={{
                        fontSize: '15px',
                        fontWeight: 600,
                        width: '200px',
                        padding: '18px 0',
                        backgroundColor: color.white,
                        color: color.orange,
                        borderRadius: '30px',
                        boxShadow: 'rgba(240, 83, 38, 0.3) 0px 5px',
                        border: 'none',
                        cursor: 'pointer',
                        '&:hover': {
                            backgroundColor: color.white,
                            boxShadow: 'rgba(240, 83, 38, 0.5) 0px 7px',
                        },
                    }}
                >
                    Read More
                </Button>
            </Box>
        </Box>
    );
};

export default Services;
