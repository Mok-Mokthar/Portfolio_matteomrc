import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { FiSettings, FiUser } from 'react-icons/fi';
import { BsList } from "react-icons/bs";

// import logoWhite from '../../../assets/logo/LogoBlanc.png';
import logoBlue from '../../../assets/logo/LogoBleu.png';
import logoBrown from '../../../assets/logo/LogoBrown.png';
import logoRed from '../../../assets/logo/LogoRouge.png';
import logoGreen from '../../../assets/logo/LogoVert.png';
import logoPurple from '../../../assets/logo/LogoViolet.png';

import {Link} from 'react-router-dom';


import { Spin as Hamburger } from 'hamburger-react';

const Navbar = ({colorTheme, setColorTheme}) => {

  const [openSettings, setOpenSettings] = useState(false)
  const [openBurger, setOpenBurger] = useState(false)

  const handleTheme = (theme) => {
    setColorTheme(theme);
    localStorage.setItem('theme-color', theme);
  }

  return (
    <div className="nav">
      <div className="burgerSection">
        <BsList 
          className="burger"
          direction="right"
          onClick={() => setOpenBurger(true)} 
          
        />
        <Drawer
          anchor='left'
          open={openBurger}
          onClose={() => setOpenBurger(false)}
        >
          <Box width='10rem'>
            <div className="DrawerBurger" style={{display: 'grid', justifyContent: 'center', margin: '1rem 0'}}>
              <Link to='/' className='externalLinkMenu'>Home</Link>
              <Link to='/projet' className='externalLinkMenu'>projets</Link>
              <Link to='/projet/mdsprojet' className='externalLinkMenu'>MDS projet</Link>
            </div>
          </Box>
        </Drawer>
      </div>
      <Link to="/">
        <div className="logo">
          {/* {colorTheme === 'theme-white' ? <img src={logoWhite} alt='logo white' /> : null} */}
          {colorTheme === 'theme-blue' ? <img src={logoBlue} alt='logo blue' /> : null}
          {colorTheme === 'theme-brown' ? <img src={logoBrown} alt='logo brown' /> : null}
          {colorTheme === 'theme-red' ? <img src={logoRed} alt='logo red' /> : null}
          {colorTheme === 'theme-green' ? <img src={logoGreen} alt='logo green' /> : null}
          {colorTheme === 'theme-purple' ? <img src={logoPurple} alt='logo purple' /> : null}
        </div>
      </Link>
      <div className="utils">
        <div className="contact">
          <Link to="/contact">
            <FiUser className="user"/>
          </Link>
        </div>
        <div className="settings">
          <FiSettings className="gear" onClick={() => setOpenSettings(true)} />
          <Drawer
            anchor='top'
            open={openSettings}
            onClose={() => setOpenSettings(false)}
            >
            <Box height='8.125rem'>
              <div className="boxContainer">
                <div className='theme-options' >
                  <div className={`${colorTheme === 'theme-white' ? 'theme-white active' : 'theme-white'}`}
                    onClick={()=> handleTheme('theme-white')}
                  />
                  <div className={`${colorTheme === 'theme-blue' ? 'theme-blue active' : 'theme-blue'}`}
                    onClick={()=> handleTheme('theme-blue')}
                  />
                  <div className={`${colorTheme === 'theme-brown' ? 'theme-brown active' : 'theme-brown'}`}
                    onClick={()=> handleTheme('theme-brown')}
                  />
                  <div className={`${colorTheme === 'theme-red' ? 'theme-red active' : 'theme-red'}`}
                    onClick={()=> handleTheme('theme-red')}
                  />
                  <div className={`${colorTheme === 'theme-green' ? 'theme-green active' : 'theme-green'}`}
                    onClick={()=> handleTheme('theme-green')}
                  />
                  <div className={`${colorTheme === 'theme-purple' ? 'theme-purple active' : 'theme-purple'}`}
                    onClick={()=> handleTheme('theme-purple')}
                  />
                </div>
              </div>
            </Box>
          </Drawer>
        </div>
      </div>
    </div>
  )
}

export default Navbar