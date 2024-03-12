import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './components/Navbarr';
import Home from './components/Home';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Apropos from './components/Apropos';
import Login from './components/Login';



function App() {
  return (
    <div>
      <Navbarr/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="apropos" element={ <Apropos/> } />
        <Route path="login" element={ <Login/> } />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
