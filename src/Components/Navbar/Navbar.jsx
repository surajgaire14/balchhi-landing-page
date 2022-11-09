import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuItem from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Slide } from "@mui/material";
import { Close } from "@mui/icons-material";
import { animateScroll, Link } from "react-scroll";
import UpdateScrollPosition from "../../Hooks/UpdateScrollPosition";
import logo from "../../images/balchhiLogo1.png";
import { useNavigate,Link as RouterLink } from "react-router-dom";
import "./style.css";

const drawerWidth = "100%";
const navItems = ["Home", "Facilities", "About Us", "Contact"];

export default function Navbar({ showlinks, setShowlinks }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [tabOpen, setTabOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const containerRef = React.useRef(null);

  const navigate = useNavigate();
  let scrollPosition = UpdateScrollPosition();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    setTabOpen(!tabOpen);
    setChecked((prev) => !prev);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", padding: 0 }}>
      <List style={{ padding: 0 }}>
        {navItems.map((item, i) => (
          <ListItem key={i} style={{ borderBottom: "1px solid #0002" }}>
            <ListItemButton sx={{ textAlign: "left" }}>
              <Link key={i} to={item === "Home" ? "" : item}>
                {item}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{ display: "flex", sm: { display: "flex" } }}
      style={{ transition: "all .5s ease-in-out" }}
    >
      <AppBar
        component="nav"
        style={{
          zIndex: 1500,
          color: "#000",
          background: "#f3f3f5",
          borderBottom: "1px solid #0002",
          boxShadow: "none",
        }}
        ref={containerRef}
        position="fixed"
        className={`${scrollPosition > 30 && !checked && "Shadow"}`}
        id="Home"
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
            height: "100%",
            margin: "auto",
            alignItems: "center",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none", md: "none" } }}
            style={{ color: "#000" }}
          >
            {!checked ? <MenuItem /> : <Close />}
          </IconButton>
          <RouterLink
            to={"/"}
            style={{ cursor: "pointer" }}
            className="image__link"
            // onClick={() => {
            //  navigate("/")
            // }}
          >
            <img
              src={logo}
              alt="logo"
              style={{ borderRadius: "50%", width: "5rem" }}
              className="images"
            />
          </RouterLink>
          <Box
            sx={{
              display: { xs: "none", sm: "none", gap: "50px", md: "flex" },
            }}
          >
            {showlinks &&
              navItems.map((item, i) => (
                <Link
                  key={i}
                  style={{
                    cursor: "pointer",
                    fontSize: "18px",
                    lineHeight: "20px",
                    color: scrollPosition > 30 ? "#000" : "#000",
                    fontWeight: scrollPosition > 30 ? "normal" : "normal",
                  }}
                  className={`navLinks ${
                    item === "Home" && scrollPosition < 627
                      ? "active"
                      : item === "Facilities" &&
                        scrollPosition >= 627 &&
                        scrollPosition < 1461
                      ? "active"
                      : item === "About Us" &&
                        scrollPosition > 1460 &&
                        scrollPosition < 2400
                      ? "active"
                      : item === "Contact" && scrollPosition > 2400 && "active"
                  }`}
                  to={item === "Home" ? "" : item}
                  smooth={true}
                  offset={-170}
                  duration={1000}
                  onClick={() => {item === "Home" && animateScroll.scrollToTop()}}
                >
                  {item}
                </Link>
              ))}
          </Box>
          <div style={{ display: "flex" }} className="buttonBox">
            <Button
              style={{ background: "orangered", color: "#fff" }}
              sx={{
                display: { xs: "none", sm: "block", md: "block", lg: "block" },
              }}
            >
              Contact Us
            </Button>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "block", md: "none", xs: "none" } }}
              style={{ color: "#000" }}
            >
              {!checked ? <MenuItem /> : <Close />}
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Slide direction="down" in={checked} container={containerRef.current}>
          <Drawer
            // container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                height: "35vh",
                marginTop: "80px",
                fill: (theme) => theme.palette.common.white,
                stroke: (theme) => theme.palette.divider,
                strokeWidth: 1,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Slide>
      </Box>
    </Box>
  );
}
