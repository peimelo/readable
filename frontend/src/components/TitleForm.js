import React from 'react';
import PropTypes from 'prop-types';

function TitleForm({ isEditing, resource }) {
  return (
    <h1>
      {isEditing ? 'Editing ' : 'New '}{resource}
    </h1>
  );
}

TitleForm.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  resource: PropTypes.string.isRequired
};

export default TitleForm
