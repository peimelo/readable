import React, { Component } from 'react';
import Moment from 'react-moment';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter, Link } from 'react-router-dom'
import * as CategoriesActions from '../actions/categories'
import * as CounterActions from '../actions'
import Categories from '../components/Categories';
import Header from '../components/Header'
import * as BlogAPI from '../utils/BlogAPI'
import '../blog.css'

class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    BlogAPI.getPosts().then((posts) => {
      console.log(posts)
      this.setState({ posts })
    })

    this.props.categoriesActions.fetchCategories()
  }

  render() {
    const { categories } = this.props
    return (
      <BrowserRouter>
        <div>
          <div className="container">
            <Header title="Readable"/>
            <Categories categories={categories} />
          </div>

          <main role="main" className="container">
            <div className="row">
              <div className="col-md-8 blog-main">

                {this.state.posts.map((post) => (
                  <div key={post.id} className="blog-post">
                    <Link to={post.id}>
                      <h2 className="blog-post-title">{post.title}</h2>
                    </Link>
                    <p className="blog-post-meta">
                      <Moment format="DD/MM/YYYY">
                        {post.timestamp}
                      </Moment> by {post.author}
                    </p>

                    <p>{post.body}</p>
                  </div>
                ))}

              </div>

              <aside className="col-md-4 blog-sidebar">

                <div className="p-3">
                  <h4 className="font-italic">Order by</h4>
                  <ol className="list-unstyled">
                    <li><a href="#">Vote Score</a></li>
                    <li><a href="#">Created at</a></li>
                  </ol>
                </div>
              </aside>

            </div>

          </main>

          <footer className="blog-footer">
            <p>Blog template built for <a
              href="https://getbootstrap.com/">Bootstrap</a> by <a
              href="https://twitter.com/mdo">@mdo</a>.</p>
            <p>
              <a href="#">Back to top</a>
            </p>
          </footer>

          {/*<Counter*/}
          {/*value={this.props.counter}*/}
          {/*onIncrement={() => this.props.actions.increment()}*/}
          {/*onDecrement={() => this.props.actions.decrement()}*/}
          {/*/>*/}

        </div>
      </BrowserRouter>
    );
  }
}

// App.propTypes = {
//   todos: PropTypes.array.isRequired,
//   actions: PropTypes.object.isRequired
// }

const mapStateToProps = state => ({
  counter: state.counter,
  categories: state.categories
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(CounterActions, dispatch),
  categoriesActions: bindActionCreators(CategoriesActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
