import React from 'react';
import PropTypes from 'prop-types';
import './styles/ComparisonCard.css';

const ComparisonCard = (
  { locationOne, locationTwo, averageOne, averageTwo, comparisonData}
) => (
  <article className='comparison-card'>
    <div className='location-one-box spacing'>
      <h3 className='locations'>{locationOne}</h3>
      <h4 className='average'>Average: {averageOne}</h4>
    </div>
    <div className='compared-box spacing'>
      <h2>Compared: {comparisonData}</h2>
    </div>
    <div className='location-two-box spacing'>
      <h3 className='locations'>{locationTwo}</h3>
      <h4 className='average'>Average: {averageTwo}</h4>
    </div>
  </article>
);

ComparisonCard.propTypes = {
  locationOne: PropTypes.string,
  locationTwo: PropTypes.string,
  averageOne: PropTypes.number,
  averageTwo: PropTypes.number,
  comparisonData: PropTypes.number
};

export default ComparisonCard;
