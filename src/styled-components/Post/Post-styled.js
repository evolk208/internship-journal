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

const Arrow = styled.div`
    padding: 10px; 
    position: fixed; 
    top: 50%;  
    left: 24%;
    font-size: 2.5em; 
    :hover {
        left: 23%; 
        transition: left 135ms ease-in-out; 
    }
`

// export default PostWrapper;
export { PostWrapper, Arrow }
