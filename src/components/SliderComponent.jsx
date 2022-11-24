import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import 'animate.css';
import "../components/style/marvel.css";


function LinearProgressWithLabel(props) {
  return (
  
    <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <img class='image' src='ironman.png'/>

            <h3 className='class'>MARVEL</h3>
         
            

      <Box sx={{ width: '81%',marginLeft:'15%',  background:'ghostwhite',height:'8px', borderRadius:'5px'}}>
   
        <LinearProgress variant="determinate" {...props} sx={{height:'8px', borderRadius:'5px',color:'darkred'}}/>
        
      </Box>
      
      <Box sx={{ minWidth: 35}}>
        <Typography variant="body2" 
        color="#fff"
         fontFamily="Comic Sans MS" 
         fontSize="15px" 
         
         
         
         
         >{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}


LinearProgressWithLabel.propTypes = {
 
  value: PropTypes.number.isRequired,
};

export const SliderComponent= ({progress, setProgress}) =>{

  useEffect(()=>{

    const timer = setInterval(() => {
               setProgress((prevProgress) =>{
                  if(progress===100){
                    return;
                  }
   const diff=Math.random()*10;
   return Math.min(prevProgress+diff,100);
  });
    }, 190);  
    return () => {
      clearInterval(timer)
    };
  
  },[])
    
  

  return (
    
    <Box sx={{ width: '60%',color: '#fff', marginLeft:'34%'}}>      
     {progress<100  &&  <LinearProgressWithLabel 
      value={progress} color='inherit' />}

    </Box>
    
  );
      
}