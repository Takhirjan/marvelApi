import Typography from '@mui/material/Typography';
import {ActionAreaCard} from "../card2";
import { useEffect, useState } from "react";
import axios from "axios";
export const Characters =()=>{

  const[characters,setCharacters]=useState([])

    useEffect(() => {
      getAllItems();
    }, []);

  const getAllItems = () => {
    axios
      .get(
        `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=83472572e352624c4b7e1880d78255a3&hash=6ec5d69e9216c1481ab584419e3f8094`
      )
      .then((res) => res.data)
      .then((res) => { 
        setCharacters(res.data.results);
      });
  };  

  console.log(characters);

        return( 
         
           <Typography
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              display:"grid",
              gridTemplateColumns:" 300px 300px 300px 300px",
              gridRowGap: "10px",
              gridColumnGap: "50px",
              padding:"25px",
              


            }}
            > 
            
            {characters.length>0 && characters.map((item)=> <ActionAreaCard key={item.id} item={item}/>
                  
             )}
             
            </Typography>
          
    );
};