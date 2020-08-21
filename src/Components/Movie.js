import React from 'react'
import { Link } from 'react-router-dom';

function Movie({key, id}) {
  return (
    <div key={key}>
      <Link to={`/${id}`}>{id}</Link>
    </div>
  )
}

export default Movie
