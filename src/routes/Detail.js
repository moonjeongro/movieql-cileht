import React from 'react'
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const GET_MOVIE = gql `
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      description_intro
      medium_cover_image
    }
  }
`;


function Detail() {
  const { id } = useParams();
  const id_ = parseInt(id);

  const {loading, error, data} = useQuery(GET_MOVIE, {
    variables: { id: id_ },
  });

  return (
    <div>
        <h1>{data?.movie?.title}</h1>
        <h3>{data?.movie?.description_intro}</h3>
        <img src={data?.movie?.medium_cover_image} alt="" />
    </div>
  )
}

export default Detail
