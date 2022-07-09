import React, { useContext } from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import Loader from "./loader";
import UserContext from "./context";
import Produto from "./produto";


export default function Home() {
  
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
    
    let product = {
      name: "Fone AKG",
      images: [ 
        "https://cf.shopee.com.br/file/267d861d99ed53f0ff73283fffd041bf",
        "https://m.media-amazon.com/images/I/61OnK6q6skL._AC_SX425_.jpg",
        "https://cf.shopee.com.br/file/267d861d99ed53f0ff73283fffd041bf"
      ],
      price: 12.92
    }

    return (
        <>
      <Topo>
          <ion-icon name="home-outline"></ion-icon>
          <h1>12 Parsecs</h1>
          <ion-icon name="cart-outline"></ion-icon>
      </Topo>
      <Container>
      <Filtros className={(clicado)? "aparece":""}>
      <div onClick={clica}>
        <ion-icon name="caret-forward-outline"></ion-icon>  
        <h1>
          Filtros
        </h1>
        </div>
      </Filtros>
      <AreaProdutos>
        <h2>
            Todos os produtos
        </h2>
        <Produtos>
          <Produto name = {product.name} images ={product.images} price ={product.price}/>
          <Produto/>
          <Produto/>
          <Produto/>
        </Produtos>
      </AreaProdutos>
      </Container>
      </>
    );
  }


  const Topo = styled.header`
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
   
   h1{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
   }
 `;

  const Filtros = styled.div`
    width: 400px;
    height: 100vh;
    background: white;
    position: relative;
    margin-left: -350px;
    transition: all 1s;
   
    ion-icon {
        font-size: 30px;
        position: absolute;
        right: -13px;
        top: 40vh;
        background-color: white;
        border-radius: 15px;
    }
    h1 {
      font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: black;
    margin-left: 20px;
    margin-top: 15px;
    }
  `;

  const Container = styled.div`
    display: flex;

    .aparece {
        margin-left: 0px;
    }

  `;
  const AreaProdutos = styled.div`
   h2{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: black;
    margin-left: 20px;
    margin-top: 15px;
   }
  `;

  const Produtos = styled.div`
    display: flex;
    position: absolute;
    flex-wrap: wrap;
    margin-left: 20px;
    margin-top: 15px;
    }
  `;