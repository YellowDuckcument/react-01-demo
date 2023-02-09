import axios from "axios"

const url = {
    baseUrl: "https://restfulapi.dnd-group.net/api",
    login: "/login",
    majors: "/majors",
}

const instance = axios.create({
    baseURL: url.baseUrl,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    },
})

const api = {
    url,
    instance,
    get: instance.get,
    put: instance.put,
    post: instance.post,
    delete: instance.delete,
    patch: instance.patch,
}



export default api