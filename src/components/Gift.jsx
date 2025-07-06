import { Box, Typography, Button, Modal, Fade, Backdrop, Divider } from "@mui/material";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { useState } from "react";

const Gift = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        py: 8,
        px: 2,
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {/* Icono de regalo */}
      <CardGiftcardIcon sx={{ fontSize: 60, color: "#b0b0b0", mb: 2 }} />

      {/* Título cursiva */}
      <Typography
        variant="h5"
        sx={{
          fontFamily: "'Great Vibes', cursive",
          fontWeight: "bold",
          fontSize: { xs: "1.5rem", md: "2rem" },
          maxWidth: 600,
          mb: 4,
        }}
      >
        ¡Nuestro mejor regalo es tu presencia! <br />
        Peeero... si querés colaborar con nuestra luna de miel...
      </Typography>

      {/* Botón */}
      <Button
        variant="contained"
        onClick={handleOpen}
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
        Ver datos bancarios
      </Button>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "#fff",
              borderRadius: 2,
              boxShadow: 24,
              p: 4,
              maxWidth: 400,
              textAlign: "center",
            }}
          >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Datos Bancarios
            </Typography>
            <Typography variant="body1" gutterBottom>
              Nombre del Titular: Nombre Apellido
              <br />
              CBU: 12345623561
              <br />
              Alias: la.casa.del.detalle
              <br />
              DNI: 32200552
              <br />
              Banco Galicia
            </Typography>

            <Typography variant="h6" fontWeight="bold" gutterBottom mt={3}>
              Lista de Regalos
            </Typography>
            <Typography variant="body1">Falabella Novios</Typography>
          </Box>
        </Fade>
      </Modal>
      <Divider
        sx={{
          mt: 6,
          width: "40px",
          borderBottomWidth: 2,
          borderColor: "#ccc",
        }}
      />
    </Box>
  );
};

export default Gift;
