import axios from "axios";

export interface FilmInfoData {
    adult: boolean,
    backdrop_path: string,
    genre_ids: any,
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export interface FilmInfosData {
    page: number;
    results: FilmInfoData[]
    total_pages: number;
    total_results: number;
}

export interface GenreData {
    id: number,
    name: string
}

export interface GenreListData {
    genres: GenreData[]
}

export default class FilmInfos {
    constructor() { }

    async getFilmByGenre(genre: number): Promise<FilmInfosData> {
        const res = await axios.get<FilmInfosData>(
            "https://api.themoviedb.org/3/discover/movie?api_key=73268820761df1e7f34f0e56ed8d0121&language=fr&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=flatrate&with_genres=" + genre
        )
        
        return res.data
    }

    async getGenreList(): Promise<GenreListData> {
        const res = await axios.get<GenreListData>(
            "https://api.themoviedb.org/3/genre/movie/list?api_key=73268820761df1e7f34f0e56ed8d0121&language=fr"
        )

        return res.data
    }
}