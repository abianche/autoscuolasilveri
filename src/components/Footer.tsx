// components/Footer.tsx
"use client";

import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, colors, Container, Link, Stack, Typography } from "@mui/material";

export default function Footer() {
  const year = new Date().getFullYear().toString();
  const footer = (
    <>
      <Stack direction={"column"}>
        <Typography variant="body1">
          {`Copyright © ${year} AUTOSCUOLA SILVERI. Tutti i diritti riservati.`}
        </Typography>
        <Typography variant="body2" sx={{ textDecoration: "none" }}>
          {"P.Iva: 01164690446"}
        </Typography>
      </Stack>
      <Stack direction={"row"} spacing={2}>
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
    </>
  );

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
            display: { xs: "none", md: "flex" },
          }}
        >
          {footer}
        </Stack>
        <Stack
          direction={"column"}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            px: { xs: 0, md: 10 },
            display: { xs: "flex", md: "none" },
          }}
        >
          {footer}
        </Stack>
      </Container>
    </Box>
  );
}
