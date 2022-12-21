import { Route, Routes } from "react-router-dom";
const ProductCatalog = () => <>ProductCatalog</>
const ProductDetail = () => <>ProductDetail</>
const Login = () => <>Login</>

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
