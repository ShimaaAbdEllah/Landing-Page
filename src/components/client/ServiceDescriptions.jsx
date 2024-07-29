import { Grid } from "@mui/material";
import { color } from "../../colors/colors";

const ServiceDescriptions = ({isVisible}) => (
    <Grid container spacing={3} justifyContent="center" sx={{ width: "80%", marginLeft: "0", zIndex: "555555555555", padding:'0' }}>
        <Grid item md={6} sm={12} sx={{paddingLeft:'0px !important'}}>
            <h3 style={{ color: color.white, textAlign: "left", width: "90%" }} className={isVisible ? "leftText2" : ""}>
                <span style={{ color: color.orange }}>"NQLYAT Solutions"</span> offers a comprehensive solution that goes beyond the basic data of tonnage and freight.
            </h3>
        </Grid>
        <Grid item md={6} sm={12} justifyContent="flex-end" className="section2">
            <h3 style={{ color: color.white, textAlign: "left", width: "90%" }} className={isVisible ? "rightText1" : ""}>
                <span style={{ color: color.orange }}>Our customers</span> get exclusive access to the best carrier monitoring services and smooth registration processes, as well as Advanced Cargo Tracking Solutions, setting a new standard in freight brokerage.
            </h3>
        </Grid>
    </Grid>
);

export default ServiceDescriptions;
