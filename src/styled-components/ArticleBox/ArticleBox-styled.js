import styled from "styled-components"

import foothillsImg from '../../img/foothills-scene.png';

import collectorImg from '../../img/mobile-apps.png'; 
import jsapiImg from '../../img/jsapi.png'; 
import discImg from '../../img/disc.png'; 
import eeapImg from '../../img/eeap-crop.png';
import realtimeImg from '../../img/real-time.png'; 
import campusImg from '../../img/campus-gis.png'; 
import platformImg from '../../img/platform.png'; 
import dotImg from '../../img/nysdot-traffic.png'; 
import livingAtlasImg from '../../img/living-atlas-catalog.png'; 
import redlandsGISImg from '../../img/redlands-map.png';
import GIPImg from '../../img/GIP.png';
import esriImg from '../../img/esri-old.png'; 
import storyMapsImg from '../../img/storymap-intro.png';

const imageObject = {
  "Esri in One Hour: Michael Gaigg on UI/UX Design": foothillsImg, 

  "GIS in Higher Education Workshop": collectorImg, 
  "Esri in One Hour: Andy Gup on the JSAPI and Product Management": jsapiImg, 
  "DISC Communication Workshop": discImg, 
  "Esri in One Hour: Ben Shaub on the EEAP": eeapImg, 
  "Intern Connect: The Future of ArcGIS": realtimeImg, 
  "Esri in One Hour: GIS in Education, with Esther Worker": campusImg, 
  "Esri in One Hour: The ArcGIS Platform, with Jeremy Mirmelstein": platformImg, 
  "Esri in One Hour: Stacia Taggart on GIS in Transportation": dotImg, 
  "Intern Connect: Living Atlas, with Jennifer Bell and Lisa Berry": livingAtlasImg, 
  "ConnectUp with Phil Mielke": redlandsGISImg, 
  "Green Infrastructure Project": GIPImg,
  "Professional Services Open Meeting": esriImg, 
  "Intro to Story Maps": foothillsImg
}

const ArticleBoxBackground = styled.div` 
  background-image: url(${props => imageObject[props.postTitle]}); 
  background-size: cover; 
  background-position: center; 
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  //padding: 2em; 
  margin: 10px;
  max-width: 500px;
  height: 500px;
  flex-shrink: 1; 
  :hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.35), 0 10px 10px rgba(0,0,0,0.32);
    border-radius: 4px; 
      -webkit-transition: all 0.25s ease-in-out;
      -moz-transition: all 0.25s ease-in-out;
      -o-transition: all 0.25s ease-in-out;
      transition: all 0.25s ease-in-out;
      z-index: 15; 
      transform: scale(1.02); 
  }
`
const ArticleBox = styled.div`{
  box-sizing: border-box; 
  display: block; 
  border: 1px solid rgba(0,0,0,0); 
  width: 100%; 
  height: 100%; 
  
  .title {
      margin-top: 10%; 
      position: relative;
      font-size: 2.3em;
      color: white;
      margin-bottom: 0px;
      visibility: hidden; 
      padding: 0 1em; 
  }
  .author, .date{
    margin: 0px;
  }
  .date{
    color: rgb(165, 164, 164);
    font-size: 1.5em; 
    margin-top: 5px; 
    visibility: hidden; 
  }
  .excerpt{
    margin-top: 0.6em;
    font-size: 1em;
    opacity: 0;
  }
    :hover{
      
      .title {
        color: white;
        visibility: visible; 
      }
      .date {
        color: lightgrey; 
        visibility: visible; 
      }
      .excerpt {
        opacity: 1;
        -webkit-transition: all 0.8s ease-in-out;
        -moz-transition: all 0.8s ease-in-out;
        -o-transition: all 0.8s ease-in-out;
        transition: all 0.8s ease-in-out;
      }
      background-color: rgba(0,0,0,.6); 
      border-radius: 4px; 
      -webkit-transition: all 0.3s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
      z-index: 2; 
    }
  `
  const BoxContent = styled.div`
    margin-top: 35%; 
    text-align: center; 
  `

  const PageBackground = styled.div`
    position: fixed; 
    left: 0; 
    right: 0; 
    z-index: -1; 
    width: 100vw; 
    height: 100vh; 
    background-image: url(${props => imageObject[props.postTitle]}); 
    background-size: cover; 
    background-position: center; 
    filter: blur(1rem); 
  `

  export { ArticleBoxBackground, ArticleBox, BoxContent, PageBackground }; 