import React from 'react'
import Hero from './Hero/Hero.js';
import Summary from './Summary/Summary.js';
import PersonalInfo from './PersonalInfo/PersonalInfo.js';
import Skills from './Skills/Skills.js';

import { TabTitle } from '../Constants/Constants.js';


const Home = () => {
    
    TabTitle('Home');

    return (
        <>
            <Hero/>
            <Summary/>
            <PersonalInfo/>
            <Skills/>
        </>
    )
}

export default Home