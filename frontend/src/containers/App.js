import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter, Link } from 'react-router-dom'
import * as CounterActions from '../actions'
import Header from '../components/Header'
import '../blog.css'
import * as BlogAPI from '../utils/BlogAPI'
import Moment from 'react-moment';

// import Counter from '../components/Counter';

class App extends Component {
  state = {
    categories: [],
    posts: [],
  };

  componentDidMount() {
    BlogAPI.getCategories().then((categories) => {
      console.log(categories)
      this.setState({ categories })
    })
    BlogAPI.getPosts().then((posts) => {
      console.log(posts)
      this.setState({ posts })
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="container">
            <Header title="Readable"/>

            <div className="nav-scroller py-1 mb-2">
              <nav className="nav d-flex justify-content-between">
                {this.state.categories.map((categorie) => (
                  <Link
                    key={categorie.name}
                    className="p-2 text-muted"
                    to={categorie.path}
                  >
                    {categorie.name}
                  </Link>
                ))}
              </nav>
            </div>

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
  counter: state.counter
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(CounterActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
