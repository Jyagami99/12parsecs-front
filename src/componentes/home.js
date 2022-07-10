import React from "react";
import styled from 'styled-components';
import Produto from "./produto";
import Topo from "./topo.js";

export default function Home() {
  
    const [clicado, setClicado] = React.useState(false);
     
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
      <Topo/>
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
          <Produto name = {product.name} image ={product.images[0]} price ={product.price}/>
          <Produto name = {product.name} image ={product.images[0]} price ={product.price}/>
          <Produto name = {product.name} image ={product.images[0]} price ={product.price}/>
          <Produto name = {product.name} image ={product.images[0]} price ={product.price}/>
        </Produtos>
      </AreaProdutos>
      </Container>
      </>
    );
  }

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