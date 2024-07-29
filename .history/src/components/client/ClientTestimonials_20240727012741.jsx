import { Box, Grid, Typography, Rating } from "@mui/material";
import ClientCard from "./ClientCard";
import { color } from "../../../colors/colors";
import React, { useState } from "react";

const ClientTestimonials = () => {
    const [value] = useState(5);

    const clients = [
        { name: "Ahmed", image: "../../../public/man1.png" },
        { name: "Bakr", image: "../../../public/man2.png" },
        { name: "Mohamed", image: "../../../public/man3.png" }
    ];

    return (
        <>
            <Box sx={{ paddingTop: '200px' }}>
                <Typography variant="h5" sx={{ fontWeight: "bold", color: color.white }}>
                    What <span style={{ color: color.orange }}>Our Clients</span> Says
                </Typography>
            </Box>
            <Grid container spacing={3} justifyContent="center" sx={{ width: "80%", marginLeft: "0", paddingTop: '50px' }}>
                {clients.map((client, index) => (
                    <Grid item key={index} md={4} sm={12} sx={{ display: 'flex', justifyContent: 'center', paddingLeft:'0 !important' }}>
                        <ClientCard>
                            <Box sx={{ display: "flex", justifyContent: "center", gap: "20px", flexDirection: 'column' }}>
                                <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "20px" }}>
                                    <img width={"20%"} src={client.image} alt="" />
                                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                                        <Typography variant="p" sx={{ fontWeight: "bold", textAlign: "left" }}>
                                            {client.name}
                                        </Typography>
                                        <Typography variant="p" sx={{ fontSize: "14px", textAlign: "left" }}>
                                            Owner
                                        </Typography>
                                        <Box sx={{ "& > legend": { mt: 2 } }}>
                                            <Rating name="read-only" value={value} readOnly size="small" />
                                        </Box>
                                    </Box>
                                </Box>
                                <Typography variant="p" sx={{ textAlign: 'left' }}>
                                    Lorem ipsum dolor sit amet consectetur. Tincidunt pharetra duis enim donec etiam tellus. Ac malesuada bibendum faucibus sollicitudin in amet at. Mauris donec pellentesque sit velit massa sem eget ligula. Morbi elit quis placerat pharetra in.
                                </Typography>
                            </Box>
                        </ClientCard>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default ClientTestimonials;
