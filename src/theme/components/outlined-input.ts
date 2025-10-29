import type { Components } from "@mui/material/styles";
import type { Theme } from "../types";

export const MuiOutlinedInput: Components<Theme>["MuiOutlinedInput"] = {
  styleOverrides: {
    root: {
      "& .MuiOutlinedInput-notchedOutline": {
        border: "2px solid #21264E",
      },

    },
    input: {
      color: "#000000ff",
    },
  },
};
