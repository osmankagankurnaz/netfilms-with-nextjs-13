import React from 'react'

import { FeaturedMovie } from "@/components/featured-movie";
import { Categories } from '@/components/categories';
import { MoviesSection } from '@/components/movies-section';

function HomeContainer({
    categories = [],
    popularMovies = [],
    topRatedMovies = [],
    selectedCategory

}) {
    return (
        <div>
            <FeaturedMovie
                movie={popularMovies[0]}
            />
            <Categories
                categories={categories.slice(1, 6)}
            />

            {
                selectedCategory.movies.length > 0 && (
                    <MoviesSection
                        title={categories.find(
                            (genre) => `${genre.id}` === selectedCategory.id)?.name
                        }
                        movies={selectedCategory.movies} />
                )
            }

            <MoviesSection
                title={'Popular Movies'}
                movies={popularMovies.slice(1, 6)}
            />

            <MoviesSection
                title={'Top Rated Movies'}
                movies={topRatedMovies.slice(0, 5)}
            />
        </div>
    )
}

export default HomeContainer