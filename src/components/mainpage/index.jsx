
import { AppBarComponent } from "../navbar";
import { Outlet } from "react-router-dom";
import "../style/marvel.css"
import { Typography } from '@mui/material';
import { Container } from "@mui/system";
import { SliderComponent } from '../SliderComponent';
import { useState } from "react";

export const MainPage = () => {
    
    
  const [progress, setProgress] = useState(false);

    return (
    <>
    <SliderComponent progress={progress} setProgress={setProgress} />
    { progress >= 99   && (
<>
    <AppBarComponent />
        

        <img className="mainpage" src="main.jpg"/>
        <Typography sx={{
                       
                        fontFamily:'AddCityBoy',
                        letterSpacing:'8px',
                        fontSize:'45px',
                        position:'absolute',
                        top:'495px',
                        left:'210px',
                        color:'ghostWhite',
                        textShadow:' red 1px 5px 5px',
                        display:'flex',
                        flexDirection:'column',
                        maxWidth:'80%'
                       }}>BATLLE TOGETHER  HEROES FOREVER</Typography>
                       <div className="forever">
                        <img className="ff" src="share.png"></img>
                        </div>
                        <div>
                           
                        <Typography sx={{color:'white',
                         fontSize:'45px',
                          position:'absolute',
                          fontWeight:'700',
                          left:'539px',
                          top:'1022px',
                          
                         

                          
                          
                          }}>GET TICKETS</Typography>
                         
                        </div>
                        <br/>
                        <Container className="container">
<div className="card">
    <img className="card1"src="https://i.annihil.us/u/prod/marvel/i/mg/c/30/637255c3adecc/clean.jpg"/>
    
    <img className="card1"src="https://i.annihil.us/u/prod/marvel/i/mg/3/40/63755fa5a1821/portrait_uncanny.jpg"/>
    <img className="card1"src="https://i.annihil.us/u/prod/marvel/i/mg/6/c0/63755f7e41d5a/clean.jpg"/>
    <img className="card1"src="https://i.annihil.us/u/prod/marvel/i/mg/c/b0/63755f7fcabd3/portrait_uncanny.jpg"/>
    <img className="card1"src="https://i.annihil.us/u/prod/marvel/i/mg/6/c0/637674be9e2c0/portrait_uncanny.jpg"/>
    <img className="card1"src="https://i.annihil.us/u/prod/marvel/i/mg/3/70/63755fa5d1290/portrait_uncanny.jpg"/>
    <img className="card1"src="https://i.annihil.us/u/prod/marvel/i/mg/6/20/637674bea204b/portrait_uncanny.jpg"/>
    <img className="card1"src="https://i.annihil.us/u/prod/marvel/i/mg/7/20/63755f7ee092e/portrait_uncanny.jpg"/>

</div>

                        </Container>
        <Outlet />
        </>
    )
    }
    </>
 );
    
};