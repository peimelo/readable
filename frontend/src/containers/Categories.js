import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import { Container } from 'reactstrap';

import { fetchCategories } from '../actions/categories';

class Categories extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <Container>
        <h1>Categories</h1>

        <Table bordered striped hover>
          <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Path</th>
          </tr>
          </thead>
          <tbody>
          {this.props.categories.data.map((category) =>
            <tr key={category.name}>
              <td>{category.name}</td>
              <td>{category.path}</td>
            </tr>
          )}
          </tbody>
        </Table>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

export default connect(mapStateToProps, {
  fetchCategories,
})(Categories)
