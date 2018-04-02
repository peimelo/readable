import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCategories } from '../actions/categories';
import { fetchCategoryPosts } from '../actions/posts';

class Categories extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const { categories, fetchCategoryPosts } = this.props;

    return (
      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
          {categories.map((category) => (
            <Link
              key={category.name}
              className="p-2 text-muted"
              to={`/categoriesFilter/${category.path}`}
              onClick={() => fetchCategoryPosts(category.path)}
            >
              {category.name}
            </Link>
          ))}
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

export default connect(mapStateToProps, {
  fetchCategories,
  fetchCategoryPosts
})(Categories)