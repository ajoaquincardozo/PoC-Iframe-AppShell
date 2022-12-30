export { default as GlobalRoutes } from "./GlobalRoutes";

export enum AllowedDomainType {
    development = "https://127.0.0.1:8080", //"https://localhost:8080",
    production = "https://poc-iframe-products.vercel.app"
}

export const AllowedDomains = [
    "https://127.0.0.1:8080", //"https://localhost:8080",
    "https://poc-iframe-products.vercel.app"
]