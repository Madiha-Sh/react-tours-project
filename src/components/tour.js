import React, { useState, useEffect } from 'react';

const Tour = (props) => {
  const { id, name, image, info, price, handleRemove } = props;
  const [readmore, setReadmore] = useState(false);
  return (
    <article key={id} className='single-tour'>          
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {readmore ? info : `${info.substring(0,200)}...`}
          <button onClick={() => setReadmore(!readmore)}>
            {readmore ? 'show less' : 'read more'}
          </button>
        </p>
        <button className="delete-btn" onClick={() => handleRemove(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
}
 
export default Tour;