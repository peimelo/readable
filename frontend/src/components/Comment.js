import React from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Row } from 'reactstrap';

import StarIcon from './StarIcon';
import TimestampIcon from './TimestampIcon';
import UserIcon from './UserIcon';
import UpDownVote from './UpDownVote';
import EditAndDelete from './EditAndDelete';

function Comment({ comment, onDelete, onVote }) {
  return (
    <Container>
      <Row className="blog-post-meta">
        <Col xs={6} md={'auto'}>
          <TimestampIcon timestamp={comment.timestamp} />
        </Col>
        <Col xs={6} md={'auto'}>
          <UserIcon author={comment.author} />
        </Col>
        <Col xs={3} md={'auto'}>
          <StarIcon voteScore={comment.voteScore} />
        </Col>
        <Col xs={4} md={'auto'}>
          <UpDownVote
            id={comment.id}
            onVote={(vote) => onVote(comment.id, vote)}
          >
          </UpDownVote>
        </Col>
        <Col xs={5} md={'auto'}>
          <EditAndDelete
            id={comment.id}
            onDelete={(id) => onDelete(id)}
          >
          </EditAndDelete>
        </Col>
      </Row>
      <Row>
        <Col>{comment.body}</Col>
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
