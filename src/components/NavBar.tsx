
import { Box, Typography, } from "@mui/material";
import LogoutImg from "../assets/navbarImages/logout_img.svg";
import SettingImg from "../assets/navbarImages/settings_img.svg";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { text: "Attendance",path:"/Attendance" },
  { text: "Employee Management",path:"/EmployeeManagement"  },
  { text: "Payroll", path:"/Payroll" },
  { text: "Performance",path:"/Performance"  },
  { text: "Onboarding Management",path:"/Onboarding"  },
  { text: "Recruitment/Hiring" ,path:"/Recruitment"},
  { text: "Analytics" ,path:"/Analytics"},
  { text: "Training/Management",path:"/Training" },
  { text: "Notification",path:"/Notifications" },
];

const styles = {
  sidebar: {
    bgcolor: "#3B3F70",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    pl: 5,

    pt: '5.5rem',
    pb: 2,

  },
  headerText: {
    fontWeight: 600,
  },

 
  menuContainer: {
    flexGrow: 1, 
    display: "flex",
    flexDirection: "column",
    justifyContent: 'space-evenly',
    mt: 2,
    height: "100%",
  },
  menuItem: {
    cursor: "pointer",
    py: 1,
    mr:1,
    pr:4,
    transition: "all 0.3s ease",
    borderRadius: 1,
    "&:hover": { bgcolor: "#565a8e",px:2 ,"& .MuiTypography-root": { color: "#e4e4e9d7" },},
  },
  menuText: { fontWeight: 400, fontSize: 14 },
  bottomSection: { mb: 2 },
  bottomItem: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    cursor: "pointer",
    py: 2,
    "&:hover": { opacity: 0.8 },
  },
  icon: { width: 23, height: 24 },
};


const LeftSideNavbar = () => {
  const navigate = useNavigate();
  const handleClick = (text: string) => {

    if (text === "Logout") {
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    navigate(`/admin${text}`);
  };

  return (
  <Box sx={styles.sidebar}>
  {/* Top section */}
  <Box>
    <Typography variant="h6" sx={styles.headerText}>
      Dashboard
    </Typography>
  </Box>

  {/* Middle (menu) section */}
  <Box sx={styles.menuContainer}>
    {menuItems.map((item) => (
      <Box
        key={item.text}
        onClick={() => handleClick(item.path)}
        sx={styles.menuItem}
      >
        <Typography variant="body1" sx={styles.menuText}>
          {item.text}
        </Typography>
      </Box>
    ))}
  </Box>

  {/* Bottom section */}
  <Box sx={styles.bottomSection}>
    <Box sx={styles.bottomItem} onClick={() => handleClick("/Settings")}>
      <Box component="img" src={SettingImg} sx={styles.icon} />
      <Typography sx={{ fontSize: "18px", fontWeight: 400 }}>Setting</Typography>
    </Box>

    <Box sx={styles.bottomItem} onClick={() => handleClick("Logout")}>
      <Box component="img" src={LogoutImg} sx={styles.icon} />
      <Typography sx={{ fontSize: "18px", fontWeight: 400 }}>Logout</Typography>
    </Box>
  </Box>
</Box>

  );
};

export default LeftSideNavbar;
