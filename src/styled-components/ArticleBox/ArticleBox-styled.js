import styled from "styled-components"

// import foothillsImg from '../../img/foothills-scene.png';
// import collectorImg from '../../img/mobile-apps.png'; 
// import jsapiImg from '../../img/jsapi.png'; 
// import discImg from '../../img/disc.png'; 
// import eeapImg from '../../img/eeap-crop.png';
// import realtimeImg from '../../img/real-time.png'; 
// import campusImg from '../../img/campus-gis.png'; 
// import platformImg from '../../img/platform.png'; 
// import dotImg from '../../img/nysdot-traffic.png'; 
// import livingAtlasImg from '../../img/living-atlas-catalog.png'; 
// import redlandsGISImg from '../../img/redlands-map.png';
// import GIPImg from '../../img/GIP.png';
// import esriImg from '../../img/esri-old.png'; 
// import psImg from '../../img/location-intelligence.png'; 
// import opioidImg from '../../img/larimer.png'; 
// import ngoImg from '../../img/globe.png'; 
// import storyMapsImg from '../../img/rohinga.png';
// import taImg from '../../img/ta.png';
// import esriTrainingImg from '../../img/esri-training.png';
// import jamImg from '../../img/jam.jpg';

const imageObject = {
  "Esri in One Hour: Michael Gaigg on UI/UX Design": '/static/img/foothills-scene.png', 
  "GIS in Higher Education Workshop": '/static/img/mobile-apps.png', 
  "Esri in One Hour: Andy Gup on the JSAPI and Product Management": '/static/img/jsapi.png', 
  "DISC Communication Workshop": '/static/img/disc.png', 
  "Esri in One Hour: Ben Schaub on the EEAP": '/static/img/eeap-crop.png', 
  "Intern Connect: The Future of ArcGIS": '/static/img/real-time.png', 
  "Esri in One Hour: GIS in Education, with Esther Worker": '/static/img/campus-gis.png', 
  "Esri in One Hour: The ArcGIS Platform, with Jeremy Mirmelstein": '/static/img/platform.png', 
  "Esri in One Hour: Stacia Taggart on GIS in Transportation": '/static/img/nysdot-traffic.png', 
  "Intern Connect: Living Atlas, with Jennifer Bell and Lisa Berry": '/static/img/living-atlas-catalog.png', 
  "ConnectUp with Phil Mielke": '/static/img/redlands-map.png', 
  "Green Infrastructure Project": '/static/img/GIP.png',
  "Professional Services Open Meeting": '/static/img/esri-old.png', 
  "Professional Services Intern Meeting": '/static/img/location-intelligence.png', 
  "Intro to Story Maps": '/static/img/foothills-scene.png', 
  "Opioid Mapping Convention": '/static/img/larimer.png', 
  "Esri in One Hour: Alison Sizer on Story Maps": '/static/img/rohinga.png',
  "Esri in One Hour: Kim Rohrs on Technical Advising": '/static/img/ta.png', 
  "Esri in One Hour: Katy Dalton on Training": '/static/img/esri-training.png',
  "Thank You, Josh Peterson!": '/static/img/jam.jpg'
}

// const imageObject = {
//   "Esri in One Hour: Michael Gaigg on UI/UX Design": foothillsImg, 
//   "GIS in Higher Education Workshop": collectorImg, 
//   "Esri in One Hour: Andy Gup on the JSAPI and Product Management": jsapiImg, 
//   "DISC Communication Workshop": discImg, 
//   "Esri in One Hour: Ben Schaub on the EEAP": eeapImg, 
//   "Intern Connect: The Future of ArcGIS": realtimeImg, 
//   "Esri in One Hour: GIS in Education, with Esther Worker": campusImg, 
//   "Esri in One Hour: The ArcGIS Platform, with Jeremy Mirmelstein": platformImg, 
//   "Esri in One Hour: Stacia Taggart on GIS in Transportation": dotImg, 
//   "Intern Connect: Living Atlas, with Jennifer Bell and Lisa Berry": livingAtlasImg, 
//   "ConnectUp with Phil Mielke": redlandsGISImg, 
//   "Green Infrastructure Project": GIPImg,
//   "Professional Services Open Meeting": esriImg, 
//   "Professional Services Intern Meeting": psImg, 
//   "Intro to Story Maps": foothillsImg, 
//   "Opioid Mapping Convention": opioidImg, 
//   "Esri in One Hour: Sam Libby on Nonprofits and NGOs": ngoImg, 
//   "Esri in One Hour: Alison Sizer on Story Maps": storyMapsImg,
//   "Esri in One Hour: Kim Rohrs on Technical Advising": taImg, 
//   "Esri in One Hour: Katy Dalton on Training": esriTrainingImg,
//   "Thank You, Josh Peterson!": jamImg
// }

const ArticleBoxBackground = styled.div` 
  background-image: url(${props => imageObject[props.postTitle]}); 
  background-size: cover; 
  background-position: center; 
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  //padding: 2em; 
  margin: 10px;
  width: 500px;
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
  @media only screen and (max-device-width: 830px) {
    width: 100%; 
    margin: 5px;
    height: 55vh;
  }
`
const ArticleBox = styled.div`{
  box-sizing: border-box; 
  display: block; 
  border: 1px solid rgba(0,0,0,0); 
  width: 100%; 
  height: 100%; 
  text-align: center; 
  .title {
      margin-top: 10%; 
      position: relative;
      font-size: 2.3em;
      color: black; 
      margin-bottom: 0px;
      //background: ghostwhite;
      padding: 5px 1em; 
      opacity: 0; 
  }
  .author, .date{
    margin: 0px;
  }
  .date{
    color: rgba(0,0,0,.65);
    font-size: 1.5em; 
    padding-top: 0px; 
    padding-bottom: 10px;
  visibility: hidden; 
   //background: ghostwhite;
  
  }
  .excerpt{
    margin-top: 0.6em;
    font-size: 1em;
    opacity: 0;
  }
    :hover{
      
      .title {
        color: white;
        opacity: .85;
       // visibility: visible; 
        background: none; 
        -webkit-transition: { color, opacity }0.3s ease-in-out;
        -moz-transition: { color, opacity }0.3s ease-in-out;
        -o-transition: { color, opacity }0.3s ease-in-out;
        transition: { color, opacity } 0.3s ease-in-out;
      }
      .date {
        background: none;
        visibility: visible; 
        color: rgb(165, 164, 164);
        -webkit-transition: { color, visibility } 0.3s ease-in-out;
        -moz-transition: { color, visibility } 0.3s ease-in-out;
        -o-transition: { color, visibility } 0.3s ease-in-out;
        transition: { color, visibility } 0.3s ease-in-out;
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
    @media only screen and (max-device-width: 830px) {
      .title {
        visibility: visible; 
        opacity: 1;
        background: rgba(255,255,255,.8);
        font-size: 1.5rem;
      }
      .excerpt {
        visibility: visible; 
      }
      .date {
        visibility: visible; 
        background: rgba(255,255,255,.8);
        font-size: 1rem;
      }
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