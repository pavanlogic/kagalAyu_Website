console.log("DepartmentTemplate Loaded");
import React from "react";
import "./Department.css";

import FacultyTable from "./FacultyTable";
import DepartmentGallery from "./DepartmentGallery";

import PageLayout from "../../components/Common/PageLayout";
import PageBanner from "../../components/Common/PageBanner";
import Breadcrumb from "../../components/Common/Breadcrumb";

function DepartmentTemplate({ data }) {
  if (!data) {
    return (
      <PageLayout>
        <div className="container py-5">
          <div className="alert alert-danger">
            Department data not found.
          </div>
        </div>
      </PageLayout>
    );
  }

  const {
    title,
    bannerTitle,
    bannerImage,
    breadcrumb = [],
    quote,
    subQuote,
    introduction,
    objectives = [],
    activities,
    faculty = [],
    gallery = [],
  } = data;

  return (
  <PageLayout

    title={title}
    breadcrumb={[
        { label: "Home", link: "/" },
        { label: "Departments", link: "/departments" },
        { label: title }
    ]}
>

      <section className="department-section">

        <div className="container">

          {/* Department Title */}

      {/*     <div className="department-header">

            <h1>{title}</h1>

            <div className="department-line"></div>

          </div> */}

          {/* Sanskrit Quote */}

          {(quote || subQuote) && (

            <div className="quote-card">

              {quote &&

                <h3 className="sanskrit-quote">

                  {quote}

                </h3>

              }

              {subQuote &&

                <h5 className="sanskrit-subquote">

                  {subQuote}

                </h5>

              }

            </div>

          )}

          {/* About */}

          <div className="department-card">

            <h2>

              About Department

            </h2>

            <div className="department-line-small"></div>

            <p>

              {introduction}

            </p>

          </div>

          {/* Objectives */}

          {objectives.length > 0 && (

            <div className="department-card">

              <h2>

                Vision & Goals

              </h2>

              <div className="department-line-small"></div>

              <ul className="objective-list">

                {objectives.map((item, index) => (

                  <li key={index}>

                    {item}

                  </li>

                ))}

              </ul>

            </div>

          )}

          {/* Activities */}

          {activities && (

            <div className="department-card">

              <h2>

                Departmental Initiatives

              </h2>

              <div className="department-line-small"></div>

              <p>

                {activities}

              </p>

            </div>

          )}
            {/* Faculty Section */}

{/*           {faculty.length > 0 && (

            <div className="department-card">

              <h2>Faculty Members</h2>

              <div className="department-line-small"></div>

              <div className="table-responsive">

                <table className="table table-bordered table-hover faculty-table">

                  <thead>

                    <tr>

                      <th style={{ width: "70px" }}>Sr.</th>

                      <th>Faculty Name</th>

                      <th>Qualification</th>

                      <th>Designation</th>

                    </tr>

                  </thead>

                  <tbody>

                    {faculty.map((member, index) => (

                      <tr key={index}>

                        <td>{index + 1}</td>

                        <td>{member.name}</td>

                        <td>{member.qualification}</td>

                        <td>{member.designation}</td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            </div>

          )} */}

            {/* Department Gallery */}

{/*           {gallery.length > 0 && (

            <div className="department-card">

              <h2>Department Gallery</h2>

              <div className="department-line-small"></div>

              <div className="row">

                {gallery.map((image, index) => (

                  <div
                    className="col-lg-3 col-md-4 col-sm-6 mb-4"
                    key={index}
                  >

                    <div className="gallery-card">

                      <img
                        src={image}
                        alt={`Department ${index + 1}`}
                        className="img-fluid gallery-image"
                      />

                    </div>

                  </div>

                ))}

              </div>

            </div>

          )} */}

          <FacultyTable faculty={faculty} />
          <DepartmentGallery images={gallery} />

        </div>

      </section>

    </PageLayout>

  );

}

export default DepartmentTemplate;