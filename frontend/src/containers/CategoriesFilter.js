import React, { Component } from 'react';
import { FaEraser } from 'react-icons/fa';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import { categorySelected, fetchCategories } from '../actions/categories';
import { fetchCategoryPosts } from '../actions/posts';


class CategoriesFilter extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  filter = (categoryName) => {
    this.props.categorySelected(categoryName);
    this.props.fetchCategoryPosts(categoryName);
  };

  render() {
    const { categories } = this.props;

    return (
      <Container className="p-3">
        <h4 className="font-italic">
          Filter by Category
          {categories.categorySelected && (
            <Link
              key="eraser"
              className="btn btn-link"
              to="/"
            >
              <FaEraser size={15} />
            </Link>
          )}
        </h4>
        <ol className="list-unstyled">
          <li>
            {categories.data.map((category) => (
              <Link
                key={category.name}
                className={categories.categorySelected === category.name ?
                  'btn btn-secondary' :
                  'btn btn-link'}
                to={`/${category.path}`}
                onClick={() => this.filter(category.name)}
              >
                {category.name}
              </Link>
            ))}
          </li>
        </ol>
      </Container>
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
