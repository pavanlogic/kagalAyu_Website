import PageLayout from "../../components/Common/PageLayout";

function OrganizationChart() {
  return (
    <PageLayout
      title="Right to Information (RTI)"
      breadcrumb={[
        { label: "Home", link: "/" },
        { label: "About Us", link: "#" },
        { label: "RTI" },
      ]}
    >
      <h2>Organization Chart</h2>

      <p>
        Organization Chart Content Under Process.
      </p>
    </PageLayout>
  );
}

export default OrganizationChart;