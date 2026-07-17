import "./QuickLinks.css";

function QuickLinks() {

    const cards = [

        "BAMS",

        "PG Courses",

        "Hospital",

        "Departments",

        "Library",

        "Gallery"

    ];

    return (

        <div className="quick-grid">

            {cards.map((item,index)=>(

                <div
                    className="quick-card"
                    key={index}
                >

                    <div className="quick-icon">

                        🎓

                    </div>

                    <h5>{item}</h5>

                </div>

            ))}

        </div>

    );

}

export default QuickLinks;