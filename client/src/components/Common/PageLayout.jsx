import PageBanner from "./PageBanner";
import Breadcrumb from "./Breadcrumb";
import "./PageLayout.css";

function PageLayout({ title, breadcrumb, children }) {

  return (

    <>

      <PageBanner title={title} />

      <div className="page-wrapper">

        {/* <Breadcrumb items={breadcrumb} /> */}
        {breadcrumb && breadcrumb.length > 0 && (
    <Breadcrumb items={breadcrumb} />
)}

        <div className="page-card">

          {children}

        </div>

      </div>

    </>

  );

}

export default PageLayout;