import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Academics from "../pages/Academics";
import Hospital from "../pages/Hospital";
import Gallery from "../pages/Gallery";
import News from "../pages/News";
import Events from "../pages/Events";
import Contact from "../pages/Contact";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route path="/academics" element={<Academics />} />

                <Route path="/hospital" element={<Hospital />} />

                <Route path="/gallery" element={<Gallery />} />

                <Route path="/news" element={<News />} />

                <Route path="/events" element={<Events />} />

                <Route path="/contact" element={<Contact />} />

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;