import React from 'react';
import PropTypes from 'prop-types';
import User from 'react-icons/lib/fa/user';

function UserIcon({ author }) {
  return (
    <span>
      <User size={15} /> by {author}
    </span>
  );
}

UserIcon.propTypes = {
  author: PropTypes.string.isRequired
};

export default UserIcon
