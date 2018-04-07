import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, UncontrolledTooltip } from 'reactstrap';
import { Link } from 'react-router-dom';
import Edit from 'react-icons/lib/fa/pencil';
import Trash from 'react-icons/lib/fa/trash';

function EditAndDelete({ id, onDelete }) {
  return (
    <ButtonGroup>
      <Button
        id={'edit-' + id}
        color="warning"
        tag={Link}
        to={`/posts/${id}/edit`}
      >
        <Edit size={15} />
      </Button>
      <UncontrolledTooltip
        placement="top"
        target={'edit-' + id}
      >
        Edit
      </UncontrolledTooltip>
      <Button
        id={'delete-' + id}
        color="danger"
        onClick={() => onDelete(id)}
      >
        <Trash size={15} />
      </Button>
      <UncontrolledTooltip
        placement="top"
        target={'delete-' + id}
      >
        Delete
      </UncontrolledTooltip>
    </ButtonGroup>
  );
}

EditAndDelete.propTypes = {
  id: PropTypes.string,
  onDelete: PropTypes.func.isRequired
};

export default EditAndDelete
