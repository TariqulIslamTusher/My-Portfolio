import React from 'react';
import Banner from '../../Components/HomeCompo/Banner/Banner';
import AboutMe from '../../Components/HomeCompo/AboutMe/AboutMe';
import Skills from '../../Components/HomeCompo/Skills/Skills';
import MyProjects from '../../Components/HomeCompo/MyProjects/MyProjects';
import Contact from '../../Components/HomeCompo/Contacts/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
              <AboutMe></AboutMe>
              <Skills></Skills>
              <MyProjects></MyProjects>
              <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;