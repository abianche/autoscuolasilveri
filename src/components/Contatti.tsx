"use client";

// components/Contatti.tsx
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box, colors, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const locations = [
  {
    name: "Sede principale",
    address: "Viale Trento 95 - 63087 Comunanza (AP)",
    phone: "+39 0736 845317",
    mapLink: "https://maps.app.goo.gl/3LgGhFJWAXXQip5R8",
  },
  {
    name: "Sede filiale",
    address: "Viale Della Repubblica 9 - 63093 Roccafluvione (AP)",
    phone: "+39 0736 365889",
    mapLink: "https://maps.app.goo.gl/tFn72wMzYYcS2RwTA",
  },
];

export default function Contatti() {
  return (
    <Box sx={{ py: 6, px: 4 }} bgcolor={colors.common.white}>
      <Container>
        <Typography variant="h4" align="center" sx={{ mb: 8 }}>
          {"Contatti".toUpperCase()}
        </Typography>
        <Grid container spacing={4}>
          {/* Opening Hours */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Orari di apertura
            </Typography>
            <Typography variant="body1">
              Lunedì - Venerdì: 9:00 - 12:30 | 16:00 - 19:20
            </Typography>
            <Typography variant="body1">Sabato: 9:00 - 12:30</Typography>
          </Grid>

          {/* Locations */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Vieni a trovarci
            </Typography>
            {locations.map((location) => (
              <Box key={location.name} sx={{ mb: 4 }}>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", mb: 2 }}
                >
                  {location.name}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ display: "flex", alignItems: "center", mb: 2 }}
                >
                  <LocationOnIcon sx={{ mr: 1 }} />
                  <a
                    href={location.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {location.address}
                  </a>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <PhoneIcon sx={{ mr: 1 }} />
                  <a
                    href={`tel:${location.phone}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {location.phone}
                  </a>
                </Typography>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
