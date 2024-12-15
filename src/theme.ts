"use client";

import { colors, createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colors.common.white,
    },
    secondary: {
      main: "#f44336",
    },
    success: {
      main: colors.lightBlue[100],
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const theme = createTheme({
  ...lightTheme,
  cssVariables: {
    colorSchemeSelector: "data-mui-color-scheme",
  },
  colorSchemes: {
    dark: false,
  },
});

export default theme;
