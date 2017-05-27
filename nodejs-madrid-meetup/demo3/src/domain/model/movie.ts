export interface Movie {
    id: string;
    title: string;
    releaseYear: number;
    releaseMonth: number;
    releaseDay: number;
    summary: string;
    directors: string[];
    actors: string[];
}
