import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { categorySelected, fetchCategories } from '../actions/categories';
import { fetchCategoryPosts } from '../actions/posts';

class CategoriesFilter extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  filter = (category) => {
    this.props.categorySelected(category.name);
    this.props.fetchCategoryPosts(category.name);
  }

  render() {
    const { categories } = this.props;

    return (
      <div className="p-3">
        <h4 className="font-italic">Filter by Category</h4>
        <ol className="list-unstyled">
          <li>
          {categories.data.map((category) => (
            <Link
              key={category.name}
              className={categories.categorySelected === category.name ?
                'btn btn-secondary' :
                'btn btn-link'}
              to={`/categoriesFilter/${category.path}`}
              onClick={() => this.filter(category)}
            >
              {category.name}
            </Link>
          ))}
          </li>
        </ol>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

export default connect(mapStateToProps, {
  categorySelected,
  fetchCategories,
  fetchCategoryPosts
})(CategoriesFilter)