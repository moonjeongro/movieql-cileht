import React from 'react'
import { gql, useQuery } from '@apollo/client';

const GET_MOVIE = gql `
  query  {
    movie(id: $id) {
      id
      medium_cover_image
    }
  }
`;


function Detail(props) {

  const {loading, error, data} = useQuery(GET_MOVIE, {
    variables: { id },
  });

  return (
    <div>
      
    </div>
  )
}



export default Detail
