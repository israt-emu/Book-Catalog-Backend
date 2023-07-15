import {Model, Types} from "mongoose";
import {IUser} from "../user/user.interface";
export type Review = {
  id: Types.ObjectId | IUser;
  review: string;
};
export type IBook = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews: Review[];
  image?: string;
};
export type IBookFilters = {
  searchTerm?: string;
  genre?: string;
  publicationDate?: string;
};
export type BookModel = Model<IBook, Record<string, unknown>>;
