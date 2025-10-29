import type { Components } from "@mui/material/styles";
import type { Theme } from "../types";

export const MuiOutlinedInput: Components<Theme>["MuiOutlinedInput"] = {

  styleOverrides: {
    input: {
      color: '#0000007A', // text color
    },
  },
}
