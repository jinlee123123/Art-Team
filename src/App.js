import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faCartPlus,faBars } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom'
import Main from './routes/Main.js';
import Header from './routes/Header';
import Footer from './routes/Footer';
import Store from './routes/Store'



function App() {


  return (
    <div className="App">
    
        <Header/>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/store' element={<Store/>}/>
          </Routes>
        <Footer/>
        
      
      
      
  
    </div>

  
  );
}



export default App;