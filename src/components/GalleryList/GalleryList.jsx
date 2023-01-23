import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryItems, fetchGallery, likeButton }) {
  //   // put our photos on the DOM
  // console.log("In GalleryList", galleryItems);
  return (
    <div>
      {galleryItems.map((photo) => {
        return (
          <GalleryItem
            fetchGallery={fetchGallery}
            key={photo.id}
            photo={photo}
            likeButton={likeButton}
          />
        );
      })}
    </div>
  );
}
export default GalleryList;
