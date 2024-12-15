// components/Team.tsx
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {
  Box,
  Card,
  CardContent,
  colors,
  IconButton,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";

const teamMembers = [
  {
    name: "Alessandro Silveri",
    role: "Insegnante / Istruttore",
    socialLinks: {
      whatsapp: "https://wa.me/393290280928",
    },
  },
  {
    name: "Giuliana Satulli",
    role: "Insegnante / Istruttore",
    socialLinks: {
      whatsapp: "https://wa.me/393284820053",
      facebook: "https://www.facebook.com/giuliana.satulli.7",
    },
  },
];

export default function Team() {
  return (
    <Box sx={{ py: 6, px: 4, bgcolor: colors.common.white }}>
      <Typography variant="h4" align="center" sx={{ mb: 4 }}>
        {"Il nostro team".toUpperCase()}
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={member.name}>
            <Card sx={{ textAlign: "center", p: 2 }}>
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  {member.name}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {member.role}
                </Typography>
                <Box>
                  {member.socialLinks.whatsapp && (
                    <IconButton
                      component="a"
                      href={member.socialLinks.whatsapp}
                      target="_blank"
                      rel="noopener"
                      sx={{ color: colors.lightBlue[700] }}
                    >
                      <WhatsAppIcon />
                    </IconButton>
                  )}
                  {member.socialLinks.facebook && (
                    <IconButton
                      component="a"
                      href={member.socialLinks.facebook}
                      target="_top"
                      rel="noopener"
                      sx={{ color: colors.lightBlue[700] }}
                    >
                      <FacebookIcon />
                    </IconButton>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
          <Image
            src="/about/gp.jpg"
            alt="Team"
            width={576}
            height={432}
            style={{
              width: "100%",
              maxWidth: "576px", // Maximum size on larger screens
              height: "auto",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
