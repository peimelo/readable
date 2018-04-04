import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchComments } from '../actions/comments';
import StarIcon from '../components/StarIcon';
import TimestampIcon from '../components/TimestampIcon';
import UserIcon from '../components/UserIcon';
import sortBy from 'sort-by';

class Comments extends Component {
  componentDidMount() {
    this.props.fetchComments(this.props.postId);
  }

  render() {
    const { comments } = this.props;
    comments.data.sort(sortBy('-voteScore'));

    return (
      <div className="container">
        <h3>Comments</h3>
          {comments.data.map((comment) => (
            <div key={comment.id}>
              {comment.body}
              <p className="blog-post-meta">
                <TimestampIcon timestamp={comment.timestamp} />
                <UserIcon author={comment.author} />
                <StarIcon voteScore={comment.voteScore} />
              </p>
              <hr />
            </div>
          ))}
      </div>
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
  fetchComments,
})(Comments)
