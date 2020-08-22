import React from 'react'
import { Link } from 'react-router-dom';
import { isLikedVar } from './Apollo';

function Movie({ id, isLiked }) {

  function onClick(){
    console.log(id)
  }

  return (
    <div>
      <Link to={`/${id}`}>{id}</Link>
      <button onClick={onClick} >{isLiked? 'Like':'Unlike'}</button>
    </div>
  )
}

export default Movie;