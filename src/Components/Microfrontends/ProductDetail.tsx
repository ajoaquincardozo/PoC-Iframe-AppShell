import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { navigateInIframe } from "../../Utils";
import { AllowedDomainType } from "../Routes";

export default function ProductDetail() {
    const { productId } = useParams();
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const baseUrl: AllowedDomainType = AllowedDomainType.production;

    useEffect(() => {
        navigateInIframe(iframeRef.current as HTMLIFrameElement, {
          baseUrl,
          route: `/products/${productId}`
        })
    }, [])

    return (<iframe className="w-full h-full" ref={iframeRef} src={baseUrl}/>);
}