import {Model} from "mongoose";

export type IBook = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  review: string[];
  image?: string;
};
export type IBookFilters = {
  searchTerm?: string;
  genre?: string;
  publicationDate?: string;
};
export type BookModel = Model<IBook, Record<string, unknown>>;
