import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import * as CategoriesActions from '../actions/categories'
import * as PostsActions from '../actions/posts'
import Categories from '../components/Categories';
import Header from '../components/Header'
import OrderBy from '../components/OrderBy';
import Posts from '../components/Posts';
import '../blog.css'

class App extends Component {
  componentDidMount() {
    this.props.categoriesActions.fetchCategories()
    this.props.postsActions.fetchPosts()
  }

  render() {
    const { categories, posts } = this.props
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
              <OrderBy />
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
})

const mapDispatchToProps = dispatch => ({
  categoriesActions: bindActionCreators(CategoriesActions, dispatch),
  postsActions: bindActionCreators(PostsActions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
