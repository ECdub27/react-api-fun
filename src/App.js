import react from 'react';
import { Typography } from '@mui/material';
import GetActivity from './Components/ActivityGenerator';
import Box from '@mui/material/Box';

function App() {
  return (
    <div className="App">
      <Box  display={'flex'} alignItems='center' justifyContent={'center'}>
      <Typography variant='h1' color='#C57B57'  sx={{fontFamily:'League Spartan' }}>
        new journey starts here
        </Typography>
        </Box>
        <img/>
      <Box display={'flex'} alignItems='center' justifyContent={'center'}>
        <Typography>

      <GetActivity/>

      </Typography>

      </Box>
      <img/>
      
      
    </div>
  );
}

export default App;
