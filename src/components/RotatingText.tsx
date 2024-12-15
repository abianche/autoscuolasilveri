"use client";

import React, { useState, useEffect } from "react";
import { Box, colors, Typography } from "@mui/material";

interface RotatingTextProps {
  strings: string[];
  interval?: number; // Interval in milliseconds
}

export default function RotatingText({
  strings,
  interval = 3000,
}: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % strings.length);
      }, 500); // Match this duration with the CSS animation duration
    }, interval);

    return () => clearInterval(timer);
  }, [strings, interval]);

  return (
    <Box
      sx={{
        overflow: "hidden",
        height: "50px",
        position: "relative",
      }}
    >
      <Typography
        variant="h4"
        component="div"
        sx={{
          position: "absolute",
          top: animate ? "-100%" : "0",
          transition: "top 0.5s ease",
          textAlign: "center",
          width: "100%",
          fontWeight: "bold",
        }}
        color={colors.lightBlue[700]}
      >
        {strings[currentIndex].toUpperCase()}
      </Typography>
    </Box>
  );
}
