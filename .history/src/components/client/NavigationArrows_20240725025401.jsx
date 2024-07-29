import { Box } from "@mui/material";
import { styles } from "../../../styles/styles";
import React from "react";

const NavigationArrows = ({ selected, handleSetSelected }) => (
    <Box sx={{ display: "flex", gap: "30px" }}>
        <span
            onClick={() => handleSetSelected("🡠")}
            style={selected === "🡠" ? { ...styles.selectedArrow } : { ...styles.normalArrow }}
        >
            🡠
        </span>
        <span
            onClick={() => handleSetSelected("🡢")}
            style={selected === "🡢" ? { ...styles.selectedArrow } : { ...styles.normalArrow }}
        >
            🡢
        </span>
    </Box>
);

export default NavigationArrows;
