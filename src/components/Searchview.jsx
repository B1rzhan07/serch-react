import React from 'react';
import MovieCard from '../MovieCard';
import Hero from './Music/Hero';

const Searchview = ({keyWord,searchResult}) => {
    const result=searchResult.map((obj,i)=>{
        return <MovieCard movie={obj} key={i} />
    })
    return (
        <div className=''>
            <Hero text={keyWord} />
            {result && 
                <div className='container'>
                    {result}
                </div>

                }
        </div>
    );
};

export default Searchview;