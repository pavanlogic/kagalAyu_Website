import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import HomeSection from "../components/HomeSection/HomeSection";
import InfoSection from "../components/InfoSection/InfoSection";
import Statistics from "../components/Statistics/Statistics";
import "./Home.css";

function Home() {
  return (
    <MainLayout>

{/*       <Hero />
      <HomeSection />
      <InfoSection />
      <Statistics /> */}
       <div className="homepage">

        <Hero />

        <HomeSection />

        <InfoSection />

        <Statistics />



    </div>

    </MainLayout>
  );
}

export default Home;