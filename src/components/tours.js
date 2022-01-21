import React, { useState, useEffect } from 'react';
import Tour from './tour';

const Tours = (props) => {
  const { tours, handleRemove } = props;
  return (
    <section>
      <div className='title'>
        <h2>our tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map(tour => {
          return <Tour key={tour.id} {...tour} handleRemove={handleRemove} />
        })}
      </div> 
    </section>
  )
}
 
export default Tours;