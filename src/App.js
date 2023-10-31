import react from 'react';
import { Typography } from '@mui/material';
import GetMeme from './Components/ActivityGenerator';
import GetActivity from './Components/ActivityGenerator';

function App() {
  return (
    <div className="App">
      <Typography variant='p' sx={{fontFamily:'League Spartan'}}>
        new journey starts here
      
      
      <GetActivity/>
      </Typography>
    </div>
  );
}

export default App;
