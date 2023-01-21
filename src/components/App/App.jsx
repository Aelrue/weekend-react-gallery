import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import GalleryList from "../GalleryList/GalleryList";

function App() {
  const [galleryItems, setGalleryItems] = useState([]);
  console.log(galleryItems);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = () => {
    axios({
      method: "GET",
      url: "/gallery",
    })
      .then((response) => {
        console.log(response);
        setGalleryItems(response.data);
      })
      .catch(function (error) {
        console.log("error with get", error);
      });
  };

  const handleClick = (photo) => {
    console.log("it clicked", photo);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      {/* <p>Gallery goes here</p> */}

      <GalleryList
        fetchGallery={fetchGallery}
        galleryItems={galleryItems}
        handleClick={handleClick}
      />
      {/* <img src="images/kurt.jpg" /> */}
    </div>
  );
}

export default App;
