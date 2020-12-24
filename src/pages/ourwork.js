import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
//images
import athlete from '../img/athlete2.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
//animation
import {motion} from 'framer-motion';
import {Pageanimation} from '../animation';

const Ourwork = () =>{
    return(
        <Work exit="exit" variants = {Pageanimation} initial="hidden" animate="show" style={{background:'#fff'}}>
            <Movie>
                <h2>The athlete</h2>
                <div className="line"></div>
                <Link to="/work/the-athlete">
                    <img src={athlete} alt="athelete" />
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
        background: #cccccc;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

export default Ourwork;