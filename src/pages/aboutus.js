import React from 'react';
//page components
import Aboutsection from '../components/aboutsection';
import Servicessection from '../components/servicessection';
import Faqsection from '../components/faqsection';
//animation
import {motion} from 'framer-motion';
import {Pageanimation} from '../animation';

const Aboutus =() =>{
    return(
        <motion.div exit="exit" variants={Pageanimation} initial="hidden" animate="show">
            <Aboutsection />
            <Servicessection />
            <Faqsection />
        </motion.div>
    );
};


export default Aboutus;