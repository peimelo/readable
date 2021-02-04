import PropTypes from 'prop-types';
import React from 'react';
import { FaStar } from 'react-icons/fa';

function StarIcon({ voteScore }) {
  return (
    <span>
      <FaStar size={15} /> {voteScore}
    </span>
  );
}

StarIcon.propTypes = {
  voteScore: PropTypes.number.isRequired
};

export default StarIcon
