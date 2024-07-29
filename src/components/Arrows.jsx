import React from "react";
import { Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const OrangeArrow = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "50px",
        justifyContent: "center",
      }}
    >
      <Stack
        direction={"column"}
        spacing={6}
        sx={{
          position: "relative",
          top: "50px",
        }}
      >
        <ArrowForwardIcon
          sx={{
            color: "#fff",
            opacity: 0.1,
            fontSize: "120px",
            cursor: "pointer",
            transform: "rotate(320deg)",
            position: "absolute",
            right: "10px",
            bottom: "0.5px",
            zIndex: 100000,
          }}
        />
        <ArrowForwardIcon
          sx={{
            color: "#F05326",
            fontSize: "90px",
            cursor: "pointer",
            transform: "rotate(320deg)",
            position: "absolute",
            right: "5px",
            bottom: "30px",
          }}
        />
      </Stack>
    </div>
  );
};

export default OrangeArrow;
