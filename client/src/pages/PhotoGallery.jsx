/* import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "./PhotoGallery.css";

import img1 from "../assets/gallery/gallery1.jpg";
import img2 from "../assets/gallery/gallery2.jpg";
import img3 from "../assets/gallery/gallery3.jpg";
import img4 from "../assets/gallery/gallery4.jpg";
import img5 from "../assets/gallery/gallery5.jpg";
import img6 from "../assets/gallery/gallery6.jpg";
import img7 from "../assets/gallery/gallery7.jpg";
import img8 from "../assets/gallery/gallery8.jpg";
import img9 from "../assets/gallery/gallery9.jpg";
import img10 from "../assets/gallery/gallery10.jpg";
import img11 from "../assets/gallery/gallery11.jpg";

const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
];

function PhotoGallery() {
    return (
        <div className="gallery-page container py-5">
            <h2 className="gallery-title text-center mb-4">
                Photo Gallery
            </h2>

            <PhotoProvider>
                <div className="gallery-grid">
                    {images.map((image, index) => (
                        <PhotoView key={index} src={image}>
                            <img
                                src={image}
                                alt={`Gallery ${index + 1}`}
                                className="gallery-image"
                            />
                        </PhotoView>
                    ))}
                </div>
            </PhotoProvider>
        </div>
    );
}

export default PhotoGallery;  
 
/* import React from "react";

function PhotoGallery() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Photo Gallery</h1>
      <p>Gallery page is working.</p>
    </div>
  );
}

export default PhotoGallery; */ 

import React, { useState } from "react";
import "./PhotoGallery.css";

import img1 from "../assets/gallery/gallery1.jpg";
import img2 from "../assets/gallery/gallery2.jpg";
import img3 from "../assets/gallery/gallery3.jpg";
import img4 from "../assets/gallery/gallery4.jpg";
import img5 from "../assets/gallery/gallery5.jpg";
import img6 from "../assets/gallery/gallery6.jpg";
import img7 from "../assets/gallery/gallery7.jpg";
import img8 from "../assets/gallery/gallery8.jpg";
import img9 from "../assets/gallery/gallery9.jpg";
import img10 from "../assets/gallery/gallery10.jpg";
import img11 from "../assets/gallery/gallery11.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
];

function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const previousImage = () => {
    setSelectedImage((selectedImage + images.length - 1) % images.length);
  };

  const nextImage = () => {
    setSelectedImage((selectedImage + 1) % images.length);
  };

  return (
    <div className="gallery-container">

      <div className="gallery-header">
        <h2>Photo Gallery</h2>
        <p>Government Ayurved College & Hospital, Kagal</p>
      </div>

      <div className="gallery-grid">

        {images.map((image, index) => (
          <div
            className="gallery-card"
            key={index}
            onClick={() => setSelectedImage(index)}
          >
            <img src={image} alt={`Gallery ${index + 1}`} />
          </div>
        ))}

      </div>

      {selectedImage !== null && (

        <div className="lightbox">

          <button
            className="close-btn"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>

          <button
            className="nav-btn left"
            onClick={previousImage}
          >
            ❮
          </button>

          <img
            src={images[selectedImage]}
            className="lightbox-image"
            alt=""
          />

          <button
            className="nav-btn right"
            onClick={nextImage}
          >
            ❯
          </button>

        </div>

      )}

    </div>
  );
}

export default PhotoGallery;