import react, { useState } from "react";
import axios from "axios";

function GalleryItem({ photo, likeButton }) {
  // console.log("hello", photo);
  const [isClicked, setIsClicked] = useState(false);

  const togglePhoto = () => {
    // console.log("clicked", isClicked);
    setIsClicked(!isClicked);
  };

  //   const isClicked = useState(false);

  //   if (isClicked) {
  //     return <div>{photo.description}</div>;
  //   } else
  //     return (
  //       <div>
  //         <img src={photo.path} onClick={() => handleClick(photo)} />
  //       </div>
  //     );
  // }

  if (isClicked) {
    return <div onClick={() => togglePhoto()}>{photo.description}</div>;
  } else
    return (
      <div>
        <img src={photo.path} onClick={() => togglePhoto()} />
        <p>Likes: {photo.likes}</p>
        <button onClick={() => likeButton(photo.id)}>Like</button>
      </div>
    );
}

export default GalleryItem;
