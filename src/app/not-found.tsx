import { Box, Button, Typography } from "@mui/material";
import NextLink from "next/link";

export default function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        padding: 2,
      }}
    >
      <Typography variant="h1" component="h1" color="error" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" component="p" color="textSecondary" gutterBottom>
        Ops! La pagina che stai cercando non esiste.
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
        Potrebbe essere stata rimossa, rinominata o non essere mai esistita.
      </Typography>
      <Button
        LinkComponent={NextLink}
        href="/home"
        variant="contained"
        color="primary"
      >
        Torna alla Home
      </Button>
    </Box>
  );
}
