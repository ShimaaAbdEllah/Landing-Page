import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Button, TextField } from "@mui/material";
import backgroundImage from "/landing.png";
import emailIcon from "/email.svg";
import phoneIcon from "/phone.svg";
import logo from "/logo.png";
import "./footer.css";
import { color } from "../../colors/colors";

const useStyles = {
  root: {
    backgroundColor: "#333",
    color: "white",
    overflowX: "hidden",
  },
  leftSection: {
    textAlign: "left",
    padding: "20px",
    marginLeft: "10%",
  },
  logo: {
    marginBottom: "20px",
    paddingTop: "50px",
  },
  getInTouch: {
    margin: "20px 0",
  },
  contactInfo: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  icon: {
    marginRight: "10px",
    backgroundColor: color.orange,
    color: "white",
    borderRadius: "5px",
    padding: "5px",
  },
  middleSection: {
    display: "flex",
    padding: "20px",
    flexDirection: "column",
    alignItems: "flex-start",
    textAlign: "left",
    paddingLeft: "20px",
    marginLeft: "2.5%",
  },
  subscribeSection: {
    backgroundImage: `url('${backgroundImage}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    padding: "20px",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  input: {
    backgroundColor: "white",
    borderRadius: "10px",
    marginRight: "10px",
    height: "40px",
    width: "100%",
  },
  button: {
    borderRadius: "10px",
    backgroundColor: "#F05326",
    color: "white",
    "&:hover": {
      backgroundColor: "#D9431D",
    },
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  socialIcon: {
    margin: "0 10px",
    color: "white",
    fontSize: "24px",
  },
};

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("footer");
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
    <Box id="footer" sx={useStyles.root}>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          width: "100%",
          position: "relative",
          left: "16px",
        }}
      >
        <Grid
          item
          xs={12}
          md={3}
          sx={useStyles.leftSection}
          className={isVisible ? "left-section" : ""}
        >
          <img src={logo} alt="Logo" style={useStyles.logo} />
          <Typography variant="h6" sx={{ fontSize: "16px" }}>
            Nqlyat solutions: the leading shipping platform with superior
            service quality
          </Typography>
          <Typography variant="h5" sx={useStyles.getInTouch}>
            Get in touch
          </Typography>
          <Box sx={useStyles.contactInfo}>
            <img src={emailIcon} alt="Email Icon" style={useStyles.icon} />
            <Typography>marie28@yahoo.com</Typography>
          </Box>
          <Box sx={useStyles.contactInfo}>
            <img src={emailIcon} alt="Email Icon" style={useStyles.icon} />
            <Typography>marie28@yahoo.com</Typography>
          </Box>
          <Box sx={useStyles.contactInfo}>
            <img src={phoneIcon} alt="Phone Icon" style={useStyles.icon} />
            <Typography>360.766.0553</Typography>
          </Box>
          <Box sx={useStyles.contactInfo}>
            <img src={phoneIcon} alt="Phone Icon" style={useStyles.icon} />
            <Typography>360.766.0553</Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          sx={useStyles.middleSection}
          className={isVisible ? "middleSection" : ""}
        >
          <Typography variant="h5" sx={{ paddingTop: "55px" }}>
            Company
          </Typography>
          <Typography style={{ color: color.orange, paddingTop: "30px" }}>
            Home
          </Typography>
          <Typography>Solution</Typography>
          <Typography>Pricing</Typography>
          <Typography>Services</Typography>
          <Typography>About Us</Typography>
          <Typography>News</Typography>
          <Typography>Contact Us</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={5.5}
          sx={useStyles.subscribeSection}
          className={isVisible ? "right-section" : ""}
        >
          <Typography
            variant="h5"
            style={{
              color: color.orange,
              paddingTop: "50px",
              fontWeight: "bold",
            }}
          >
            Subscribe
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ width: "80%" }}
            mt={2}
          >
            <TextField
              placeholder="Your Email Address"
              variant="outlined"
              size="small"
              sx={useStyles.input}
            />
            <Button variant="contained" sx={useStyles.button}>
              Subscribe
            </Button>
          </Box>
          <span
            style={{
              height: "1px",
              width: "80%",
              backgroundColor: "white",
              marginTop: "10px",
            }}
          ></span>
          <Box sx={useStyles.socialIcons}>
            <i className={`fab fa-instagram`} style={useStyles.socialIcon} />
            <i className={`fab fa-facebook`} style={useStyles.socialIcon} />
            <i className={`fab fa-twitter`} style={useStyles.socialIcon} />
            <i className={`fab fa-linkedin`} style={useStyles.socialIcon} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
