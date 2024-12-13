// components/Footer.tsx
"use client";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box, colors, Container, Link, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  const year = new Date().getFullYear().toString();
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: colors.grey[900],
        color: "white",
        py: 3,
        mt: "auto",
      }}
    >
      <Container maxWidth={false} sx={{ bgcolor: colors.grey[900] }}>
        <Stack
          direction={"row"}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            px: { xs: 0, md: 10 },
          }}
        >
          <Stack direction={"column"}>
            <Typography variant="body1">
              {`Copyright © ${year} AUTOSCUOLA SILVERI. Tutti i diritti riservati.`}
            </Typography>
            <Typography variant="body2">{"P.Iva: 01164690446"}</Typography>
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <LocationOnIcon />
            <a
              href={"https://maps.app.goo.gl/3LgGhFJWAXXQip5R8"}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {"Viale Trento 95 - 63087 Comunanza (AP)"}
            </a>
            <PhoneIcon />
            <a
              href={`tel:+39 0736 845317`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {"+39 0736 845317"}
            </a>
            <Link
              href="/cookie-policy"
              color="inherit"
              underline="hover"
              sx={{ display: "block" }}
            >
              Cookie Policy
            </Link>
            <Link
              color="primary"
              href="https://github.com/abianche/autoscuolasilveri"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
