import React from 'react'
import { Link } from 'react-router-dom'

function OrderBy() {
  return (
    <aside className="col-md-4 blog-sidebar">
      <div className="p-3">
        <h4 className="font-italic">Order by</h4>
        <ol className="list-unstyled">
          <li><Link to="/">Vote Score</Link></li>
          <li><Link to="/">Created at</Link></li>
        </ol>
      </div>
    </aside>
  );
}

export default OrderBy
