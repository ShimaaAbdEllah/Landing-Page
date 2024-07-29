import { Box } from "@mui/material";
import Arrows from "../../components/Arrows";
import { color } from "../../colors/colors";
import "./client.css";

const HeaderSection = ({ isVisible }) => (
  <>
    <Box sx={{ position: "relative", right: "500px" }}>
      <Arrows />
    </Box>
    <Box sx={{ position: "relative", width: "80%" }}>
      <Box sx={{ display: "flex", justifyContent: "flex-start", width: "80%" }}>
        <p
          className={isVisible ? "leftText1" : ""}
          style={{
            zIndex: "5118888",
            color: color.white,
            maxWidth: "60%",
            textAlign: "left",
            paddingTop: "10px",
          }}
        >
          Speeding up the carrier registration process and minimizing risks is
          part of the effective process of shipping agencies.
        </p>
      </Box>
    </Box>
  </>
);

export default HeaderSection;
