import PageLayout from "../../components/Common/PageLayout";

function GoverningBody() {
  return (
    <PageLayout
      title="Affiliation & Recognition"
      breadcrumb={[
        { label: "Home", link: "/" },
        { label: "About Us", link: "#" },
        { label: "Governning Body" },
      ]}
    >
      <h2>Governning Body</h2>

      <p>
        Governning Body content Under Process.
      </p>
    </PageLayout>
  );
}

export default GoverningBody;