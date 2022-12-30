const API_SERVER = "http://localhost:8081"//"http://localhost:8081"//"https://poc-module-federation-app-server.vercel.app"

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


// export const authenticate = async (username: string, password: string) =>
//     Promise.resolve({
//         access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hcmlhIiwic3ViIjoyLCJpYXQiOjE2NzIxNDQwMDcsImV4cCI6MTY3MjIzMDQwN30.JhcgwpWVSBgHBZfDVUec2llhYdMejguauCT1ksEvJuY"
//     })
