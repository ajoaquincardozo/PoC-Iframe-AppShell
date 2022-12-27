export type NavigateInInframeConfig = {
    baseUrl: string;
    route: string;
}

const getCookie = (name: string) => {
    const cookieByName: Record<string, string> = document
        .cookie
        .split(";")
        .reduce((result, cookieRaw) => {
            const [key, value] = cookieRaw.split("=");
            return { ...result, [key]: value }
        }, {});

    return cookieByName[name];
}

export const setCookieInIframe = (iframe: HTMLIFrameElement, route: NavigateInInframeConfig["route"]) =>
    iframe.contentWindow?.postMessage(JSON.stringify({
      cookie: {
        name: "auth-login",
        value: getCookie("auth-login"),
      },
      route
    }), "*");

export const navigateInIframe = (iframe: HTMLIFrameElement, config: NavigateInInframeConfig) => {
    setCookieInIframe(iframe, config.route);
    const { baseUrl, route } = config;
    iframe.src = `${baseUrl}${route}`;
}

export enum MessageEventDataAction {
    addProduct = "ADD_PRODUCT",
    showDetail = "SHOW_DETAIL"
}

export type MessageEventData<TPayload> = {
    action: MessageEventDataAction
    payload: TPayload
}