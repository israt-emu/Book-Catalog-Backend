import express from "express";
import {createWishList, getAllWishList} from "./wishlist.controller";
const router = express.Router();
//
router.post("/", createWishList);
router.get("/", getAllWishList);
export const WishListRoutes = router;
