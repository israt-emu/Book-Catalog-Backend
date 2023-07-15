import {Schema, model} from "mongoose";
import {BookModel, IBook} from "./book.interface";

const BookSchema = new Schema<IBook, BookModel>(
  {
    title: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    publicationDate: {
      type: String,
      required: true,
    },
    review: [
      {
        type: String,
      },
    ],
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);
//create model
export const Book = model<IBook, BookModel>("Book", BookSchema);
