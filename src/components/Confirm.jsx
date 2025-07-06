import { Box, Typography, Button } from "@mui/material";

const Confirm = () => {
  return (
    <Box
      sx={{
        minHeight: "40vh",
        py: 8,
        px: 2,
        backgroundColor: "#fce4ec", // rosa pastel claro
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {/* Título principal cursiva */}
      <Typography
        variant="h4"
        sx={{
          fontFamily: "'Great Vibes', cursive",
          fontWeight: "bold",
          fontSize: { xs: "2rem", md: "2.5rem" },
          mb: 2,
          color: "#880e4f", // rosa oscuro para contraste
        }}
      >
        Confirmación de asistencia
      </Typography>

      {/* Subtítulo más pequeño */}
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "1rem", md: "1.1rem" },
          maxWidth: 500,
          mb: 4,
          color: "#6a1b9a",
        }}
      >
        Esperamos que seas parte de esta gran celebración. ¡Confirmanos tu asistencia!
      </Typography>

      {/* Botón */}
      <Button
        variant="contained"
        sx={{
          borderRadius: 999,
          px: 4,
          backgroundColor: "#d1c4e9", // violeta pastel claro
          color: "#4a148c", // violeta oscuro
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#fff",
            border: "2px solid #d1c4e9",
            color: "#4a148c",
          },
        }}
      >
        Confirmar asistencia
      </Button>
    </Box>
  );
};

export default Confirm;
