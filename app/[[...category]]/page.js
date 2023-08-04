import React from "react";
import HomeContainer from "@/containers/home";
import Movies from '@/mocks/movies.json'

const getSingleCategory = async (genreId) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMmUwZTViNTBhYWZmYjgwOWU4NjA5MzFjODIzMGI1NyIsInN1YiI6IjY0Y2QwMWJlNzY0Yjk5MDBhZTEyOGUzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KJUpqKpNAucLN8I5buD3OyIUXzxlDpcrKNJt9T8aJI8'
        }
    };
    try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genreId}`, options);
        const data = await response.json();
        const category = data.results; // 'results' özelliğini direkt olarak category olarak alıyoruz
        return category;
    } catch (error) {
        console.error('getSingleCategory error:', error);
        throw error; // Hata durumunda hatayı tekrar fırlatıyoruz.
    }
};

const getCategories = async () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMmUwZTViNTBhYWZmYjgwOWU4NjA5MzFjODIzMGI1NyIsInN1YiI6IjY0Y2QwMWJlNzY0Yjk5MDBhZTEyOGUzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KJUpqKpNAucLN8I5buD3OyIUXzxlDpcrKNJt9T8aJI8'
        }
    };
    try {
        const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options);
        const data = await response.json();
        const categories = data.genres; // 'results' özelliğini direkt olarak categories olarak alıyoruz
        return categories;
    } catch (error) {
        console.error('getCategories error:', error);
        throw error; // Hata durumunda hatayı tekrar fırlatıyoruz.
    }
};

const getTopRatedMovies = async () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMmUwZTViNTBhYWZmYjgwOWU4NjA5MzFjODIzMGI1NyIsInN1YiI6IjY0Y2QwMWJlNzY0Yjk5MDBhZTEyOGUzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KJUpqKpNAucLN8I5buD3OyIUXzxlDpcrKNJt9T8aJI8'
        }
    };
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
        const data = await response.json();
        const topRatedMovies = data.results; // 'results' özelliğini direkt olarak topRatedMovies olarak alıyoruz
        return topRatedMovies;
    } catch (error) {
        console.error('getTopRatedMovies error:', error);
        throw error; // Hata durumunda hatayı tekrar fırlatıyoruz.
    }
};

const getPopularMovies = async () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMmUwZTViNTBhYWZmYjgwOWU4NjA5MzFjODIzMGI1NyIsInN1YiI6IjY0Y2QwMWJlNzY0Yjk5MDBhZTEyOGUzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KJUpqKpNAucLN8I5buD3OyIUXzxlDpcrKNJt9T8aJI8'
        }
    };
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
        const data = await response.json();
        const popularMovies = data.results; // 'results' özelliğini direkt olarak popularMovies olarak alıyoruz
        return popularMovies;
    } catch (error) {
        console.error('getPopularMovies error:', error);
        throw error; // Hata durumunda hatayı tekrar fırlatıyoruz.
    }
};

async function Home({ params }) {
    let selectedCategory;

    const categoriesPromise = getCategories();
    const topRatedPromise = getTopRatedMovies();
    const popularPromise = getPopularMovies();

    const [topRatedMovies, popularMovies, categories] = await Promise.all([topRatedPromise, popularPromise, categoriesPromise])

    if (params.category?.length > 0) {
        const results = await getSingleCategory(params.category[0]);
        selectedCategory = results;
    }

    return (
        <HomeContainer
            categories={categories}
            popularMovies={popularMovies}
            topRatedMovies={topRatedMovies}
            selectedCategory={{
                id: params.category?.[0] ?? '',
                movies: selectedCategory ? selectedCategory.slice(0, 5) : [],
            }} />
    )
}

export default Home;