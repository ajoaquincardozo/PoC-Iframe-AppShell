import { useEffect, useRef } from "react";
import { navigateInIframe } from "../../Utils";
import { AllowedDomains, AllowedDomainType } from "../Routes";

export default function ProductCatalog() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const baseUrl: AllowedDomainType = AllowedDomainType.development;

  const handleMessageIFrame = (event: MessageEvent) => {
    if (AllowedDomains.includes(event.origin) && event.source === iframeRef.current?.contentWindow)
      alert(JSON.stringify(event.data, null, 2));
  }

  useEffect(() => {
    navigateInIframe(iframeRef.current as HTMLIFrameElement, {
      baseUrl,
      route: "/products"
    })

    window.addEventListener('message', handleMessageIFrame, false);

    //Clean up
    return () => {
      window.removeEventListener("message", handleMessageIFrame, false);
    }
  }, [])

  return (<iframe className="w-full h-full" ref={iframeRef} src={baseUrl}/>);
}