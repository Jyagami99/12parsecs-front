import { Home } from "./pages/Home";
import SignUp from './pages/SignUp';
import {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from '../Assets/GlobalStyles';
import { Carrinho } from "./pages/Carrinho";
import { SignIn } from "./pages/SignIn";

function App() {



  return(
    
    <BrowserRouter>
      <GlobalStyles/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/sign-up' element={<SignUp />}/>
        <Route path='/sign-in' element={<SignIn />}/>
        <Route path='/carrinho' element={<Carrinho />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
