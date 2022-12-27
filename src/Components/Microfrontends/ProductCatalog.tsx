import { useEffect, useRef } from "react";
import { navigateInIframe } from "../../Utils";

export default function ProductCatalog() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const baseUrl = "http://localhost:8080"

  useEffect(() => {
    navigateInIframe(iframeRef.current as HTMLIFrameElement, {
      baseUrl,
      route: "/products"
    })
  }, [])

  return (<iframe className="w-full h-full" ref={iframeRef} src={baseUrl}/>);
}