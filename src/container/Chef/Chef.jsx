import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-inverse'>
      <img src={images.chef} alt='chef-img' />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title='A few words from the Chef...' />
      <h1 className='headtext__cormorant'>What we believe in</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote' />
          <p className='p__opensans'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
        <p className='p__opensans'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit odio
          minima unde maiores in eos alias molestiae, nulla dolorem. Ullam,
          reprehenderit sint libero accusantium necessitatibus voluptatem
          consequatur! Quas, dicta dolor.
        </p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt='signature' />
      </div>
    </div>
  </div>
);

export default Chef;
