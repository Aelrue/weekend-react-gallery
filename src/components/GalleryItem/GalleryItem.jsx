import react, { useState } from "react";
import axios from "axios";

function GalleryItem({ photo, fetchGallery, handleClick }) {
  console.log("hello", photo);
  handleClick(photo);

  const isClicked = false;
  if (isClicked) {
    return <div>{photo.description}</div>;
  }
  return (
    <div>
      <img src={photo.path} />
    </div>
  );
}

export default GalleryItem;
