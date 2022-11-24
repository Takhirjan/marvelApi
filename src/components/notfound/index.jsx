import { Box } from "@mui/system";
import "../style/marvel.css";
import { AppBarComponent } from "../navbar";
import 'animate.css';
import Typography from '@mui/material/Typography';
export const NotFound =()=>{
 
    return( 
        <>
        <AppBarComponent />
        <><Box> <img className='black' src="Black-Panther.png" />


            <img className="wakanda" src="df9w3pm-8ec6eb3d-04d0-4bba-b378-0273a4c4cd7d.png" />
        </Box>AppBarComponent<Typography
            sx={{
            
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'impact',
                fontWeight: 60,
                letterSpacing: '.3rem',
                color: 'white',
                fontSize:'24px',
                float:'right',
                paddingRight:'14%',
                marginTop:"-18%",
                width:"30%",
                
              
                
            }}
        >
                HEY BRO,<br/>PAGE NOT FOUND, 404<br/>
                GO AWAY AND USE ANOTHER LINK
            </Typography>
           
    </>
            
            </> 
          

);
};