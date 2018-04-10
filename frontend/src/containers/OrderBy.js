import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CREATED_AT, VOTE_SCORE } from '../constants/orderBy';
import { postsOrderBy } from '../actions/posts';

class OrderBy extends Component {
  changeOrder = (orderBy) => {
    this.props.postsOrderBy(orderBy);
  };

  render() {
    const orders = [
      { name: 'Vote Score', value: VOTE_SCORE },
      { name: 'Created at', value: CREATED_AT },
    ];
    const { orderBy } = this.props;

    return (
      <div className="p-3">
        <h4 className="font-italic">Order by</h4>
        <ol className="list-unstyled">
          <li>
            {orders.map((order) => (
              <button
                key={order.value}
                className={orderBy === order.value ?
                  'btn btn-secondary' :
                  'btn btn-link'}
                type="button"
                onClick={() => this.changeOrder(order.value)}
              >
                {order.name}
              </button>
            ))}
          </li>
        </ol>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orderBy: state.posts.orderBy,
});

export default connect(mapStateToProps, {
  postsOrderBy
})(OrderBy)