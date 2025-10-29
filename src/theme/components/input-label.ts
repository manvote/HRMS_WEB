import type { Components } from "@mui/material/styles";
import type { Theme } from "../types";

export const MuiInputLabel: Components<Theme>["MuiInputLabel"] = {
  styleOverrides: {
    root: {
      color: '#21264E',
      '&.Mui-focused': {
        color: '#12042eff',
      },
    },
  },
};
