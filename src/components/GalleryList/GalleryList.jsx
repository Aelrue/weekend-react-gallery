import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryItems, fetchGallery }) {
  //   // put our photos on the DOM
  console.log("In GalleryList", galleryItems);
  return (
    <div>
      {galleryItems.map((photo) => {
        return (
          <GalleryItem
            fetchGallery={fetchGallery}
            key={photo.id}
            photo={photo}
          />
        );
      })}
    </div>
  );
}
export default GalleryList;
