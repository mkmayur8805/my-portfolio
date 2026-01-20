import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Contactpage from "./pages/Contactpage";
import Portfolio from "./pages/Portfolio";
import ProjectDetails from "./pages/ProjectDetails";

import Navbar from "./Components/Navbar";
import Menu from "./Components/Menu";
import Cursor from "./Components/Cursor";
import ScrollToTop from "./Components/ScrollToTop";
import ScrollToTop2 from "./Components/ScrollToTop2";
import PageLoader from "./Components/PageLoader";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // 🔥 Route change detect
  useEffect(() => {
    setLoading(true);
  }, [location.pathname]);

  return (
    <div className="bg-grid min-h-screen cursor-default select-none">
      {loading && (
        <>
          <PageLoader onComplete={() => setLoading(false)} />
          <Cursor />
        </>
      )}

      {!loading && (
        <>
          <ScrollToTop />
          <ScrollToTop2 />
          <Navbar />
          <Menu />
          <Cursor />

          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contactpage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:slug" element={<ProjectDetails />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
