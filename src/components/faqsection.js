import React from 'react';
import Toggle from './toggle';
//style
import styled from 'styled-components';
import{About} from '../styles';
import {AnimateSharedLayout} from 'framer-motion';
import {Usescroll} from './usescroll';
import {Fade} from '../animation';
import {Scrollreveal} from '../animation';

const Faqsection = () =>{
    const [element, controls] = Usescroll();
    return(
        <Faq variants={Fade} ref={element} animate = {controls} initial = 'hidden' >
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
            <Toggle title="How do I start?">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </Toggle>
            <Toggle title="Daily schedule">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </Toggle>
            <Toggle title="Payment methods">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </Toggle>
            <Toggle title="prodcuts and services?">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </Toggle>
            </AnimateSharedLayout>
        </Faq>
    );
};

const Faq = styled(About)`
    display: block;
    span{
        display: block;

    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;

        }
    }
`;

export default Faqsection;