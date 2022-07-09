import React, { useContext } from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

export default function Image(props){

    
    function a(){
    console.log(props.imgindex);
    if(props.number === props.imgindex){
        return "";
    }else {
        return "none";
    }
    }

    return (
        <ImageJSX className = {a} src = {props.src} alt = {props.alt}></ImageJSX>
    )
}

const ImageJSX = styled.img`

    position: absolute;
    margin-left: 10px;
    margin-top: 10px;
    height: 90px;
    width: 90px;
        
    .none{
        display: none;
    }
`;