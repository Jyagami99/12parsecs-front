import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState} from "react";
import Home from "./componentes/home";
import UserContext from "./componentes/context";
import ProdutoComprar from "./componentes/produtocomprar";

export default function App() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value = {{user, setUser}}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="/produto/:idproduto" element={<ProdutoComprar/>}/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
