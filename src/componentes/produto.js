import React from "react";
import styled from 'styled-components';

export default function Produto(props) {
  
  
    return (
    <Card>
        <img src={props.image} alt={props.name}/>
        <span>
            {props.name}
        </span>
        <Price>
          <h2>
            R$ {props.price}
          </h2>
        </Price>
    </Card>
  )
}

const Card = styled.div`
    height: 300px;
    width: 220px;
    background-color: white;
    margin-right: 20px;
    margin-bottom: 20px;
    
    img {
    margin-left: 20px;
    margin-top: 20px;
    height: 180px;
    width: 180px;
    overflow: hidden;
    }

    span {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 31px;
        color: black;
        margin-left: 20px;
    }
`;
const Price = styled.div`
  diplay: flex;
   h2{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 31px;
    color: black;
   }
`;