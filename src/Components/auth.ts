const API_SERVER = "https://poc-module-federation-app-server.vercel.app"//"http://localhost:8081"//"https://poc-module-federation-app-server.vercel.app"

export const authenticate = async (username: string, password: string) =>
    fetch(`${API_SERVER}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password,}),
    })
    .then((res) => {
        console.log(res);
        return res.json();
    })
