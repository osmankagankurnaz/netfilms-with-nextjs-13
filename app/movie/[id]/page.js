import React from 'react'
import { notFound } from 'next/navigation';

import MovieContainer from '@/containers/movie';
import { getMovie } from '@/services/movie';

async function MoviePage({ params }) {

    const movieDetail = await getMovie(params.id);

    if (!movieDetail) {
        notFound();
    };

    return (
        <MovieContainer movie={movieDetail} />
    )
}

export default MoviePage