import React from 'react';
import './Cards.scss';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>View our featured projects:</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/project1.jpg'
              text='Explore modern beauty of this project'
              label='Large'
              path='/contact'
            />
            <CardItem
              src='/images/project2.jpg'
              text='Explore the uniqueness of this project'
              label='Large'
              path='/contact'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/project3.jpg'
              text='Explore the unique feel this project beings'
              label='Large'
              path='/contact'
            />
            <CardItem
              src='/images/project4.png'
              text='Experience the open feeling of this project'
              label='Large'
              path='/contact'
            />
            <CardItem
              src='/images/project5.jpg'
              text='Explore the quirks of this project'
              label='Large'
              path='/contact'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;