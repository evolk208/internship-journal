import styled, {injectGlobal} from "styled-components";

const HeaderStyled = styled.div`
  // box-sizing: border-box;
  // margin: 0 auto;
  // background-color: rgb(118, 218, 185);
  // width: 100%;
  // h1{
  //   padding: 100px;
  //   text-align: center;
  //   font-size: 2.5em;
  // }
  // h3 {
  //   padding: 40px;
  //   text-align: left;
  // }
  :hover {
    .title {
      visibility: visible;
    }
  }
  z-index: 100; 
`
const TitleBanner = styled.h1`
  background: rgba(0,0,0,.7);
  color: white; 
  max-width: 450px;
  position: fixed; 
  left: 95px;  
  top: 20px; 
  padding: .5rem 1rem; 
  font-size: 1.25rem; 
  //visibility: hidden; 
  z-index: 200;
  @media only screen and (max-device-width: 830px) {
    font-size: .9rem; 
    max-width: 60%;
    max-height: 50px; 
  }
  @media only screen and (max-width: 830px) {
    font-size: .85rem; 
    max-width: 60%;
    height: 50px; 
  }
`

const HomeIcon = styled.img`
    width: 75px;
    height: 75px; 
    padding: 15px; 
    position: fixed; 
    top: 0; 
    left: 0;  
    z-index: 100; 
`

const MobileMenu = styled.div`
   display: none; 


   @media only screen and (max-width: 830px) {
     display: block; 
   }
`


export { HeaderStyled, TitleBanner, HomeIcon }