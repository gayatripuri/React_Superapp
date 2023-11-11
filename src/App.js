import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import Browse from "./pages/Browse";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </>
  );
}

export default App;
