import React, { useContext } from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import Loader from "./loader";
import UserContext from "./context";
import Image from "./image.js";

export default function Produto(props) {
  
    const [load, setLoad] = React.useState(false);
    const [clicado, setClicado] = React.useState(false);
    const [qtd, setQtd] = React.useState(0);
  
    const {user} = useContext(UserContext);
  
    let navigate = useNavigate();
     
    function mais(){
      setQtd(qtd+1);
    }
    function menos(){
      setQtd(qtd-1);
    }

    function clica(){
        if(clicado){
            setClicado(false);
        }else{
            setClicado(true);
        }
    }
    
   
    return (
    <Card>
        {(props.images !== undefined)? props.images.map((image, index)=> <Image key = {index} src = {image} alt = {props.name} number = {qtd} imgindex = {index}></Image>) : <Loader/>}
        <span>
            {props.name}
        </span>
        <div className="botoes">
        <button onClick={menos}>
            -
        </button>
        <p>
            {qtd}
        </p>
        <button onClick={mais}>
            +
        </button>
        </div>
        <Price>
            {props.price}
        </Price>
    </Card>
  )
}

const Card = styled.div`
    height: 150px;
    width: 110px;
    background-color: white;
    margin-right: 20px;
    margin-bottom: 20px;
    span {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 31px;
        color: black;
        margin-left: 10px;
    }  
    div {
        position: absolute;
        margin-left: 10px;
        margin-top: 100px;
        height: 15px;
        width: 45px;
        display:flex;
        justify-content: space-between;
        background-color: white;
        
        button{
          margin-left: 30px;
          z-index: 2;
          width:15px;
          height:15px;
          border:none;
        }
        p{
          font-family: 'Raleway';
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 31px;
          color: black;
          margin-top: -8px;
        }
    }
`;
const Price = styled.div`
`;