import React from 'react';
import Banner from './Banner';
import BookCard from './BookCard';

const Hero = () => {
    return (
        <div>
           <div className='max-w-7xl mx-auto px-2 mt-5'>
           <Banner></Banner>
           </div>
           <div className='mt-16 max-w-7xl mx-auto'>
           <BookCard></BookCard>
           </div>
        </div>
    );
};

export default Hero;