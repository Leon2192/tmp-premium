import { Box, Typography, Fade } from "@mui/material";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import { useInView } from "react-intersection-observer";

const Dresscode = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: "30vh",
        py: 8,
        px: 2,
        backgroundColor: "#e3f2fd", // celeste pastel
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Fade in={inView} timeout={800}>
        <Box
          sx={{
            transform: inView ? "scale(1)" : "scale(0.95)",
            transition: "transform 0.6s ease-out",
          }}
        >
          <Box display="flex" justifyContent="center" gap={2} mb={2}>
            <ManIcon sx={{ fontSize: 60, color: "#1565c0" }} />
            <WomanIcon sx={{ fontSize: 60, color: "#ec407a" }} />
          </Box>

          <Typography
            variant="h4"
            sx={{
            fontFamily: "'Great Vibes', cursive",
          fontWeight: "bold",
              fontSize: { xs: "1.8rem", md: "2.2rem" },
              mb: 1,
              color: "#0d47a1",
            }}
          >
            DRESSCODE
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1rem", md: "1.4rem" },
              color: "#1565c0",
            }}
          >
            Vestimenta formal, elegante
          </Typography>
        </Box>
      </Fade>
    </Box>
  );
};

export default Dresscode;
