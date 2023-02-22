import axios from "axios"

const url = {
    baseUrl: "http://localhost/demo-new/public/api/",
    login: "/login",
    majors: "/majors",
    instructors: "/instructors",
}

const instance = axios.create({
    baseURL: url.baseUrl,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    },
})

instance.interceptors.request.use(request => request)
instance.interceptors.response.use(
    response => response.data,
    err => {
        if (err.code === "ERR_NETWORK") {
            window.location.href = "/network-error";
        } else {
            switch (err.response.status) {
                case 401: window.location.href = "/login"; break;
                case 403: window.location.href = "/no-permission"; break;
                default: break;
            }
        }
        return Promise.reject(err);
    }
)

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