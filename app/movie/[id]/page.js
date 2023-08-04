import React from 'react'
import { notFound } from 'next/navigation';

import MovieContainer from '@/containers/movie';
import Movies from '@/mocks/movies.json'

const getMovie = async (movieId) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMmUwZTViNTBhYWZmYjgwOWU4NjA5MzFjODIzMGI1NyIsInN1YiI6IjY0Y2QwMWJlNzY0Yjk5MDBhZTEyOGUzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KJUpqKpNAucLN8I5buD3OyIUXzxlDpcrKNJt9T8aJI8'
        }
    };
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en`, options);
        const data = await response.json();
        const movie = data;
        return movie;
    } catch (error) {
        console.error('getMovie error:', error);
        throw error; // Hata durumunda hatayı tekrar fırlatıyoruz.
    }
};

async function MoviePage({ params, searchParams }) {

    const movieDetail = await getMovie(params.id);

    if (!movieDetail) {
        notFound();
    };

    if (searchParams.error === "true") {
        throw new Error("Something went wrong!");
    };

    return (
        <MovieContainer movie={movieDetail} />
    )
}

export default MoviePage