const API_BASE_URL = "https://api.themoviedb.org/3";
const API_BASE_MOVIE_URL = "https://api.themoviedb.org/3/movie/";
const API_KEY = "api_key=e0fd71620ae0c51ca4c19ac46a3ec001";
const LANGUAGE = "&language=pt-BR";
const ORIGINAL_LANGUAGE = "&with_original_language=en";

export const URL_IMAGE = "https://image.tmdb.org/t/p/original";


// export const getListOfMovies = async (year: string) => {
//     const discoverMovie = "/discover/movie?";
//     const primaryReleaseDateGte = `&primary_release_date.gte=${year}-01-01&`;
//     const primaryReleaseDateLte = `&primary_release_date.lte=${year}-12-31&`;
//     const response = await fetch(`
//         ${API_BASE_URL}${discoverMovie}${API_KEY}${primaryReleaseDateGte}
//         ${primaryReleaseDateLte}${LANGUAGE}`);

//     const data = await response.json();
//     return data.results;
// };

export const getMovieById = async (movieId: string | undefined) => {
    const response = await fetch(`${API_BASE_MOVIE_URL}${movieId}?${API_KEY}${LANGUAGE}`);
    const data = await response.json();
    return data;
};

export const getTrailerMovieById = async (movieId: string | undefined) => {
    const response = await fetch(`${API_BASE_MOVIE_URL}${movieId}/videos?${API_KEY}${LANGUAGE}`);
    const data = await response.json();

    return data.results;
};

export const getAllMoviesByGenreId = async (genreId: number | string | undefined, year: string | undefined, page?: number) => {
    const discoverMovie = "/discover/movie?";
    const withGenres = `&with_genres=${genreId}&`;
    const primaryReleaseDateGte = `&primary_release_date.gte=${year}-01-01&`;
    const primaryReleaseDateLte = `&primary_release_date.lte=${year}-12-31&`;
    const pageOption = page || 1;
    const pageNumber = `&page=${pageOption}`;

    const response = await fetch(`
        ${API_BASE_URL}${discoverMovie}${API_KEY}${withGenres}
        ${LANGUAGE}${primaryReleaseDateGte}${primaryReleaseDateLte}${pageNumber}
        ${ORIGINAL_LANGUAGE}`);

    const data = await response.json();
    return data;
};

export const getWhereWatchById = async (id: number | string | undefined ) => {
    const watchProviders = "/watch/providers?";
    const response = await fetch(`${API_BASE_MOVIE_URL}${id}${watchProviders}${API_KEY}`);

    const data = await response.json();
    
    return data.results.BR;
};