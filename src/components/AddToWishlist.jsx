import React, { useContext } from "react";
import { FaRegHeart } from "react-icons/fa";
// import { WishlistContext } from '../context/WishlistContext';

const AddToWishlist = ({ productId }) => {
  // const { wishlist, toggleWishlist } = useContext(WishlistContext);

  const handleClick = (
) => {
    toggleWishlist(productId);
  };

  return (
    <button className="border rounded-full bg-gray text-white flex items-center justify-center texte-center  p-2" onClick={handleClick}>
      {/* <FaHeart /> Ajouter à la wishlist ({wishlist.includes(productId) ? 'Ajouté' : 'Ajouter'}) */}
      <FaRegHeart className="size-5" />
    </button>
  );
};

export default AddToWishlist
