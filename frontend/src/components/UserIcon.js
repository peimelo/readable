import PropTypes from 'prop-types';
import React from 'react';
import { FaUser } from 'react-icons/fa';

function UserIcon({ author }) {
  return (
    <span>
      <FaUser size={15} /> {author}
    </span>
  );
}

UserIcon.propTypes = {
  author: PropTypes.string.isRequired
};

export default UserIcon
