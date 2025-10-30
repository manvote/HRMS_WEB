import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import LeftMenuBar from '../components/NavBar';


const EmpLayout = () => {

  const MainContentStyle={
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  minWidth: 0,
  overflow: 'hidden',
  height:'inherit',
  pt:'4rem'
  }
  return (
      <Box sx={{ display: 'flex', height: '100vh' ,backgroundColor: "#FFFFFF",overflow:'hidden'}}>
          <LeftMenuBar  />
          <Box sx={{...MainContentStyle}} >
            <Outlet />      
          </Box>  
      </Box>
  );
};

export default EmpLayout;
