import React from 'react';
import PropTypes from 'prop-types';
import Star from 'react-icons/lib/fa/star';

function StarIcon({ voteScore }) {
  return (
    <span>
      <Star size={15} /> {voteScore} | &nbsp;
    </span>
  );
}

StarIcon.propTypes = {
  voteScore: PropTypes.number.isRequired
};

export default StarIcon
