"use client";

// components/CookieBanner.tsx
import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(() => {
    return localStorage.getItem("cookieConsent") !== "true";
  });


  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  return isVisible ? (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        bgcolor: "grey.900",
        color: "white",
        py: 2,
        px: 3,
        zIndex: 1000,
        textAlign: "center",
      }}
    >
      <Typography variant="body2" sx={{ mb: 1 }}>
        {
          "Questo sito utilizza i cookie per migliorare l'esperienza utente. Leggi la nostra "
        }
        <a
          href="/cookie-policy"
          style={{ color: "lightblue", textDecoration: "underline" }}
        >
          {"politica sui cookie"}
        </a>
        {"."}
      </Typography>
      <Button variant="contained" color="primary" onClick={handleAccept}>
        Accetta
      </Button>
    </Box>
  ) : null;
};

export default CookieBanner;
