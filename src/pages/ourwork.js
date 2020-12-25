import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
//images
import athlete from '../img/athlete2.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
//animation
import {motion} from 'framer-motion';
import {Pageanimation, Fade, Photoanim, Lineanim, Slider,Slidercontainer} from '../animation';

const Ourwork = () =>{
    return(
        <Work exit="exit" variants = {Pageanimation} initial="hidden" animate="show" style={{background:'#fff'}}>
            <motion.div variants={Slidercontainer}>
            <Frame1 variants={Slider} ></Frame1>
            <Frame2 variants={Slider}></Frame2>
            <Frame3 variants={Slider}></Frame3>
            <Frame4 variants={Slider}></Frame4>
            </motion.div>
            <Movie>
                <motion.h2 variants={Fade}>The athlete</motion.h2>
                <motion.div variants={Lineanim} className="line"></motion.div>
                <Link to="/work/the-athlete">
                    <Hide>
                    <motion.img  variants={Photoanim} src={athlete} alt="athelete" />
                    </Hide>
                </Link>
            </Movie>
            <Movie>
                <h2>The racer</h2>
                <div className="line"></div>
                <Link to="/work/the-racer">
                    <img src={theracer} alt="racer" />
                </Link>
            </Movie>
            <Movie>
                <h2>Good times</h2>
                <div className="line"></div>
                <Link to="/work/good-times">
                    <img src={goodtimes} alt="goodtimes" />
                </Link>
            </Movie>
        </Work>
    )
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;
    }

`;

const Movie = styled.div`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;
const Hide = styled.div`
    overflow: hidden;
`;

//Frame animation
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index : 2;
`;
const Frame2 = styled(Frame1)`
    background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
    background: #8ed2ff
`;

const Frame4 = styled(Frame1)`
    background: #8effa0
`;

export default Ourwork;