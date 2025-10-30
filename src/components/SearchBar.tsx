import React, { useState,} from "react";
import { Box, InputBase } from "@mui/material";


interface SearchBarProps {
  onSearch?: (value: string) => void;
  placeholder?: string;
  initialValue?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder = "Search...",
  initialValue = "",
}) => {
  const [query, setQuery] = useState(initialValue);

  const handleChange = (e:any) => {
    const value = e.target.value;
    setQuery(value);
    onSearch?.(value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        bgcolor: "#D9D9D95C",
        borderRadius: "10px",
        py:'.54rem',
           pl: "3rem",
           pr: "1.5rem",
        "&:hover": {
   
        },
      }}
    >
      <InputBase
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        sx={{
          fontSize: 18,
          fontWeight: 600,
          color: "#000",
          width: "100%",
 
       
        }}
      />
    </Box>
  );
};

export default SearchBar;
