// src/main.tsx or src/index.tsx
import React from "react";

import { CssVarsProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { createTheme } from "./theme/create-theme";
import { AppRouter } from "./router/Router";

const theme = createTheme();

function App() {


  return (
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </CssVarsProvider>
  </React.StrictMode>
  )
}

export default App
