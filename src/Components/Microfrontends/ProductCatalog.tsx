import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MessageEventData, MessageEventDataAction, navigateInIframe } from "../../Utils";
import { AllowedDomains, AllowedDomainType } from "../Routes";

export default function ProductCatalog() {
  const navigate = useNavigate();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const baseUrl: AllowedDomainType = AllowedDomainType.production;

  const handleMessageIFrame = (event: MessageEvent) => {
    if (AllowedDomains.includes(event.origin) && event.source === iframeRef.current?.contentWindow) {
      const { action }: { action: MessageEventDataAction} =  event.data;

      switch(action) {
        case MessageEventDataAction.addProduct:
          alert(JSON.stringify(event.data, null, 2));
          break;

        case MessageEventDataAction.showDetail:
          const eventData: MessageEventData<{id: number}> = event.data;
          console.log(`Deberia ver el detalle del producto ${eventData.payload.id}`);
          navigate(`/products/${eventData.payload.id}`);
          break;

        default:
          break;
      }
    }
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