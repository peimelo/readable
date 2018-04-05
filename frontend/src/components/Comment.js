import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, Container, Row } from 'reactstrap';
import Edit from 'react-icons/lib/fa/pencil';
import Trash from 'react-icons/lib/fa/trash';

import StarIcon from './StarIcon';
import TimestampIcon from './TimestampIcon';
import UserIcon from './UserIcon';
import UpDownVote from './UpDownVote';

function Comment({ comment, onDelete, onVote }) {
  return (
    <Container>
      <Row className="blog-post-meta">
        <TimestampIcon timestamp={comment.timestamp} />
        <UserIcon author={comment.author} />
        <StarIcon voteScore={comment.voteScore} />
        <UpDownVote
          id={comment.id}
          onVote={(vote) => onVote(comment.id, vote)}
        >
        </UpDownVote>
        &nbsp;
        <ButtonGroup>
          <Button color="warning"><Edit size={15} /></Button>
          <Button
            color="danger"
            onClick={() => onDelete(comment.id)}
          >
            <Trash size={15} />
          </Button>
        </ButtonGroup>
      </Row>
      <Row>
        {comment.body}
      </Row>
      <hr />
    </Container>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.string,
    timestamp: PropTypes.number,
    author: PropTypes.string,
    voteScore: PropTypes.number,
    body: PropTypes.string,
  }),
  onDelete: PropTypes.func,
  onVote: PropTypes.func,
};

export default Comment
