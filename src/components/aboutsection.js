import React from 'react';
import home1 from '../img/home1.png';
//framer motion
import {motion} from 'framer-motion';
//style
import styled from 'styled-components';
import{About, Description, Image, Hide} from '../styles';
import {Titleanim, Fade, Photoanim} from '../animation';

const Aboutsection = () =>{
    // check out the framer motion page
    return(
        <About>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2 variants={Titleanim} >We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2  variants={Titleanim}>your <span>dreams</span> come </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={Titleanim} >true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={Fade}>Contact us for any photography or videography ideas that you have. We have professionals
                    with amazing skills. </motion.p>
                <motion.button variants={Fade}>Contact Us</motion.button>    
            </Description>
            <Image>
                <motion.img  variants={Photoanim} src= {home1} alt='Guy with a camera' />
            </Image>
        </About>
    );
};

export default Aboutsection;