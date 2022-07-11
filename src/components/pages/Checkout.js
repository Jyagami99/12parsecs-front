import styled from "styled-components";

function Checkout() {
  return (
    <>
      <Container>
        <ProductContainer></ProductContainer>
        <ResumoContainer></ResumoContainer>
      </Container>
    </>
  );
}

export { Checkout };

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-itens: center;
  text-align: center;
  padding: 70px 30px;
  height: 450px;
  background-color: aqua;
`;

const ProductContainer = styled.div`
  width: 65%;
  height: 50px;
  margin-right: 5%;
  background-color: yellow;
`;

const ResumoContainer = styled.div`
  width: 25%;
  height: 50px;
  margin-left: 5%;
  background-color: bisque;
`;
