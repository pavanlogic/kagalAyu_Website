import "./PageBanner.css";

function PageBanner({ title }) {
  return (
    <div className="page-banner">
      <div className="page-banner-overlay">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default PageBanner;