// app/cookie-policy/page.tsx
import React from "react";
import { Box, colors, Container, Typography } from "@mui/material";

export default function CookiePolicyPage() {
  return (
    <Box sx={{ py: 6, bgcolor: colors.common.white }}>
      <Container>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Politica sui Cookie
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          {
            "Utilizziamo i cookie per garantire il corretto funzionamento del sito. I cookie sono piccoli file di testo che vengono salvati sul dispositivo dell'utente."
          }
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Tipologie di cookie utilizzati:
        </Typography>
        <ul>
          <li>
            <Typography variant="body2">
              <strong>Cookie Necessari:</strong> Essenziali per il funzionamento
              del sito.
            </Typography>
          </li>
        </ul>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Questo sito non utilizza cookie per tracciare o memorizzare dati degli
          utenti.
        </Typography>
        <Typography variant="body1">
          {
            "Per ulteriori informazioni, contattaci attraverso la nostra pagina "
          }
          <a
            href="/contatti"
            style={{ textDecoration: "underline", color: "blue" }}
          >
            {"contatti"}
          </a>
          {"."}
        </Typography>
      </Container>
    </Box>
  );
}
