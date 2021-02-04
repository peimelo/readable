import PropTypes from 'prop-types';
import React from 'react';
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa';
import { Button, ButtonGroup, UncontrolledTooltip } from 'reactstrap';

function UpDownVote({ id, onVote }) {
  return (
    <ButtonGroup>
      <Button
        id={'upVote-' + id}
        onClick={() => onVote('upVote')}
      >
        <FaThumbsUp size={15} />
      </Button>
      <UncontrolledTooltip
        placement="top"
        target={'upVote-' + id}
      >
        Vote Up
      </UncontrolledTooltip>
      <Button
        id={'downVote-' + id}
        onClick={() => onVote('downVote')}
      >
        <FaThumbsDown size={15} />
      </Button>
      <UncontrolledTooltip
        placement="top"
        target={'downVote-' + id}
      >
        Vote Down
      </UncontrolledTooltip>
    </ButtonGroup>
  );
}

UpDownVote.propTypes = {
  id: PropTypes.string,
  onVote: PropTypes.func.isRequired
};

export default UpDownVote
