import React, { useState } from "react";
import { Box, Grid, Typography, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import "../../styles/about.css";
import img from "../assets/images/Rectangle 2.png";
import img2 from "../assets/images/Rectangle 3.png";
import img3 from "../assets/images/Rectangle 4.png";
import Page3 from "./Page3";

const boxes = [
  [
    { img: img, zIndex: 3, left: "70%", borderRadius: "20px" },
    { img: img2, zIndex: 2, left: "85%", borderRadius: "20px" },
    { img: img3, zIndex: 1, left: "100%", borderRadius: "20px" },
  ],
  [
    { img: img2, zIndex: 3, left: "70%", borderRadius: "20px" },
    { img: img3, zIndex: 2, left: "85%", borderRadius: "20px" },
    { img: img, zIndex: 1, left: "100%", borderRadius: "20px" },
  ],
  [
    { img: img3, zIndex: 3, left: "70%", borderRadius: "20px" },
    { img: img, zIndex: 2, left: "85%", borderRadius: "20px" },
    { img: img2, zIndex: 1, left: "100%", borderRadius: "20px" },
  ],
];

const AboutSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % boxes.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? boxes.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      id="about"
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#383838",
        width: "100%",
      }}
    >
      <Box sx={{ width: "80%", zIndex: 1 }}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ display: "flex" }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Stack
              direction={"column"}
              spacing={6}
              sx={{ position: "relative", right: "200px" }}
            >
              <ArrowForwardIcon
                sx={{
                  color: "#fff",
                  opacity: 0.1,
                  fontSize: "120px",
                  cursor: "pointe",
                  transform: "rotate(320deg)",
                  position: "absolute",
                  right: "10px",
                  bottom: "0.5px",
                }}
              />
              <ArrowForwardIcon
                sx={{
                  color: "#fff",
                  fontSize: "90px",
                  cursor: "pointe",
                  transform: "rotate(320deg)",
                  position: "absolute",
                  right: "5px",
                  bottom: "30px",
                }}
              />
            </Stack>
            <Stack
              direction={"row"}
              spacing={6}
              sx={{ position: "relative", left: "120px", bottom: "50px" }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #fff",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  margin: "10px",
                  position: "relative",
                  bottom: "40px",
                  "&:hover": {
                    backgroundColor: "#F05326",
                    border: "1px solid #F05326",
                  },
                }}
                onClick={handlePrev}
              >
                <ArrowBackIcon
                  sx={{ color: "#fff", fontSize: "30px", cursor: "pointer" }}
                  onClick={handlePrev}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #fff",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  margin: "10px",
                  position: "relative",
                  bottom: "40px",
                  "&:hover": {
                    backgroundColor: "#F05326",
                    border: "1px solid #F05326",
                  },
                }}
                onClick={handleNext}
              >
                <ArrowForwardIcon
                  sx={{ color: "#fff", fontSize: "30px", cursor: "pointer" }}
                  onClick={handleNext}
                />
              </Box>
            </Stack>

            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                color: "#fff",
                textAlign: "center",
                fontSize: { xs: "5vw", sm: "20px" },
                lineHeight: { xs: "6vw", sm: "30px" },
                marginBottom: "20px",
                position: "relative",
                bottom: "50px",
              }}
            >
              Take advantage of the superior load-loading platforms of "NQLYAT
              solutions", which serve intermediaries of all sizes. Whether you
              are an emerging broker or a country-wide operation, the pallets
              for loading cargo for brokers from "transport solutions" guarantee
              prompt delivery of your shipments.
              <p style={{ fontSize: "14px", margin: "0" }}>
                Cargo loading platforms from "NQLYAT solutions" are designed to
                simplify your operations and keep your cargo in constant motion.
                We rely on actual transactions to deliver accurate market prices
                across various routes, while peer reviews direct you to the
                perfect carrier every time. With "transportation solutions", you
                can publish and search for trucks without limits, and stay
                informed thanks to instant alerts even when you are offline.
              </p>
            </Typography>
            <Stack
              direction={"row"}
              spacing={6}
              sx={{ position: "relative", bottom: "30px" }}
            >
              <Button
                sx={{
                  width: "150px",
                  height: "40px",
                  color: "#F05326",
                  background: "#fff",
                  border: "1px solid #fff",
                  borderRadius: "50px",
                  "&:hover": {
                    color: "#fff",
                    backgroundColor: "#F05326",
                  },
                }}
              >
                Get A Quote
              </Button>
              <Button
                sx={{
                  width: "150px",
                  height: "40px",
                  color: "#fff",
                  border: "1px solid #fff",
                  borderRadius: "50px",
                  "&:hover": {
                    color: "#fff",
                    backgroundColor: "#F05326",
                  },
                }}
              >
                Learn More
              </Button>
            </Stack>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            sx={{ position: "relative", bottom: "180px" }}
          >
            {boxes[currentIndex].map((box, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: "300px", sm: "500px" },
                  height: { xs: "300px", sm: "500px" },
                  backgroundImage: `url(${box.img})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  borderRadius: box.borderRadius,
                  position: "absolute",
                  left: box.left,
                  transform: "translateX(-50%)",
                  top: "30%",
                  zIndex: box.zIndex,
                  transition: "transform 0.5s ease",
                }}
              ></Box>
            ))}
          </Grid>
        </Grid>
      </Box>
      <div className="shape1"></div>
      <div className="shape2"></div>
      <div className="blur"></div>
      <Page3/>
    </div>
  );
};

export default AboutSection;
