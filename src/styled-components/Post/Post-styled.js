import styled from "styled-components";

const PostWrapper = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 85%;
  margin-bottom: 1.5em;
  margin-top: 25px; 
  padding: 2em;
  //background: ghostwhite;
  box-shadow: 0px 0px 8px grey;
  h1 {
    font-size: 2em;
    color: grey;
    margin-bottom: 0px;
  }
  p {
    color: black;
  }
  @media only screen and (max-device-width: 830px) {
    margin-top: 50px;
  }
`

const RArrow = styled.img`
    padding: 3px; 
    position: fixed; 
    top: 50%;  
    width: 3.5rem; 
    height: 3.5rem; 
    right: .75%; 
    opacity: .4; 
    :hover {
        right: 0; 
        opacity: .75; 
        transition: all 135ms ease-in-out; 
    }
`
const LArrow = styled.img`
    padding: 3px; 
    position: fixed; 
    top: 50%;  
    width: 3.5rem; 
    height: 3.5em; 
    left: .75%;
    opacity: .4; 
    :hover {
        left: 0; 
        opacity: .75; 
        transition: all 135ms ease-in-out; 
    }
`


const MobileMenu = styled.div`
   display: none; 

`
// export default PostWrapper;
export { PostWrapper, LArrow, RArrow, MobileMenu }
