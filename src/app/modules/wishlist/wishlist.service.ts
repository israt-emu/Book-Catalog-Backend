import httpStatus from "http-status";
import {ApiError} from "../../../handleErrors/ApiError";
import {IWishList} from "./wishlist.interface";
import {WishList} from "./wishlist.model";

//add wishlist
export const addWishListService = async (payload: IWishList) => {
  const newWishList = await WishList.create(payload);
  if (!newWishList) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create cow!");
  }
  return newWishList;
};
//get all lists
export const getAllWishListService = async (): Promise<IWishList[]> => {
  const lists = await WishList.find({}).populate("user").populate("book");
  return lists;
};
