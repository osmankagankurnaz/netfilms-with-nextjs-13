export const getSingleCategory = async (genreId) => {
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
        throw Error(error); // Hata durumunda hatayı tekrar fırlatıyoruz.
    }
};

export const getCategories = async () => {
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
        throw Error(error); // Hata durumunda hatayı tekrar fırlatıyoruz.
    }
};

export const getTopRatedMovies = async () => {
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
        throw Error(error); // Hata durumunda hatayı tekrar fırlatıyoruz.
    }
};

export const getPopularMovies = async () => {
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
        throw Error(error); // Hata durumunda hatayı tekrar fırlatıyoruz.
    }
};

export const getMovie = async (movieId) => {
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
        throw Error(error); // Hata durumunda hatayı tekrar fırlatıyoruz.
    }
};