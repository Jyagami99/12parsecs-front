import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState} from "react";
import Home from "./componentes/home";
import UserContext from "./componentes/context";

export default function App() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value = {{user, setUser}}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
