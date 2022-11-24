import AppBar from '@mui/material/AppBar';
import { useEffect, useState } from "react";
import md5 from "md5";
import axios from "axios";
import { AppBarComponent } from "../navbar";
import { Typography } from '@mui/material';
import {ImgMediaCard} from "../card";
import{useParams,useLocation,useHistory} from 'react-router=dom';
export const Items =()=>{
    const params=useParams();
    const location=useLocation();
    const history=useHistory();
    console.log(params,location,history);
  <AppBarComponent />
  const[items,setItems]=useState([])
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
return (

<><Typography sx={{
  color:'white',
  textAlign:'center ',
  display:"grid",
gridTemplateColumns:"1fr 1fr 1fr",
columnGap:"10px",
rowGap:"10px",
width:"100%"
}}>{comics.length>0 && comics.map((item)=> <ImgMediaCard key={item.id} item={item}/>
)}</Typography>

</>)

};
