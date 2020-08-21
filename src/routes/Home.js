import React from 'react'
import { gql, useQuery } from '@apollo/client';
import Movie from '../Components/Movie';

const GET_MOVIES = gql `
  query {
    movies {
      id
      medium_cover_image
    }
  }
`;

function Home() {
  const {loading, error, data} = useQuery(GET_MOVIES);

  return (
    <div>
      {loading && "<Loading />"}
      {!loading && data.movies && data.movies.map( movie => <Movie key={movie.id} id={movie.id} /> )} 
    </div>
  )
}

export default Home