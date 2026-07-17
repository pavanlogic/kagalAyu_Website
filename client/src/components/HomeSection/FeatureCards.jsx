import "./FeatureCard.css";

function FeatureCard({
    icon,
    title,
    line1,
    line2,
    line3
}) {

    return (

        <div className="feature-card">

            <div className="feature-icon">

                <i className={icon}></i>

            </div>

            <div className="feature-content">

                <h5>{title}</h5>

                <p>{line1}</p>

                <p>{line2}</p>

                <p>{line3}</p>

            </div>

{/*             <button>

                View Details

            </button> */}

        </div>

    );

}

export default FeatureCard;