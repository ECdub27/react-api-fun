import react from 'react';
import { Typography } from '@mui/material';
import GetActivity from './Components/ActivityGenerator';
import Box from '@mui/material/Box';
import {img, img1} from './Components/ProjectPhotos/photos'
function App() {
        
  
  return (
    <div className="App">
      <Box  display={'flex'} alignItems='center' justifyContent={'center'} 
      sx={{backgroundColor:'#99907D'}}>
      <Typography variant='h1' color='#C57B57'  sx={{fontFamily:'League Spartan' }}>
        new journey starts here
        </Typography>
        </Box>
        <img className='bored-img-1'alt='' src={img} />
      <Box display={'flex'} alignItems='center' justifyContent={'center'}
      sx={{backgroundColor:'#2F242C'}}>
        <Typography>

      <GetActivity/>

      </Typography>

      </Box>
      <img className='bored-img-2' alt='' src={img1}/>
      
      
    </div>
  );
}

export default App;
