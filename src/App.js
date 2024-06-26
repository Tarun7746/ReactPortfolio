import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./components/css/Navbar.scss";
import "./components/css/IndexHome.scss";
import "./App.css";
import "./components/css/service.scss";

import IndexHome from "./components/IndexHome";
import Header from "./components/Header";
import FooterHome from "./components/FooterHome";

// import NavbarHead from "./components/NavbarHead";

function App() {
  return (
    <div className="container-fluid cont p-0 m-0">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexHome />} />
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<FooterHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
