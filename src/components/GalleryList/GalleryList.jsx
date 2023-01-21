import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryItems, fetchGallery }) {
  //   // put our photos on the DOM
  console.log("In GalleryList");
  return (
    <>
      <div>
        {galleryItems.map((photo) => {
          <GalleryItem
            key={photo.id}
            photo={photo}
            fetchGallery={fetchGallery}
          />;
        })}
      </div>
    </>
  );
}
export default GalleryList;
