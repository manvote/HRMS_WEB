import {
  Box,
  Button,
  Typography,
  Select,
  MenuItem,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  type SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import SearchBar from "../../components/SearchBar";

const AdminDashboardPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [status, setStatus] = useState("All");

  const handleSearch = (value: string) => setSearchValue(value);
  const handleChange = (event: SelectChangeEvent) =>
    setStatus(event.target.value);
  console.log(searchValue)

  const employees = Array.from({ length: 120 }, (_, i) => ({
    name: "BV Kumar",
    id: 183646 + i,
    email: "abe@gmail.com",
    phone: "+91 9876543210",
    department: ["Sales", "HR", "Technology"][i % 3],
    designation: "Sales",
    status: i % 4 === 2 ? "InActive" : "Active",
  }));

  const menuItems = ["All", "Active", "InActive"];

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          bgcolor: "#3B3F70",
          alignItems: "center",
          p: "1rem 2rem",
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: "#fff", fontWeight: 600, letterSpacing: 0.3 }}
        >
          Employee Management
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#587DBD",
            textTransform: "none",
            fontWeight: 600,
            "&:hover": { bgcolor: "rgba(110,121,168,0.8)" },
          }}
        >
          Add Employee
        </Button>
      </Box>

      {/* Search + Filter */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          boxShadow: "0px 4px 4px 0px #00000040",
          bgcolor: "#F7F7F8",
          p: 2,
          gap: 2,
          mt: 2,
        }}
      >
        <Box sx={{ width: "50%" }}>
          <SearchBar onSearch={handleSearch} placeholder="Search by name or ID" />
        </Box>

        <Select
          value={status}
          onChange={handleChange}
          renderValue={(selected) => `Status: ${selected}`}
          IconComponent={() => null}
          sx={{
            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
            "&:hover .MuiOutlinedInput-notchedOutline": { border: "none" },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": { border: "none" },
            "& .MuiSelect-select": {
              bgcolor: "#D9D9D95C",
              px: "1rem !important",
              py: ".75rem !important",


              display: "flex",
              alignItems: "center",
              height: "100%",
              lineHeight: 1.5,
                    fontSize: '18px',
          fontWeight: 600,
          color: "#89898a",
            },
          }}
        >
          {menuItems.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </Box>

      {/* Table */}
      <Box
        sx={{
          mx: 3,
          my: 3,
          height: "100%",
          borderRadius: 2,
          overflow: "auto",
          border: "1px solid #cfcfcf",
          boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        }}
      >
        <Table stickyHeader>
          <TableHead sx={{ bgcolor: "#F5F5F5" }}>
            <TableRow>
              {[
                "Name",
                "Employee ID",
                "Email",
                "Phone",
                "Department",
                "Designation",
                "Status",
              ].map((head) => (
                <TableCell key={head} sx={{ fontWeight: 600 }}>
                  {head}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {employees.map((emp, i) => (
              <TableRow key={i} hover>
                {[
                  emp.name,
                  emp.id,
                  emp.email,
                  emp.phone,
                  emp.department,
                  emp.designation,
                ].map((val, j) => (
                  <TableCell key={j}>{val}</TableCell>
                ))}
                <TableCell
                  sx={{
                    color: emp.status === "Active" ? "green" : "red",
                    fontWeight: 500,
                  }}
                >
                  {emp.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};

export default AdminDashboardPage;
