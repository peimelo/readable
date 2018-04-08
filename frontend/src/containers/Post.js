import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Comments from 'react-icons/lib/fa/comments';
import Tag from 'react-icons/lib/fa/tag';
import { Col, Container, Row } from 'reactstrap';
import { connect } from 'react-redux';

import StarIcon from '../components/StarIcon';
import TimestampIcon from '../components/TimestampIcon';
import UserIcon from '../components/UserIcon';
import UpDownVote from '../components/UpDownVote';
import EditAndDelete from '../components/EditAndDelete';
import { deletePost, votePost } from '../actions/posts';

class Post extends Component {
  deletePost = (id) => {
    this.props.deletePost(id)
      .then(() => this.props.history.push('/'));
  };

  votePost = (id, vote) => {
    this.props.votePost(id, vote);
  };

  render() {
    const { post } = this.props;

    return (
      <Container className="blog-post">
        <Row>
          <Col>
            <h2>
              <Link to={`/${post.category}/${post.id}`}>
                {`${post.title} `}
              </Link>
              <EditAndDelete
                category={post.category}
                postId={post.id}
                onDelete={(id) => this.deletePost(id)}
              />
            </h2>
          </Col>
        </Row>
        <Row className="blog-post-meta">
          <Col xs={'auto'}>
            <TimestampIcon timestamp={post.timestamp} />
          </Col>
          <Col xs={'auto'}>
            <UserIcon author={post.author} />
          </Col>
          <Col xs={'auto'}>
            <Comments size={15} /> {post.commentCount}
          </Col>
          <Col xs={'auto'}>
            <Tag size={15} /> {post.category}
          </Col>
          <Col xs={'auto'}>
            <StarIcon voteScore={post.voteScore} />
          </Col>
          <Col xs={'auto'}>
            <UpDownVote onVote={(vote) => this.votePost(post.id, vote)} />
          </Col>
        </Row>
        <Row>
          <Col>{post.body}</Col>
        </Row>
      </Container>
    );
  }
}

Post.propTypes = {
  isDetail: PropTypes.bool,
  post: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    voteScore: PropTypes.number,
    category: PropTypes.string,
    commentCount: PropTypes.number,
  }),
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  onDelete: PropTypes.func,
};

Post.defaultProps = {
  isDetail: false
};

export default connect(null, {
  deletePost,
  votePost
})(withRouter(Post))
