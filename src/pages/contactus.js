import React from 'react';
//animation
import {motion} from 'framer-motion';
import {Pageanimation} from '../animation';

const Contactus = () =>{
    return(
        <motion.div exit="exit" variants = {Pageanimation} initial="hidden" animate="show" style={{background:'#fff'}}>
            <h1>Contact us</h1>
        </motion.div>
    )
}

export default Contactus;