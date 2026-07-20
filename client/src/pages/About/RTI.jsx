import PageLayout from "../../components/Common/PageLayout";

function RTI() {
  return (
    <PageLayout
      title="Right to Information (RTI)"
      breadcrumb={[
        { label: "Home", link: "/" },
        { label: "About Us", link: "#" },
        { label: "RTI" },
      ]}
    >
      <h2>Right to Information (RTI) content Under Process</h2>

      <p>
        RTI information Under Process.
      </p>
    </PageLayout>
  );
}

export default RTI;