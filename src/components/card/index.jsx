import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




export const ImgMediaCard=({item}) =>{


  return (
    <Card  sx={{ width: "90%", height:'80%', marginTop:'80px'
  }}>
      <CardMedia
        component="img"
        alt="green iguana"
        width="45%"
        height="60%"
        display= "grid"
      
        
        image={item.thumbnail.path + "/portrait_incredible.jpg"}
      />
      <CardContent sx={{color:"red"}}>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily:"impact",textAlign:"center"}}>
         {item.title}
        </Typography>
        <Typography sx={{color:'black',fontFamily:"monospace",textAlign:"center",fontSize:"10px"}} >
        {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{item.name}</Button>
        <Button href='https://www.marvel.com/comics?&options%5Boffset%5D=0&totalcount=12' size="small" variant="contained">Learn more</Button>
      </CardActions>
    </Card>
  );
}
