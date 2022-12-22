import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCatalog() {
  const navigate = useNavigate();

  const onDetailClick = useCallback((id: Number) => {
    navigate(`/products/${id}`);
  }, []);

  return (<>ProductCatalog</>);
}