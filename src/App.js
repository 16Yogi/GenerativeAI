import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Index from './Pages/Index';
import Login from './Component/Login/Login';
import Singup from './Component/Singup/Singup';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index></Index>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/singup" element={<Singup></Singup>}></Route>
        </Routes>    
      </BrowserRouter>
      
    </>

  );
}

export default App;
