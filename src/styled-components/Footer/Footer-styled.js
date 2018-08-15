import styled from "styled-components"

const Footer = styled.footer`
    background: rgba(0, 102, 0, .9); 
    display: block; 
    position: relative; 
    bottom: 0; 
    width: 100%; 
    height: auto;
    text-align: center;
    opacity: .9;
    padding: 5px;
    p {
        padding: 0; 
        line-height: 1 !important;
        color: ghostwhite; 
        opacity: .8;
    }
    a { 
        color: rgba(0,0,128, 1); 
    }
    a:hover {
        font-size: 1rem; 
        transition: all linear 300ms;
        color: white;
        opacity: .6;
    }
`
export default Footer 