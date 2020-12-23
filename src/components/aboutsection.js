import React from 'react';
import home1 from '../img/home1.png';
//framer motion
import {motion} from 'framer-motion';
//style
import styled from 'styled-components';
import{About, Description, Image, Hide} from '../styles';

const Aboutsection = () =>{
    const Titleanim = {
        hidden:{opacity:0},
        show: {opacity:1, transition :{duration:2}},
    };
    const Container ={
        hidden: {x:100},
    show:{x:0, transition:{duration:1 , ease: "easeOut", staggerChildren:1, */*when:"beforChildren"*/}},
    }
    
    
    return(
        <About>
            <Description>
                <motion.div variants={Container} initial="hidden" animate="show" className="title">
                    <Hide>
                        <motion.h2 variants={Titleanim} >We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={Titleanim}>your <span>dreams</span> come </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={Titleanim}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <p>Contact us for any photography or videography ideas that you have. We have professionals
                    with amazing skills. </p>
                <button>Contact Us</button>    
            </Description>
            <Image>
                <img src= {home1} alt='Guy with a camera' />
            </Image>
        </About>
    );
};

export default Aboutsection;