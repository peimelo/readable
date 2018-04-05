import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'reactstrap';
import DownVote from 'react-icons/lib/fa/thumbs-down';
import UpVote from 'react-icons/lib/fa/thumbs-up';

function UpDownVote({ onVote }) {
  return (
    <ButtonGroup>
      <Button onClick={() => onVote('upVote')}>
        <UpVote size={15} />
      </Button>
      <Button onClick={() => onVote('downVote')}>
        <DownVote size={15} />
      </Button>
    </ButtonGroup>
  );
}

UpDownVote.propTypes = {
  onVote: PropTypes.func.isRequired
};

export default UpDownVote
