import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { CardActionArea } from '@mui/material';

export const  ActionAreaCard=({item})=> {
    return (
      <Container>

          <Card sx={{ maxWidth: "87%",height:"90%", padding:"1%",marginTop:"35%"}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
              
                image={item.thumbnail.path + "/portrait_incredible.jpg"}
                alt="green iguana"

                
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" textAlign="center" fontFamily="impact" fontSize="20px" >
                {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" display="flex" fontSize="12px">
                {item.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </Container>
    );
  }