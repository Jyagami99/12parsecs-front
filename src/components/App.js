import { Home } from "./pages/Home";
import SignUp from './pages/SignUp';
import {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from '../Assets/GlobalStyles'

function App() {

  const [user, setUser] = useState(
    localStorage.getItem('userdata')
    ? JSON.parse(localStorage.getItem('userdata'))
    : null
);


  return(
    
    <BrowserRouter>
      <GlobalStyles/>
      <Routes>
        <Route path='/sign-up' element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
