import {
    Box,
    Grid,
    Typography,
    Button,
    Divider,
  } from "@mui/material";
  import ChurchIcon from "@mui/icons-material/Church";
  import CelebrationIcon from "@mui/icons-material/Celebration";
  
  const InfoEvent = () => {
    return (
      <Box
    
        sx={{
          py: 6,
          px: 2,
          backgroundColor: "#fff",
        }}
      >
        <Grid
          container
          spacing={4}
          justifyContent="space-evenly"
          alignItems="center"
        >
          {/* Columna Izquierda */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: "center" }}>
              <ChurchIcon sx={{ fontSize: 50, color: "#b0b0b0", mb: 1 }} />
              <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
                sx={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: { xs: "2rem", md: "2.5rem" },
                }}
              >
                Ceremonia
              </Typography>
              <Typography variant="body1" color="text.secondary">
                23 de noviembre
              </Typography>
              <Typography variant="body1" color="text.secondary">
                19:00 hs.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                Basílica del Espíritu Santo (Parroquia N.S. de Guadalupe)
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Recibí debajo las indicaciones para llegar.
              </Typography>
              <a
                href="https://www.google.com/maps/place/Bas%C3%ADlica+del+Esp%C3%ADritu+Santo+(Parroquia+N.S.+de+Guadalupe)/@-34.589454,-58.419837,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcca7fdc73fb6d:0xf42ebf39a39496f7!8m2!3d-34.589454!4d-58.4172567!16s%2Fg%2F11j2yqstyq"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
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
                  Llegar a la ceremonia
                </Button>
              </a>
            </Box>
          </Grid>
  
          {/* Columna Derecha */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: "center" }}>
              <CelebrationIcon sx={{ fontSize: 50, color: "#b0b0b0", mb: 1 }} />
              <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
                sx={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: { xs: "2rem", md: "2.5rem" },
                }}
              >
                Fiesta
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Luego de la ceremonia
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Palacio Duhau - Park Hyatt Buenos Aires
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                Victoria, Buenos Aires.
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                ¡Te esperamos!
              </Typography>
              <a
                href="https://www.google.com/maps/place/Palacio+Duhau+-+Park+Hyatt+Buenos+Aires/@-34.5893841,-58.3888138,17z/data=!3m2!4b1!5s0x95bccabb2a425bb7:0xe8260627de010b22!4m9!3m8!1s0x95bccabb2e3f7af9:0x2b820ee8b1a83f72!5m2!4m1!1i2!8m2!3d-34.5893841!4d-58.3862335!16s%2Fm%2F064qgcm"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
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
                  Llegar al salón
                </Button>
              </a>
            </Box>
          </Grid>
        </Grid>
  
        {/* Divider al final */}
        <Divider
          sx={{
            mt: 6,
            mx: "auto",
            width: "40px",
            borderBottomWidth: 2,
            borderColor: "#ccc",
          }}
        />
      </Box>
    );
  };
  
  export default InfoEvent;
  