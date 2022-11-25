import logo from './logo.svg';
import './App.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faCartPlus,faBars } from "@fortawesome/free-solid-svg-icons";
import { Routes, Route, Link,Outlet } from 'react-router-dom'
import Main from './routes/Main.js';
import Header from './routes/Header';
import Footer from './routes/Footer';
import Store from './routes/Store';
import Detail from './routes/Product';
import Join from './routes/Join';
import Login from './routes/Join'



function App() {

  

  return (
    <div className="App">
    
        <Header/>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/store' element={<Store/>}/>
            <Route path='/detail' element={<Detail/>}/>
            <Route path='/join' element={<Join/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
        <Footer/>
        
      
      
      
  
    </div>

  
  );
}



export default App;