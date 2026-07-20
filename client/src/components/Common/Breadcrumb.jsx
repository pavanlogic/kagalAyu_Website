import { Link } from "react-router-dom";
import "./Breadcrumb.css";

function Breadcrumb({ items }) {

  return (

    <div className="breadcrumb-area">

      {items.map((item,index)=>(

        <span key={index}>

          {index!==items.length-1 ?

            <>
              <Link to={item.link}>{item.label}</Link>
              <span className="separator"> / </span>
            </>

            :

            <span className="active">{item.label}</span>

          }

        </span>

      ))}

    </div>

  );

}

export default Breadcrumb;