import TopBar from "../components/Header/TopBar";
import Header from "../components/Header/Header";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";


function MainLayout({ children }) {

    return (

        <>

            <TopBar />

            <Header />

            <Navbar />

            <main>

                {children}

            </main>

            <Footer />

        </>

    );

}

export default MainLayout;