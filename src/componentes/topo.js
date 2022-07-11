import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";


export default function Topo() {
  
    return (
      <Navbar>
          <Link to={"/"}>
          <ion-icon name="home-outline"></ion-icon>
          </Link>
          <h1>12 Parsecs</h1>
          <div className="logincadastro">
          <p>
          <span>
            Faça seu
          </span>
          <Link to={"/sign-in"}>
          <span className="sign">
            login 
          </span>
          </Link>
          </p>  
          <span> 
            ou
          </span>
          <Link to={"/sign-up"}>
          <span className="sign">
            cadastre-se
          </span>
          </Link>
          </div>
          <ion-icon name="cart-outline"></ion-icon> 
      </Navbar>
    );
}

const Navbar = styled.header`
display: fixed;
height: 60px;
width: 100%;
margin: auto; 
display: flex;
justify-content: space-around;
align-items: center;
background-color: black;

ion-icon{
 color: white;
 font-size: 30px;
}
.logincadastro{
 position: absolute;
 margin-left: 400px;
 width: 120px;
 height: 30px;

 span {
   font-family: 'Raleway';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   color: #FFFFFF;
  }
 .sign {
   font-weight: 700;
   margin-left: 4px;
 }
}
h1{
 font-family: 'Raleway';
 font-style: normal;
 font-weight: 700;
 font-size: 26px;
 line-height: 31px;
 color: #FFFFFF;
}
`;