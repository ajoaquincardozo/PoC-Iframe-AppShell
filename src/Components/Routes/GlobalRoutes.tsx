import { Route, Routes } from "react-router-dom";
import Login from '../Login'
import ProductCatalog from "./Microfrontends/ProductCatalog";
import ProductDetail from "./Microfrontends/ProductDetail";

function GlobalRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/" element={<Login />}/>
      <Route path="/products" element={<ProductCatalog />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
    </Routes>
  );
}

export default GlobalRoutes;
