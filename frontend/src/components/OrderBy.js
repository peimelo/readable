import React from 'react';
import PropTypes from 'prop-types';

import { CREATED_AT, VOTE_SCORE } from '../constants/orderBy';

function OrderBy({ orderBy, onChangeOrder }) {
  const orders = [
    { name: 'Vote Score', value: VOTE_SCORE },
    { name: 'Created at', value: CREATED_AT },
  ];

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
              onClick={() => onChangeOrder(order.value)}
            >
              {order.name}
            </button>
          ))}
        </li>
      </ol>
    </div>
  );
}

OrderBy.propTypes = {
  orderBy: PropTypes.string.isRequired,
  onChangeOrder: PropTypes.func.isRequired,
};

export default OrderBy
