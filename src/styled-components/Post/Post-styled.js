import styled from "styled-components";

const PostWrapper = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 800px;
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
`

const RArrow = styled.img`
    padding: 10px; 
    position: fixed; 
    top: 50%;  
    width: 4rem; 
    height: 4rem; 
    right: 1%; 
    opacity: .4; 
    :hover {
        right: 0%; 
        opacity: .75; 
        transition: all 135ms ease-in-out; 
    }
`
const LArrow = styled.img`
    padding: 10px; 
    position: fixed; 
    top: 50%;  
    width: 4rem; 
    height: 4em; 
    left: 1%;
    opacity: .4; 
    :hover {
        left: 0%; 
        opacity: .75; 
        transition: all 135ms ease-in-out; 
    }
`
// export default PostWrapper;
export { PostWrapper, LArrow, RArrow }
