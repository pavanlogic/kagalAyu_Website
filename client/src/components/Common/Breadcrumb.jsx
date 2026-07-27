import { Link } from "react-router-dom";
import "./Breadcrumb.css";

function Breadcrumb({ items }) {

  console.log("Breadcrumb props:", items);

  if (!items) {
    return (
      <div style={{ color: "red", padding: "10px" }}>
        Breadcrumb: items prop is undefined
      </div>
    );
  }

  return (
    <div className="breadcrumb-area">
      {items.map((item, index) => (
        <span key={index}>
          {index !== items.length - 1 ? (
            <>
              <Link to={item.link}>{item.label}</Link>
              <span className="separator"> / </span>
            </>
          ) : (
            <span className="active">{item.label}</span>
          )}
        </span>
      ))}
    </div>
  );
}

export default Breadcrumb;