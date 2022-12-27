import { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { getCookie } from "../../Utils";
// import IFrame from "./Iframe";

export default function ProductCatalog() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const baseUrl = "http://localhost:8080"
  const [numberOfRenders, setNumberOfRenders] = useState(-1);
  const [iframeReady, setIframeReady] = useState(0);
  // const navigate = useNavigate();

  const navigateIframeRoute = (route: string) => {
    iframeRef.current?.contentWindow?.postMessage(JSON.stringify({
      cookie: {
        name: "auth-login",
        value: getCookie("auth-login"),
      },
      route
    }), "*");
  };

  useEffect(() => {
    const route = "/products";
    navigateIframeRoute("/products");
    const iframe = iframeRef.current as HTMLIFrameElement;
    iframe.src = `${baseUrl}${route}`;
    setNumberOfRenders(() => numberOfRenders + 1);
  }, [])

  // const onDetailClick = useCallback((id: Number) => {
  //   navigate(`/products/${id}`);
  // }, []);

  return (
    <>
      {numberOfRenders}
      <iframe className="w-full h-full" ref={iframeRef} src={baseUrl}/>
    </>
  );
}