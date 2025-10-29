import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// import your icons
import GoogleIcon from "../../assets/authImages/google_img.svg";
import FacebookIcon from "../../assets/authImages/facebook_img.svg";
import TwitterIcon from "../../assets/authImages/twitter_img.svg";
import AppleIcon from "../../assets/authImages/apple_img.svg";

const SignupPage = () => {
  const navigate = useNavigate();

  const socialIcons = [
    { src: GoogleIcon, alt: "Google",},
    { src: FacebookIcon, alt: "Facebook" },
    { src: TwitterIcon, alt: "Twitter",  },
    {src: AppleIcon,alt: "Apple",},
  ];

  return (
    <Box sx={{width:'380px'}} >
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
       <TextField  margin="normal" fullWidth label="Name"  />
      <TextField sx={{borderColor:'black',borderWidth:'3px solid black'}} variant="outlined"  margin="normal" fullWidth label="Email id or Phone number"  />
      <TextField  margin="normal" fullWidth label="Password" type="password"  />

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
              sx={{width: "21px", height: "22px"}}
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
  );
};

export default SignupPage;
