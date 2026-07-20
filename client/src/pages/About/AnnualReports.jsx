import PageLayout from "../../components/Common/PageLayout";

function AnnualReports() {
  return (
    <PageLayout
      title="Annual Report"
      breadcrumb={[
        { label: "Home", link: "/" },
        { label: "About Us", link: "#" },
        { label: "Annual Report" },
      ]}
    >
      <h2>Annual Report</h2>

      <p>
        Annual Report content Under Progress.
      </p>
    </PageLayout>
  );
}

export default AnnualReports;