import { Box, colors, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";

const sponsors = [
  { name: "MIT", logo: "/associates/mit.png" },
  {
    name: "Portale Automobilista",
    logo: "/associates/portale_automobilista.jpg",
  },
  {
    name: "Sportello Telematico Automobilista",
    logo: "/associates/sportello_telematico_automobilista.png",
  },
  { name: "UNASCA", logo: "/associates/unasca.jpg" },
  { name: "UNIPOLSAI", logo: "/associates/unipolsai.png" },
];

export default function Associates() {
  return (
    <Box sx={{ py: 4, px: 4, bgcolor: colors.grey[100] }}>
      <Container>
        <Grid
          container
          spacing={4}
          size={{ xs: 6, sm: 3, md: 2 }}
          justifyContent="space-evenly"
        >
          {sponsors.map((sponsor, index) => (
            <Grid
              display="flex"
              justifyContent="center"
              size="auto"
              key={index}
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={200}
                height={100}
                style={{
                  objectFit: "contain",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
