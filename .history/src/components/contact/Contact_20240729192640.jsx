import React, { useEffect, useState } from "react";
import { Box, Grid, useMediaQuery } from "@mui/material";
import { color } from "../../colors/colors";
import backgroundImage from "../../../public/productShip.png"; 
import truckImage from "../../../public/car2.png"; 
import "./contact.css";

const Contact = () => {
    // const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById("signUp");
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
        <Box
        id="signUp"
            sx={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: "50px 0px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minHeight: "100vh",
            }}
        >
            <Box
                sx={{
                    textAlign: "center",
                    marginBottom: "20px",
                    width: '35%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px'
                }}
            >
                <h2 style={{ color: color.white }}> <span style={{ color: color.orange }}>Get</span>  A Competitive Instant Quote</h2>
                <p style={{ color: "white" }}>
                    Fill out the form for LTL and Full Truckload rates. Quick access without login!
                </p>
            </Box>
            <Grid
                container
                spacing={2}
                sx={{
                    width: isSmallScreen ? "100%" : "80%",
                    maxWidth: "1200px",
                    paddingTop: '60px'
                }}
            >
                <Grid item xs={12} md={7} className={isVisible ? "left-section" : ""}>
                    <Box
                        sx={{
                            backgroundColor: "rgba(255,255,255, 0.1)",
                            padding: "30px",
                            borderRadius: "20px",
                            backdropFilter: "blur(2px)",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            height: "100%",
                        }}
                    >
                        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                            <Grid container spacing={2}>
                                {[
                                    { label: "Pick Location", type: "select", name: "pickLocation", icon: "../../../public/location2.svg" },
                                    { label: "Pick Date", type: "date", name: "pickDate", icon: "../../../public/date.svg" },
                                    { label: "Delivery Location", type: "select", name: "deliveryLocation", icon: "../../../public/location2.svg" },
                                    { label: "Delivery Date", type: "date", name: "deliveryDate", icon: "../../../public/date.svg" },
                                    { label: "Weight", type: "select", name: "weight", icon: "../../../public/weight.svg" },
                                    { label: "Load", type: "text", name: "load", icon: "../../../public/load.svg" },
                                    { label: "Text", type: "text", name: "text", icon: "../../../public/name.svg" },
                                    { label: "Email", type: "email", name: "email", icon: "../../../public/email.svg" },
                                    { label: "First Name", type: "text", name: "firstName", icon: "../../../public/phone.svg" },
                                    { label: "Second Number", type: "text", name: "secondNumber", icon: "../../../public/phone.svg" },
                                ].map((field, index) => (
                                    <Grid item xs={12} sm={6} sx={{ paddingTop: '0px', '& .MuiGrid-item':{paddingTop:'0'} }} key={index}>
                                        <label className="inputLabel" htmlFor={field.name}>{field.label}</label>
                                        <div className="inputContainer">
                                            <img  className="inputIcon" src={field.icon}/>
                                            {field.type === "select" ? (
                                                <select className="inputStyle" name={field.name} id={field.name} ><option value={field.name} disabled selected hidden>{field.label} </option></select>
                                            ) : (
                                                <input className="inputStyle" type={field.type} name={field.name} id={field.name} placeholder={field.label}/>
                                            )}
                                        </div>
                                    </Grid>
                                ))}
                            </Grid>
                            <Box sx={{ mt: 3 }}>
                                <button
                                    style={{
                                        backgroundColor: color.orange,
                                        color: color.white,
                                        padding: "15px",
                                        fontSize: "16px",
                                        width: '100%',
                                        fontWeight: "bold",
                                        borderRadius: "10px",
                                        border: 'none',
                                        boxShadow: "rgba(240, 83, 38, 0.3) 0px 5px",
                                        cursor: 'pointer',
                                        transition: "background-color 0.3s ease",
                                    }}
                                >
                                    Request Your Quote
                                </button>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5} className={isVisible ? "right-section" : ""}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                        }}
                    >
                        <img
                            src={truckImage}
                            alt="Truck"
                            style={{
                                width: "100%",
                                maxWidth: "500px",
                                borderRadius: "10px",
                                height: '100%'
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Contact;
