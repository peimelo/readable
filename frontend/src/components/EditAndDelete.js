import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, UncontrolledTooltip } from 'reactstrap';

class EditAndDelete extends Component {
  getId() {
    const { commentId, postId } = this.props;
    return commentId ? commentId : postId;
  }

  render() {
    const { category, commentId, postId, onDelete } = this.props;

    return (
      <ButtonGroup>
        <Button
          id={'edit-' + this.getId()}
          color="warning"
          tag={Link}
          to={commentId ?
            `/${category}/${postId}/comments/${commentId}/edit` :
            `/${category}/${postId}/edit`
          }
        >
          <FaPencilAlt size={15} />
        </Button>
        <UncontrolledTooltip
          placement="top"
          target={'edit-' + this.getId()}
        >
          Edit
        </UncontrolledTooltip>
        <Button
          id={'delete-' + this.getId()}
          color="danger"
          onClick={() => onDelete(this.getId())}
        >
          <FaTrash size={15} />
        </Button>
        <UncontrolledTooltip
          placement="top"
          target={'delete-' + this.getId()}
        >
          Delete
        </UncontrolledTooltip>
      </ButtonGroup>
    );
  }
}

EditAndDelete.propTypes = {
  category: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired,
  commentId: PropTypes.string,
  onDelete: PropTypes.func.isRequired
};

export default EditAndDelete
