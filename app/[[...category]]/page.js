import React from "react";
import HomeContainer from "@/containers/home";
import { getSingleCategory, getCategories, getTopRatedMovies, getPopularMovies } from "@/services/movie";

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