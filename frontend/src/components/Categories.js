import React from 'react'
import { Link } from 'react-router-dom'

function Categories({ categories }) {
  return (
    <div className="nav-scroller py-1 mb-2">
      <nav className="nav d-flex justify-content-between">
        {categories.map((categorie) => (
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
  );
}

export default Categories
