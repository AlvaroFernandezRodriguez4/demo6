import { useEffect, useState } from "react"
import { Movie } from "../config/entities/Movie";
import { FilmAdapter } from "../adapter/FilmAdapter";
import ResultMovie from "../config/entities/ResultMovie";

export const useMovies = () => {
    const [nowPlaying, setNowPlaying] = useState<ResultMovie | null>(null);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1); 

    const loadMovies = async () => {
        setLoading(true);
        const movies = await FilmAdapter.getMovies({ route: FilmAdapter.ROUTES.nowPlaying, page });

        if (movies != null) {
            const newMovies = movies.movies.filter((newMovie) => {
                return !nowPlaying?.movies.some((existingMovie) => existingMovie.id === newMovie.id);
            });

            setNowPlaying((prevState) => {
                if (prevState) {
                    return {
                        ...prevState,
                        movies: [...prevState.movies, ...newMovies],
                    };
                }
                return { ...movies, movies: newMovies };
            });
        }
        setLoading(false);
    }

    const loadMoreMovies = async () => {
        if (!loading && nowPlaying?.movies.length) {
            setPage(prevPage => prevPage + 1);  
        }
    }

    useEffect(() => {
        loadMovies();
    }, [page]); 

    return {
        nowPlaying,
        loading,
        loadMoreMovies
    }
}