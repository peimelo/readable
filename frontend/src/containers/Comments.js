import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import sortBy from 'sort-by';
import { Button, ButtonGroup, Container, Row } from 'reactstrap';
import Edit from 'react-icons/lib/fa/pencil';
import New from 'react-icons/lib/fa/file';
import Trash from 'react-icons/lib/fa/trash';

import { fetchPostComments, voteComment } from '../actions/comments';
import StarIcon from '../components/StarIcon';
import TimestampIcon from '../components/TimestampIcon';
import UserIcon from '../components/UserIcon';
import UpDownVote from '../components/UpDownVote';


class Comments extends Component {
  componentDidMount() {
    this.props.fetchPostComments(this.props.postId);
  }

  voteComment = (id, vote) => {
    this.props.voteComment(id, vote);
  };

  render() {
    const { comments } = this.props;
    comments.data.sort(sortBy('-voteScore'));

    return (
      <Container>
        <h3>
          Comments&nbsp;
          <Button color="success"><New size={15}/></Button>
        </h3>
        <hr/>
        {comments.data.map((comment) => (
          <div key={comment.id}>
            <Row className="blog-post-meta">
              <TimestampIcon timestamp={comment.timestamp}/>
              <UserIcon author={comment.author}/>
              <StarIcon voteScore={comment.voteScore}/>
              <UpDownVote onVote={(vote) => this.voteComment(comment.id, vote)} />
              &nbsp;
              <ButtonGroup>
                <Button color="warning"><Edit size={15}/></Button>
                <Button color="danger"><Trash size={15}/></Button>
              </ButtonGroup>
            </Row>
            {comment.body}
            <hr/>
          </div>
        ))}
      </Container>
    );
  }
}

Comments.propTypes = {
  postId: PropTypes.string
};

const mapStateToProps = (state) => ({
  comments: state.comments
});

export default connect(mapStateToProps, {
  fetchPostComments,
  voteComment
})(Comments)
