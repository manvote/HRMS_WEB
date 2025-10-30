import type { Components } from "@mui/material/styles";
import type { Theme } from "../types";

export const MuiInputLabel: Components<Theme>["MuiInputLabel"] = {
  styleOverrides: {
    root: {
      color: '#7c7d80ff',
      '&.Mui-focused': {
        color: '#12042eff',
      },
    },
  },
};
