import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./layout/footer/Footer";
import Home from "./layout/Home";
import Navbar from "./layout/navbar/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/signup/Signup";
import About from "./pages/About";
import Incubation from "./pages/Incubation"
import Campaigns from "./pages/Campaigns";


import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/about" element={<About/>}/> 
          <Route path="/incubation" element={<Incubation />} />
          <Route path="/campaigns" element={<Campaigns />} />
        </Routes>
        <Footer/>
      </Router>

    
    </>
  );
}

export default App;
