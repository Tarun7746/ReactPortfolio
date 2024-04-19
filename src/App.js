import { Route, Routes, BrowserRouter } from "react-router-dom";
// import "./components/css/Home.css";
import "./components/css/IndexHome.scss";
import IndexHome from "./components/IndexHome";
import Header from "./components/Header";

function App() {
  return (
    <div className="container-fluid cont p-0 m-0">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexHome />} />
          <Route path="/header" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
