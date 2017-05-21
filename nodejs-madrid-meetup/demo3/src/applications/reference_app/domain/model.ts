import { Document } from "mongoose";

export interface Movie extends Document {
    title: string;
    releaseYear: number;
    releaseMonth: number;
    releaseDay: number;
    summary: string;
}

export interface Actor extends Document {
    name: string;
}

export interface Director extends Document {
    name: string;
}
