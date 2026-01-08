"use client";

// components/CallToAction.tsx
import { Box, Button, Container, Typography } from "@mui/material";
import NextLink from "next/link";

export default function CallToAction() {
  return (
    <Box
      sx={{
        py: 6,
        px: 4,
        textAlign: "center",
      }}
    >
      <Container>
        <Typography variant="h3" sx={{ mb: 2, fontWeight: "bold" }}>
          {"Ti aspettiamo!".toUpperCase()}
        </Typography>
        <Typography variant="h6" sx={{ mb: 4 }}>
          {
            "Clicca qua sotto per contattarci! Vieni a trovarci in una delle sedi o inviaci un messaggio!"
          }
        </Typography>
        <Button
          LinkComponent={NextLink}
          href="/contatti"
          variant="contained"
          color="error"
          size="large"
        >
          Contattaci
        </Button>
      </Container>
    </Box>
  );
}
