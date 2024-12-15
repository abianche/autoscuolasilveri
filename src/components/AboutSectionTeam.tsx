// components/AboutSectionTeam.tsx
import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid2";

export default function AboutSectionTeam() {
  return (
    <Box sx={{ py: 6, px: { xs: 2, md: 16 } }}>
      <Grid container spacing={4} alignItems="center">
        <Grid size={{ md: 12, lg: 6 }} sx={{ textAlign: "center" }}>
          <Image
            src="/about/comunanza.jpg"
            alt="Logo"
            width={540}
            height={405}
            style={{
              width: "100%",
              maxWidth: "540px", // Maximum size on larger screens
              height: "auto",
            }}
          />
        </Grid>
        <Grid size={{ md: 12, lg: 6 }}>
          <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
            {"Perchè siamo differenti".toUpperCase()}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {
              "Con più di 50 anni di esperienza nell'insegnamento e nella formazione al volante, con la massima attenzione alla sicurezza, la nostra scuola offre lezioni per tutte le categorie, con veicoli attuali e di proprietà."
            }
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {
              "I nostri istruttori sono professionisti qualificati ed esperti, che insegnano tecniche di guida notturne e diurne, su strade urbane, extra-urbane principali e secondarie, e autostrade."
            }
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {
              "Ci prendiamo cura dell'educazione degli adolescenti nelle loro prime esperienze su strada, cercando di trasmettere senso di responsabilità nel rispetto delle regole."
            }
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
