"use client";

// components/Services.tsx
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ChatIcon from "@mui/icons-material/Chat";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import SecurityIcon from "@mui/icons-material/Security";
import TransformIcon from "@mui/icons-material/Transform";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { Box, Card, CardContent, colors, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const services = [
  {
    icon: (
      <DirectionsCarIcon fontSize="large" htmlColor={colors.lightBlue[700]} />
    ),
    title: "Patenti",
    description:
      "Corsi di teoria e pratica per le seguenti patenti di categoria AM, A1, A2, A, GA, B, B96, BE, C1, C, C1E, CE, D1, D, D1E, DE, e Speciali.",
  },
  {
    icon: (
      <CalendarTodayIcon fontSize="large" htmlColor={colors.lightBlue[700]} />
    ),
    title: "Rinnovo patente",
    description:
      "La tua patente sta per scadere? Non perdere tempo, pensiamo a tutto noi! Seguiamo tutte le pratiche per il rinnovo di tutti i tipi di patenti disponibili. Prenota anche la visita medica presso la nostra Autoscuola.",
  },
  {
    icon: (
      <AssignmentTurnedInIcon
        fontSize="large"
        htmlColor={colors.lightBlue[700]}
      />
    ),
    title: "Revisione patente",
    description:
      "Vieni nella nostra Autoscuola per effettuare tutte le pratiche di revisione della patente. Ti seguiremo in tutte le fasi permettendoti di non perdere tempo in motorizzazione.",
  },
  {
    icon: <FileCopyIcon fontSize="large" htmlColor={colors.lightBlue[700]} />,
    title: "Duplicati patente",
    description:
      "Avete smarrito la patente di guida? Oppure si è deteriorata ed è illeggibile? In questo caso avrete bisogno di un duplicato della vostra patente di guida. Vieni da noi, ci occupiamo di ogni tipo di duplicato!",
  },
  {
    icon: <TransformIcon fontSize="large" htmlColor={colors.lightBlue[700]} />,
    title: "Conversione patenti",
    description:
      "Hai bisogno di convertire la Patente? Cosa aspetti, ci occupiamo di tutte le pratiche necessarie per convertire la tua patente. Convertiamo tutte le patenti militari anche per uso civile. Quelle estere per uso anche in Italia.",
  },
  {
    icon: (
      <WorkspacePremiumIcon
        fontSize="large"
        htmlColor={colors.lightBlue[700]}
      />
    ),
    title: "Certificazioni professionali",
    description:
      "Il CQC è un certificato che abilita chi lo possiede a condurre i veicoli nell'ambito di una attività lavorativa di autotrasporto. In Autoscuola Silveri pensiamo a tutte le pratiche necessarie senza farvi perdere tempo.",
  },
  {
    icon: (
      <MedicalServicesIcon fontSize="large" htmlColor={colors.lightBlue[700]} />
    ),
    title: "Visite mediche in sede",
    description:
      "Puoi fare le visite mediche direttamente nella nostra sede Il medico della nostra autoscuola può rilasciare certificati di idoneità alla guida per tutte le categorie di patenti e per i rinnovi/rilasci porto d'armi uso sportivo e licenza caccia.",
  },
  {
    icon: <SecurityIcon fontSize="large" htmlColor={colors.lightBlue[700]} />,
    title: "Assicurazioni",
    description:
      "Sub-agenzia UnipolSai. Potete rivolgervi a noi per preventivi/rinnovi assicurazioni RCA, RCT, infortuni, casa, animali, condominio, tempo libero.",
  },
  {
    icon: <ChatIcon fontSize="large" htmlColor={colors.lightBlue[700]} />,
    title: "Studio consulenza automobilistica",
    description:
      "Ci occupiamo di trasferimenti di proprietà, revisioni, collaudi e omologazioni. Offriamo il servizio di rilascio immediato della targa per ciclomotori, radiazione della targa ciclomotore, duplicati della carta di circolazione e reimmatricolazioni in caso di perdita delle targhe. Gestiamo pratiche di perdita di possesso per furto, estratti cronologici, chiusure d’inchiesta per furto, procure notarili e duplicati del certificato di proprietà.",
  },
];

export default function Services() {
  return (
    <Box sx={{ py: 4, px: 4 }}>
      <Typography variant="h4" align="center" sx={{ mb: 4 }}>
        {"I NOSTRI SERVIZI"}
      </Typography>
      <Grid container spacing={4}>
        {services.map((service) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={service.title}>
            <Card sx={{ height: "100%" }}>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                {service.icon}
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
