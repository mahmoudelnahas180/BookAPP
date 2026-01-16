import api from "./api";


export const registerUser = (userData) => {
    return api.post("/auth/register", userData)
}
export const loginUser = async ({ email, password }) => {
    const response = await api.post("/signin", { email, password })
    if (response.data.token) {
        localStorage.setItem("token", response.data.token)
        localStorage.setItem("user", JSON.stringify(response.data.user))
        return response.data
    }
}
export const logoutUser = () => {
    return api.post("/auth/logout")
}
