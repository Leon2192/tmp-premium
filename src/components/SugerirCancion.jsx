import { Box, Typography, Button } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const SuggestSong = () => {
  return (
    <Box
      sx={{
        minHeight: "40vh",
        py: 8,
        px: 2,
        backgroundColor: "#ede7f6", // violeta muy suave
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {/* Icono de nota musical */}
      <MusicNoteIcon
        sx={{
          fontSize: 60,
          mb: 2,
          color: "#7b1fa2", // violeta fuerte
        }}
      />

      {/* Título principal */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "1.8rem", md: "2.2rem" },
          mb: 2,
          color: "#4a148c",
        }}
      >
        ¿QUÉ CANCIONES NO PUEDEN FALTAR?
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
        ¡Ayudanos sugiriendo las canciones que pensás que no pueden faltar en la fiesta!
      </Typography>

      {/* Botón */}
      <Button
        variant="contained"
        sx={{
          borderRadius: 999,
          px: 4,
          backgroundColor: "#d1c4e9",
          color: "#4a148c",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#fff",
            border: "2px solid #d1c4e9",
            color: "#4a148c",
          },
        }}
      >
        Sugerir canción
      </Button>
    </Box>
  );
};

export default SuggestSong;
