"use client";

import dynamic from "next/dynamic";

const CookieBanner = dynamic(() => import("@/components/CookieBanner"), {
  ssr: false,
});
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { colors, Container } from "@mui/material";
import Box from "@mui/material/Box";
import { ReactNode } from "react";

export default function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Container
        component="main"
        disableGutters
        maxWidth={false}
        sx={{
          flexGrow: 1,
          backgroundColor: colors.lightBlue[100],
          px: 0,
          mx: 0,
        }}
      >
        {children}
        <CookieBanner />
      </Container>
      <Footer />
    </Box>
  );
}
