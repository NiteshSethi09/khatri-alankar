import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";
import Home from "./pages/Home";
// const Home = lazy(() => import("./pages/Home"));
import Shop from "./pages/Shop";
// const Shop = lazy(() => import("./pages/Shop"));

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Suspense fallback="Loading..."> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      {/* </Suspense> */}
      <Footer />
    </div>
  );
}

export default App;
