import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import img from "../assets/images/Rectangle 1.png";

const fadeIn = {
  "@keyframes fadeIn": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
};

const slideIn = {
  "@keyframes slideIn": {
    from: { transform: "translateX(-100%)", opacity: 0 },
    to: { transform: "translateX(0)", opacity: 1 },
  },
};

const delayedVisibility = {
  "@keyframes delayedVisibility": {
    from: { visibility: "hidden" },
    to: { visibility: "visible" },
  },
};

export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        minHeight: { xs: "400px", sm: "600px", md: "800px" },
        background: "rgba(0, 0, 0, 0.3)",
      }}
    >
      <Box
        sx={{
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          zIndex: -1,
          animation: "fadeIn 2s ease-in-out forwards",
          opacity: 0,
          ...fadeIn,
        }}
      />
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          minHeight: { xs: "400px", sm: "600px", md: "800px" },
          textAlign: "center",
          padding: "0 1rem",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "white",
            textDecoration: "none",
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            marginBottom: { xs: "1rem", md: "1.5rem" },
            opacity: 0,
            animation: "slideIn 2s ease-in-out 1s forwards",
            ...slideIn,
          }}
        >
          Intermediaries in <br />
          <span style={{ color: "#F05326" }}>"NQLYAT solutions"</span>
        </Typography>
        <Typography
          variant="h4"
          sx={{
            maxWidth: "1000px",
            fontWeight: 100,
            letterSpacing: ".3rem",
            color: "white",
            textDecoration: "none",
            fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
            visibility: "hidden",
            animation: "delayedVisibility 0s ease-in-out 3s forwards",
            ...delayedVisibility,
          }}
        >
          can now transport more cargo and tackle any logistical challenge,
          thanks to access to the largest fleet and the widest data in the
          market.
        </Typography>
        <br />
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
            visibility: "hidden",
            animation: "delayedVisibility 0s ease-in-out 3.5s forwards",
            ...delayedVisibility,
          }}
        >
          Get in Touch
        </Button>
      </Stack>
    </Box>
  );
}
