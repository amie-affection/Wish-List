import React from "react";
import WishListItem from "../wishListItem/WishListItem";
import DefaultWishPage from "../defaultWishPage/DefaultWishPage";

const WishList = ({ wishes, deleteWish }) => {
  return wishes.length !== 0 ? (
    wishes.map((wish) => (
      <WishListItem deleteWish={deleteWish} key={wish.id} {...wish} />
    ))
  ) : (
    <DefaultWishPage />
  );
};

export default WishList;
