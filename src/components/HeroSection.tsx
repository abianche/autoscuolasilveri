// components/HeroSection.tsx
import { Box, colors, Container, Typography } from "@mui/material";
import RotatingText from "./RotatingText";

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url(/comunanza.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Transparent Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(255, 255, 255, 0.7)",
          zIndex: 1,
        }}
      />

      {/* Text Content */}
      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
          {"Autoscuola Silveri".toUpperCase()}
        </Typography>
        <RotatingText
          strings={["Patenti", "Assicurazioni", "Pratiche auto"]}
          interval={4000} // Rotate every 4 seconds
        />
        <Typography variant="h6" color={colors.grey[800]}>
          {"Da più di 50 anni un unica missione: insegnare a guidare con divertimento ed in sicurezza".toUpperCase()}
        </Typography>
      </Container>
    </Box>
  );
}
