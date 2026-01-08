"use client";

// components/AboutSection.tsx
import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid";

export default function AboutSection() {
  return (
    <Box sx={{ py: 6, px: 4 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
            {"CHI SIAMO"}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {
              "Dal 1967 assistiamo i nostri studenti nel loro obiettivo: guidare."
            }
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {
              "Combinando i valori tradizionali con lo stile moderno, siamo diventati una delle principali scuole guida nell'entroterra marchigiano con oltre 50 anni di esperienza nella seconda generazione."
            }
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {
              "I nostri istruttori professionali, affidabili e amichevoli renderanno l'apprendimento nel guidare il più semplice possibile e ti faranno sentire al sicuro al volante."
            }
          </Typography>
          <Typography variant="body1">
            {
              "Non vediamo l'ora di accompagnarti in questo percorso e siamo sempre disponibili per rispondere alle tue domande!"
            }
          </Typography>
        </Grid>
        <Grid size={{ md: 12, lg: 6 }} sx={{ textAlign: "center" }}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={574}
            height={140}
            style={{
              width: "100%",
              maxWidth: "574px", // Maximum size on larger screens
              height: "auto",
              borderRadius: "8px",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
