import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, UncontrolledTooltip } from 'reactstrap';
import { Link } from 'react-router-dom';
import Edit from 'react-icons/lib/fa/pencil';
import Trash from 'react-icons/lib/fa/trash';

class EditAndDelete extends Component {
  getId() {
    const { commentId, postId } = this.props;
    return commentId ? commentId : postId;
  }

  render() {
    const { commentId, postId, onDelete } = this.props;

    return (
      <ButtonGroup>
        <Button
          id={'edit-' + this.getId()}
          color="warning"
          tag={Link}
          to={commentId ?
            `/posts/${postId}/comments/${commentId}/edit` :
            `/posts/${postId}/edit`
          }
        >
          <Edit size={15} />
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
          <Trash size={15} />
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
  postId: PropTypes.string.isRequired,
  commentId: PropTypes.string,
  onDelete: PropTypes.func.isRequired
};

export default EditAndDelete
