import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "../assets/images/logo.svg";
import { Divider, Stack } from "@mui/material";

const pages = ["Home", "Solutions", "Services", "About Us"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [activePage, setActivePage] = React.useState("Home");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handlePageClick = (page) => {
    setActivePage(page);
    handleCloseNavMenu();
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.8) 80%)",
        boxShadow: 0,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ height: "112px" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: "100%" }}
          >
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: "#fff" }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => handlePageClick(page)}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
                <Divider />
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" color="#F05326">
                    Log In
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" color="#F05326">
                    Sign Up
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <Button
                sx={{
                  display: { xs: "flex", md: "none" },
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  mr: 3,
                }}
              >
                <img src={logo} alt="Logo" height="40" />
              </Button>
            </Box>

            <Box
              sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
            >
              <Button href="/">
                <img src={logo} alt="Logo" height="40" />
              </Button>
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flexGrow: 1,
                justifyContent: "center",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handlePageClick(page)}
                  sx={{
                    my: 2,
                    mx: 1,
                    color: "#fff",
                    fontWeight: "700",
                    borderRadius: "50px",
                    backgroundColor:
                      activePage === page ? "#F05326" : "transparent",
                    "&:hover": {
                      backgroundColor: "#F05326",
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Stack
              direction="row"
              spacing={2}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <Button
                sx={{
                  color: "#fff",
                  border: "1px solid white",
                  borderRadius: "50px",
                  "&:hover": {
                    backgroundColor: "#F05326",
                  },
                }}
              >
                Login
              </Button>
              <Button
                sx={{
                  color: "#fff",
                  background: "#F05326",
                  border: "1px solid white",
                  borderRadius: "50px",
                }}
              >
                Sign Up
              </Button>
            </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
