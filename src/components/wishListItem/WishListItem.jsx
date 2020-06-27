import React from "react";

const WishListItem = ({ wish, description, deleteWish, id }) => {
  return (
    <div>
      <h2>{wish}</h2>
      <p>{description}</p>
      <button onClick={() => deleteWish(id)}>delete</button>
    </div>
  );
};

export default WishListItem;
