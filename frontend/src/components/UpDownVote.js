import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, UncontrolledTooltip } from 'reactstrap';
import DownVote from 'react-icons/lib/fa/thumbs-down';
import UpVote from 'react-icons/lib/fa/thumbs-up';

function UpDownVote({ id, onVote }) {
  return (
    <ButtonGroup>
      <Button
        id={'upVote-' + id}
        onClick={() => onVote('upVote')}
      >
        <UpVote size={15} />
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
        <DownVote size={15} />
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
