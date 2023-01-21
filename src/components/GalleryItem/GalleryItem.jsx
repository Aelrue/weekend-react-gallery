import react, { useState } from "react";
import axios from "axios";

function GalleryItem({ photo, fetchGallery }) {
  console.log("hello", photo);

  return (
    <div>
      <img src={photo.path} />
    </div>
  );
}

export default GalleryItem;
