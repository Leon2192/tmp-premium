import { Box, Typography } from "@mui/material";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';


const Dresscode = () => {
  return (
    <Box
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
     <Box display="flex" justifyContent="center" gap={2} mb={2}>
  <ManIcon sx={{ fontSize: 60, color: '#1565c0' }} />
  <WomanIcon sx={{ fontSize: 60, color: '#ec407a' }} />
</Box>


      {/* Título principal */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "1.8rem", md: "2.2rem" },
          mb: 1,
          color: "#0d47a1",
        }}
      >
        DRESSCODE
      </Typography>

      {/* Subtítulo */}
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
  );
};

export default Dresscode;
