import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./Components/AboutMe/AboutMe";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Landing from "./Components/Landing";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


function App() {

  useEffect(() => {
    AOS.init({ duration: 2000 });
}, []);


  return (
    <div className=''>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}>
          <Route path="home" element={<Home/>}/>
          <Route index element={<Home/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="aboutme" element={<AboutMe/>}/>

        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
