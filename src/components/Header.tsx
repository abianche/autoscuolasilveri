// components/Header.tsx
import { AppBar, Box, Link, Toolbar } from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Chi siamo", href: "/chi-siamo" },
  { label: "Servizi", href: "/servizi" },
  { label: "Contatti", href: "/contatti" },
];

export default function Header() {
  return (
    <AppBar
      position="sticky"
      color="primary"
      elevation={0}
      sx={{ px: { xs: 2, md: 6 }, alignItems: { xs: "center", md: "normal" } }}
    >
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
              style={{
                borderRadius: "8px",
              }}
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
      </Toolbar>
      <Box
        sx={{
          display: {
            xs: "flex",
            md: "none",
            justifyContent: "center",
          },
        }}
      >
        {navLinks.map((link) => (
          <Link
            component={NextLink}
            key={link.label}
            href={link.href}
            color="inherit"
            underline="none"
            sx={{ mx: 1, my: 2 }}
          >
            {link.label.toUpperCase()}
          </Link>
        ))}
      </Box>
    </AppBar>
  );
}
