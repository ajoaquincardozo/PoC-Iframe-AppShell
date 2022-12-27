export const getCookie = (name: string) => {
    const cookieByName: Record<string, string> = document
        .cookie
        .split(";")
        .reduce((result, cookieRaw) => {
            const [key, value] = cookieRaw.split("=");
            return { ...result, [key]: value }
        }, {});

    return cookieByName[name];
}