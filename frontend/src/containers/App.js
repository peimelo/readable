import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import sortBy from 'sort-by'

import * as CategoriesActions from '../actions/categories'
import * as PostsActions from '../actions/posts'
import Categories from '../components/Categories'
import Header from '../components/Header'
import OrderBy from '../components/OrderBy'
import Posts from '../components/Posts'
import { VOTE_SCORE } from '../constants/orderBy'
import '../blog.css'


class App extends Component {
  state = { orderBy: VOTE_SCORE };

  componentDidMount() {
    this.props.categoriesActions.fetchCategories();
    this.props.postsActions.fetchPosts();
  }

  changeOrder = (orderBy) => {
    this.setState({orderBy});
    this.props.posts.sort(sortBy(this.state.orderBy));
  };

  render() {
    const { categories, posts } = this.props;

    posts.sort(sortBy(this.state.orderBy));

    return (
      <BrowserRouter>
        <div>
          <div className="container">
            <Header title="Readable"/>
            <Categories categories={categories} />
          </div>

          <main role="main" className="container">
            <div className="row">
              <Posts posts={posts}/>
              <OrderBy
                orderBy={this.state.orderBy}
                onChangeOrder={this.changeOrder}
              />
            </div>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  posts: state.posts,
});

const mapDispatchToProps = dispatch => ({
  categoriesActions: bindActionCreators(CategoriesActions, dispatch),
  postsActions: bindActionCreators(PostsActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
