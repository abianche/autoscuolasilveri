// components/Header.tsx
"use client";

import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import ContactsIcon from "@mui/icons-material/Contacts";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Toolbar,
} from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/", icon: <HomeIcon /> },
  { label: "Chi siamo", href: "/chi-siamo", icon: <PeopleIcon /> },
  { label: "Servizi", href: "/servizi", icon: <WorkIcon /> },
  { label: "Contatti", href: "/contatti", icon: <ContactsIcon /> },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="sticky" color="primary" elevation={0} sx={{ px: 6 }}>
      <Toolbar variant="dense">
        {/* Logo */}
        <Box sx={{ flexGrow: 1, pt: 2 }}>
          <Link component={NextLink} href="/" color="inherit" underline="none">
            <Image
              src="/logo.png"
              width={250}
              height={61.19}
              alt="Logo"
              quality={100}
            />
          </Link>
        </Box>

        {/* Links for large screens */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          {navLinks.map((link) => (
            <Link
              component={NextLink}
              key={link.label}
              href={link.href}
              color="inherit"
              underline="none"
              sx={{ mx: 2 }}
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
        </Box>

        {/* Burger Menu for small screens */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton
            color="inherit"
            edge="end"
            onClick={toggleDrawer(true)}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            <List component="nav" sx={{ width: 250 }}>
              {navLinks.map((link) => (
                <ListItem
                  key={link.label}
                  component={NextLink}
                  href={link.href}
                  onClick={toggleDrawer(false)}
                >
                  <>
                    <ListItemIcon>{link.icon}</ListItemIcon>
                    <ListItemText primary={link.label.toUpperCase()} />
                  </>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
