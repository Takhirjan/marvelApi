
import { AppBarComponent } from "../navbar";

import Typography from '@mui/material/Typography';
export const Contacts =()=>{

  return( <>
    <AppBarComponent /> <Typography
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white'
             
            }}
            > Not found </Typography>
            
    </>
    
    );
};