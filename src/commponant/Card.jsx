import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import HtmlIcon from "@mui/icons-material/Html";
import { Stack } from "@mui/material";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import CodeIcon from "@mui/icons-material/Code";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import Typography from "@mui/material/Typography";

export default function OutlinedCard() {
  return (
    <>
      <Typography
        variant="h5"
        noWrap
        sx={{
          mr: 2,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "black",
          textDecoration: "none",
          textAlign: "center",
          marginTop: "15px",
        }}
      >
        My Skils
      </Typography>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        direction={"row"}
        gap={10}
        marginTop={5}
        width={"70%"}
        marginX={"auto"}
      >
        <List sx={{ width: "70%", maxWidth: 360, bgcolor: "background.paper" }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <CodeIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Angular" secondary="80%" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <CodeIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="React" secondary="90%" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <CodeIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Node" secondary="80%" />
          </ListItem>
        </List>
        <List sx={{ width: "70%", maxWidth: 360, bgcolor: "background.paper" }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <JavascriptIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="JS" secondary="80%" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <HtmlIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Html" secondary="100%" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <CssIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="CSS" secondary="100%" />
          </ListItem>
        </List>
        <List sx={{ width: "70%", maxWidth: 360, bgcolor: "background.paper" }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <IntegrationInstructionsIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Bootstrap" secondary="80%" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <IntegrationInstructionsIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Tailwind" secondary="100%" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <IntegrationInstructionsIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Material UI" secondary="80%" />
          </ListItem>
        </List>
      </Stack>
    </>
  );
}
