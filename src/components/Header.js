import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Topo>
      <Link to="/">
        <ion-icon name="home-outline"></ion-icon>
      </Link>
      <h1>12 Parsecs</h1>
      <Link to="/carrinho">
        <ion-icon name="cart-outline"></ion-icon>
      </Link>
    </Topo>
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
  ion-icon {
    color: white;
    font-size: 30px;
  }

  h1 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #ffffff;
  }

  ion-icon {
    cursor: pointer;
  }
`;

export { Header };
