import { Box, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import LoginImage from "../assets/authImages/login_img.svg";
const AuthLayout = () => {
  return (
<Box
  sx={{
    display: "flex",
    height: "100vh",
    backgroundColor: "#FFFFFF",
  }}
>
  {/* Left panel */}
  <Box
    sx={{
      flex: 0.5, // shrinks left side
    px: 5,
      pt: 5,
      backgroundColor: "#1a214f",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
    }}
  >
    <Typography  variant="h1" sx={{ fontWeight: 700, fontSize: "88px" }}>
      MFM
    </Typography>
    <Box>
      <Typography variant="h2" sx={{ mt: 3, fontWeight: 600, fontSize: "41px" }}>
        Find People,
      </Typography>
            <Typography sx={{ mt: 3, fontWeight: 600, fontSize: "41px" }}>
        Make Productive
      </Typography>
      <Typography sx={{ mt: 2, fontWeight: 400, fontSize:"22px" ,lineHeight:"1.5"}}>
        Empowering teams to collaborate and grow together
      </Typography>
    </Box>

    <Box component="img" src={LoginImage} alt="illustration" sx={{ width: "100%", maxWidth: 400 }} />
  </Box>

  {/* Right panel */}
  <Box
    sx={{
      flex: 1.5, // right side expands accordingly
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Box
      sx={{
        width: '50%',
        height: "70%",
        p:5, 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2,
        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        background: "#F5F5F5",
        backdropFilter: "blur(10px)",
      }}
    >
      <Outlet />
    </Box>
  </Box>
</Box>

  );
};

export default AuthLayout;
