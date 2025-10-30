// src/theme/components/MuiMenu.ts
import type { Components } from "@mui/material/styles";
import type { Theme } from "../types";

export const MuiMenu: Components<Theme>["MuiMenu"] = {
  styleOverrides: {

    paper: {
          marginTop: "8px",
      backgroundColor: "#ececed", // menu background
      color: "#726c6cfa", // text color
    },
    list: {
      padding: 0,
    },
  },
};
