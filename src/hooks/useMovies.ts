import { useEffect, useState } from "react"
import { Movie } from "../config/entities/Movie";
import { FilmAdapter } from "../adapter/FilmAdapter";
import ResultMovie from "../config/entities/ResultMovie";

export const useMovies = () => {
    const [nowPlaying, setNowPlaying] = useState<ResultMovie | null>(null);
    const [loading, setLoading] = useState(false);
  
    const loadMovies = async () => {
      if (loading) return; 
      setLoading(true);
      const nextPage = nowPlaying?.page ? nowPlaying.page + 1 : 1;
      const movies = await FilmAdapter.getMovies({ route: FilmAdapter.ROUTES.nowPlaying, page: nextPage });
      if (movies) {
        setNowPlaying((prev) => ({
          ...movies,
          movies: [...(prev?.movies || []), ...movies.movies], 
        }));
      }
      setLoading(false);
    };
  
    useEffect(() => {
      loadMovies();
    }, []);
  
    return {
      nowPlaying,
      loading,
      loadMoreMovies: loadMovies, 
    };
  };