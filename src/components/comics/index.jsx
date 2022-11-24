import { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from '@mui/material';
import {ImgMediaCard} from "../card";
import { useParams} from 'react-router-dom';
export const Comics =()=>{
  const params=useParams();
  console.log(params);

  const[comics,setComics]=useState([])
  useEffect(() => {
    getAllItems();
  }, []);

  const getAllItems = () => {
  
    axios
      .get(
        `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=83472572e352624c4b7e1880d78255a3&hash=6ec5d69e9216c1481ab584419e3f8094`
      )
      .then((res) => res.data)
      .then((res) => {
        
       
        setComics(res.data.results);
        
      });
  };  
  console.log(comics);
return (

<><Typography sx={{
  color:'white',
  display: "grid",
  gridTemplateColumns:" 300px 300px 300px",
  justifyContent:"space-evenly",
  gridColumnGap: "50px",
  gridRowGap: "10px"
 
}}>{comics.length>0 && comics.map((item)=> <ImgMediaCard key={item.id} item={item}/>
)}</Typography>

</>)

};
