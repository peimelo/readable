import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FaComments, FaTag } from 'react-icons/fa';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { deletePost, votePost } from '../actions/posts';
import EditAndDelete from '../components/EditAndDelete';
import StarIcon from '../components/StarIcon';
import TimestampIcon from '../components/TimestampIcon';
import UpDownVote from '../components/UpDownVote';
import UserIcon from '../components/UserIcon';

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
            <FaComments size={15} /> {post.commentCount}
          </Col>
          <Col xs={'auto'}>
            <FaTag size={15} /> {post.category}
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
