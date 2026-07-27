import React from "react";
// import DepartmentGallery from "./DepartmentGallery";

function DepartmentGallery({ images = [] }) {
  if (!images.length) return null;

  return (
    <div className="department-card">
      <h2>Department Gallery</h2>
      <div className="department-line-small"></div>

      <div className="row">
        {images.map((img, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
            <div className="gallery-card">
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="img-fluid gallery-image"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DepartmentGallery;