import React, {useState, useEffect} from 'react'
import Navbar from './components/Global/Navbar/Navbar.js'
import ScrollToTop from './components/Global/ScrollToTop/ScrollToTop.js'
import Footer from './components/Global/Footer/Footer.js';

import Home from './components/Home/Home.js';

import ErrorPage from './components/ErrorPage/ErrorPage.js';
import Projects from './components/Projects/Projects.js';
import Project from './components/Projects/Project/Project.js';
import Contact from './components/Contact/Contact.js';
import InfoProject from './components/Projects/InfoProject/InfoProject.js';

// import { projets } from './components/Constants/Constants.js';


import '../src/assets/css/styles.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';


const App = () => {

  const [colorTheme, setColorTheme] = useState('theme-blue');

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('theme-color');
    if(currentThemeColor){
      setColorTheme(currentThemeColor);
    }
  }, [])



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className={`App ${colorTheme}`}>
            <Navbar
              colorTheme={colorTheme}
              setColorTheme={colorTheme =>setColorTheme(colorTheme)}
            />
            <ScrollToTop/>
            <Home/>

            <Footer/>
          </div>

        }/>
        <Route path="/contact" element={
          <div className={`App ${colorTheme}`}>
            <Navbar
              colorTheme={colorTheme}
              setColorTheme={colorTheme =>setColorTheme(colorTheme)}
            />
            <Contact/>

            <Footer/>
          </div>
        }/>

        <Route path="/projet" element={
          <div className={`App ${colorTheme}`}>
            <Navbar
              colorTheme={colorTheme}
              setColorTheme={colorTheme =>setColorTheme(colorTheme)}
            />
            <Projects/>

            <Footer/>
          </div>
        }/>

        <Route path="/projet/:slug" element={
          <div className={`App ${colorTheme}`}>
            <Navbar
              colorTheme={colorTheme}
              setColorTheme={colorTheme =>setColorTheme(colorTheme)}
            />
            <Project />

            <Footer/>
          </div>
        }/>

        <Route path="/projet/:slug/:projet" element={
          <div className={`App ${colorTheme}`}>
            <Navbar
              colorTheme={colorTheme}
              setColorTheme={colorTheme =>setColorTheme(colorTheme)}
            />
            <InfoProject />

            <Footer/>
          </div>
        }/>

        <Route path="*" element={
          <div className={`App ${colorTheme}`}>
            <Navbar
              colorTheme={colorTheme}
              setColorTheme={colorTheme =>setColorTheme(colorTheme)}
            />
            <ErrorPage/>

            <Footer/>
          </div>
        }/>

      </Routes>
    </BrowserRouter>
    
  )
}

export default App