import React from 'react';
import PropTypes from 'prop-types';

const Card = ({districtName, districtObject, onCardClick, borderColorClass}) => (
  <article
    className={borderColorClass}
    onClick={() => onCardClick(districtName)}>
    <h3>{districtName}</h3>
    <ul>
      {
        Object.keys(districtObject).map( (item, index) =>
          <li key={index}>{item}: {districtObject[item]}</li> )
      }
    </ul>
  </article>
);

Card.propTypes = {
  districtName: PropTypes.string,
  districtObject: PropTypes.object,
  onCardClick: PropTypes.func,
  borderColorClass: PropTypes.string  
};

export default Card;
