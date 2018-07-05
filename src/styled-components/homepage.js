import styled from "styled-components"

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 0 auto;
  flex-wrap: wrap;
  max-width: 100vw;
`;
const ArticleBox = styled.div`{
  // background-color: pink;
  background-color: ghostwhite;
  padding: 2em;
  margin: .5em .5em;
  width: 400px;
  height: 400px;
  // box-shadow: 0px 0px 6px grey;
  .title{
      position: relative;
      font-size: 1.5em;
      color: white;
      margin-bottom: 0px;
  }
  .author, .date{
      margin: 0px;
  }
  .date{
      color: rgb(165, 164, 164);
  }
  .excerpt{
      margin-top: 0.6em;
      font-size: 1em;
      opacity: 0;
  }
  :hover{
    .title {
      color: grey;
    }
    .excerpt {
      opacity: 1;
      -webkit-transition: all 0.8s ease-in-out;
      -moz-transition: all 0.8s ease-in-out;
      -o-transition: all 0.8s ease-in-out;
      transition: all 0.8s ease-in-out;
    }
    box-shadow: 0px 0px 20px grey;
    background-image: none !important;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
  .title:hover {
    color: darkgrey;
  }

  /* Styling each square (child) */
  :nth-child(n){
    background-image: url("https://source.unsplash.com/random");
  }
`;

export {MainContainer, ArticleBox}
