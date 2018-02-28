import React from 'react'
import { Link } from 'react-router-dom'

function Header({ title }) {
  return (
    <header className="blog-header py-3">
      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col-4 pt-1">
        </div>
        <div className="col-4 text-center">
          <Link className="blog-header-logo text-dark" to="/">{title}</Link>
        </div>
        <div className="col-4 d-flex justify-content-end align-items-center">
        </div>
      </div>
    </header>
  );
}

export default Header
