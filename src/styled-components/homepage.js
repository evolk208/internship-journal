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
  background-color: pink;
  // background-color: ghostwhite;
  padding: 2em;
  margin: .25em .25em;
  width: 300px;
  height: 300px;
  // box-shadow: 0px 0px 6px grey;
  .title{
      position: relative;
      font-size: 1.5em;
      color: grey;
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
  .excerpt:hover {
    opacity: 1;
    -webkit-transition: all 0.6s ease-in-out;
    -moz-transition: all 0.6s ease-in-out;
    -o-transition: all 0.6s ease-in-out;
    transition: all 0.6s ease-in-out;
  }
  :hover{
    box-shadow: 0px 0px 20px grey;
    background-color: ghostwhite;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
  .title:hover {
    color: darkgrey;
  }

  /* Styling each square (child) */
  :first-child{
    background-image: src(https://source.unsplash.com/random);
  }
`;

export {MainContainer, ArticleBox}
