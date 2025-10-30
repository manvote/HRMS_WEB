
import {
  Box,
  Button,
  TextField,
  Typography,
  Divider,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Visibility,
 VisibilityOff, } from "@mui/icons-material";

// import your icons
import GoogleIcon from "../../assets/authImages/google_img.svg";
import FacebookIcon from "../../assets/authImages/facebook_img.svg";
import TwitterIcon from "../../assets/authImages/twitter_img.svg";
import AppleIcon from "../../assets/authImages/apple_img.svg";

const SignupPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  const socialIcons = [
    { src: GoogleIcon, alt: "Google",},
    { src: FacebookIcon, alt: "Facebook" },
    { src: TwitterIcon, alt: "Twitter",  },
    {src: AppleIcon,alt: "Apple",},
  ];

  return (
     <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <Box>
      <Typography
        variant="h4"
        sx={{ fontSize: "17px", mb: 1 }}
      >
        Create your MFM account to get started
      </Typography>

      <Typography
        variant="h4"
      >
        Sign up
      </Typography>
      </Box>
      <Box sx={{ width:'75%'}}>
       <TextField  margin="normal" fullWidth label="Name"  />
      <TextField   margin="normal" fullWidth label="Email id or Phone number"  />
     <TextField
      margin="normal"
      fullWidth
      label="Password"
      type={showPassword ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleTogglePassword} edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
      <Typography variant="body2" sx={{ textAlign: "center", mt: 2 }}>I agree to the Tearm of Service and Privacy Policy.</Typography>

      <Button
        fullWidth
        variant="contained"
        sx={{
          mt: 2,
          bgcolor: "#1a214f",
          "&:hover": { bgcolor: "#12183b" },
        }}
      >
        Sign Up
      </Button>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          px: 4,
          my: 3,
        }}
      >
        <Divider sx={{ flex: 1, borderColor: "#000" }} />
        <Typography sx={{ mx: 1, fontWeight: 500, color: "#000" }}>or</Typography>
        <Divider sx={{ flex: 1, borderColor: "#000" }} />
      </Box>

      {/* Social icons (mapped) */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        {socialIcons.map((icon, index) => (
          <IconButton key={index}>
            <Box
              component="img"
              src={icon.src}
              alt={icon.alt}
              sx={{width: "21px", height: "22px",":hover": { transform: "scale(1.1)" },}}
            />
          </IconButton>
        ))}
      </Box>

      <Typography
        variant="body2"
        sx={{
          mt: 3,
          color: "#000",
          fontSize: "13px",
          textAlign: "center",
        }}
      >
        Already have an account?{" "}
        <Typography
          component="span"
          onClick={() => navigate("/login")}
          sx={{
            color: "#030C52",
            fontWeight: 600,
            fontSize: "13px",
            cursor: "pointer",
          }}
        >
          Log in
        </Typography>
      </Typography>
      </Box>
    </Box>
  );
};

export default SignupPage;
