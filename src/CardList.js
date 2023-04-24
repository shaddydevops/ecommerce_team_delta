import React from 'react';
import Card from './Card';
import Data from './Data';

function CardList({products}) {
    const cardList = products.map((item,index)=>(
        <Card item={item} key={item.id}/>
    ))
  return (
    <div className='card-container'>
      {cardList}
    </div>
  )
}

export default CardList;