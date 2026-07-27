/* import "./PageBanner.css";

function PageBanner({ title }) {
  return (
    <div className="page-banner">
      <div className="page-banner-overlay">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default PageBanner; */

import "./PageBanner.css";

function PageBanner({
  title,
  backgroundImage,
}) {
  return (
    <section
      className="page-banner"
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : {}
      }
    >
      <div className="page-banner-overlay">
        <h1>{title}</h1>
      </div>
    </section>
  );
}

export default PageBanner;