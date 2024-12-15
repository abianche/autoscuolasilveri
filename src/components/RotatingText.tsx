"use client";

import React, { useState, useEffect } from "react";
import { Box, colors, Typography } from "@mui/material";

interface RotatingTextProps {
  strings: string[];
  interval?: number; // Interval in milliseconds
}

export default function RotatingText({
  strings,
  interval = 5000,
}: Readonly<RotatingTextProps>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  // Function to handle animation reset
  const resetAnimation = () => {
    setAnimate(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % strings.length);
  };

  // Function to trigger animation
  const triggerAnimation = () => {
    setAnimate(true);
    setTimeout(resetAnimation, 500);
  };

  useEffect(() => {
    const timer = setInterval(triggerAnimation, interval);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
