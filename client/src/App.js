import React,{useState} from "react";
import HomePage from "./pages/HomePage";
import CountrySlug from "./pages/[countrySlug]/countrySlug";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [products, setProducts] = useState([]);
  return (
    <BrowserRouter>
       <Header />
      <Routes>
        <Route path="/" element={<HomePage products={products} setProducts={setProducts} />} />
        <Route path="/:countrySlug" element={<CountrySlug />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
