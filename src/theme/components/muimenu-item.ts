// src/theme/components/MuiMenuItem.ts
import type { Components } from "@mui/material/styles";
import type { Theme } from "../types";

export const MuiMenuItem: Components<Theme>["MuiMenuItem"] = {
  styleOverrides: {
    root: {
      color: "#68666bff",
      "&:hover": {
        backgroundColor: "#e3e3e3",
        color: "#12042eff",
      },
      "&.Mui-selected": {
        backgroundColor: "#7d7b81bb",
        color: "#ffffffff",
      },
    },
  },
};
