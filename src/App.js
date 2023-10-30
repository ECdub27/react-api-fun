import react from 'react';
import { Typography } from '@mui/material';
import GetMeme from './Components/memeGenerator';

function App() {
  return (
    <div className="App">
      <Typography variant='p' sx={{fontFamily:'League Spartan'}}>
        new journey starts here
      
      
      <GetMeme/>
      </Typography>
    </div>
  );
}

export default App;
