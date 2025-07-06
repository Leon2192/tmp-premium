import { Box, Typography, Grid } from "@mui/material";
import { useEffect, useState } from "react";

const targetDate = new Date();
targetDate.setFullYear(targetDate.getFullYear() + 1); // Cuenta regresiva de 1 año

const getTimeLeft = () => {
  const now = new Date();
  const difference = targetDate - now;

  const totalSeconds = Math.max(0, Math.floor(difference / 1000));
  const dias = Math.floor(totalSeconds / (3600 * 24));
  const horas = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutos = Math.floor((totalSeconds % 3600) / 60);
  const segundos = totalSeconds % 60;

  return { dias, horas, minutos, segundos };
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const unidades = Object.entries(timeLeft);

  return (
    <Box
    id="info"
      sx={{
        minHeight: "30vh",
        py: 6,
        backgroundColor: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      {/* Título superior */}
      <Typography
        sx={{
          fontSize: { xs: "2rem", md: "2.5rem" },
          fontFamily: "'Great Vibes', cursive",
          fontWeight: 500,
          mb: 1,
          color: "#222",
        }}
      >
        Faltan...
      </Typography>

      

      {/* Contador */}
      <Grid container spacing={4} justifyContent="center">
        {unidades.map(([unit, value]) => (
          <Grid item key={unit}>
            <Box textAlign="center">
              <Typography
                sx={{
                  fontSize: { xs: "2.5rem", md: "4rem" },
                  fontWeight: "bold",
                  color: "#222",
                  fontFamily: "'Great Vibes', cursive",
                }}
              >
                {String(value).padStart(2, "0")}
              </Typography>
              <Typography
                sx={{
                  textTransform: "capitalize",
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  fontFamily: "'Great Vibes', cursive",
                  color: "#555",
                }}
              >
                {unit}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Countdown;
