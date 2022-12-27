export { default as GlobalRoutes } from "./GlobalRoutes";

export enum AllowedDomainType {
    development = "http://localhost:8080",
    production = "https://poc-iframe-products.vercel.app"
}

export const AllowedDomains = [
    "http://localhost:8080",
    "https://poc-iframe-products.vercel.app"
]