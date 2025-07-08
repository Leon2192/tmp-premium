import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
  Fade,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PauseIcon from "@mui/icons-material/Pause";
import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const desktopImage = "/images/fondo6.avif";
  const mobileImage = "/images/fondo2.jpg";

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((error) => {
        console.error("No se pudo reproducir el audio:", error);
      });
    }

    setIsPlaying(!isPlaying);
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        backgroundImage: `url(${isMobile ? mobileImage : desktopImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Capa oscura */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          zIndex: 1,
        }}
      />

      {/* Contenido principal animado */}
      <Fade in={inView} timeout={1000}>
        <Box
          sx={{
            zIndex: 2,
            px: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            transform: inView ? "scale(1)" : "scale(0.95)",
            transition: "transform 1s ease",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "3rem", md: "5rem" },
              fontFamily: "'Great Vibes', cursive",
              lineHeight: 1.2,
              textAlign: "center",
              color: "#222",
            }}
          >
            <span>Agustina</span>
            <br />
            <span>&</span>
            <br />
            <span>Francisco</span>
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem" },
              fontWeight: 300,
              mt: 3,
              lineHeight: 1.2,
              letterSpacing: "0.1em",
              color: "#222",
            }}
          >
            ¡Nos casamos!
          </Typography>
        </Box>
      </Fade>

      {/* Botón de música */}
      <IconButton
        onClick={toggleAudio}
        sx={{
          position: "absolute",
          top: 20,
          right: 20,
          zIndex: 3,
          backgroundColor: "rgba(255,255,255,0.7)",
          color: "#000",
          width: 50,
          height: 50,
          borderRadius: "50%",
          boxShadow: 2,
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.9)",
          },
        }}
      >
        {isPlaying ? <PauseIcon /> : <MusicNoteIcon />}
      </IconButton>

      {/* Audio element */}
      <audio ref={audioRef} src="/cancion-prem.mp3" preload="auto" />

      {/* Flecha animada */}
      <Box
        sx={{
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          animation: "bounce 2s infinite",
          fontSize: "3rem",
          "@keyframes bounce": {
            "0%, 20%, 50%, 80%, 100%": {
              transform: "translateX(-50%) translateY(0)",
            },
            "40%": {
              transform: "translateX(-50%) translateY(-10px)",
            },
            "60%": {
              transform: "translateX(-50%) translateY(-5px)",
            },
          },
        }}
      >
        <a href="#info" style={{ color: "#222", textDecoration: "none" }}>
          <KeyboardArrowDownIcon fontSize="inherit" />
        </a>
      </Box>
    </Box>
  );
};

export default Hero;
