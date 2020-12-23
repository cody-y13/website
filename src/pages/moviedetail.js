import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import {MovieState} from '../movieState';

const Moviedetail = () =>{
    const history = useHistory();
    const url = history.location.pathname;
    const [movies, setmovies] = useState(MovieState);
    const [movie, setmovie] = useState(null);

    //useeffect
    useEffect(()=>{
        const currentmovie = movies.filter((statemovie)=> statemovie.url === url )
        setmovie(currentmovie[0]);
    }, [movies, url]);
    return(
        <>
        {movie && (
        <Details>
            <Headline>
                <h2>{movie.title}</h2>
                <img src={movie.mainImg} alt="movie"/>
            </Headline>
            <Awards>
                {movie.awards.map((award) => (
                    <Award title={award.title} description = {award.description} key={award.title}/>
                ))}
            </Awards>
            <Imagedisplay>
                <img src={movie.secondaryImg} alt="image" />
            </Imagedisplay>
        </Details>
        )};
        </>
    )
};

const Details = styled.div`
    color: white;
`;

const Headline = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2{
        position: absolute;
        top: 10%;
        left: 40%;
        transition: translate(-50%, -10%);
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
        padding-top: 2rem;
    }
`;
const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    align-items: center;
    margin: 5rem 0rem;
    justify-content: space-around;
`;

const Awardstyle = styled.div`
    padding: 5rem;
    h3{
        font-size: 2rem;
    }
    .line{
        width: 100%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0rem;
    }
    p{
        padding: 2rem 0rem;

    }
`;

const Imagedisplay = styled.div`
    min-height: 50vh;
    img{
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`; 

const Award = ({title, description}) =>{
    return(
        <Awardstyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </Awardstyle>
    )
}


export default Moviedetail;