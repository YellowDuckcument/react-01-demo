import api from "./api.js"

const list = () => api.get(api.url.majors).then((res) => res.data)
const get = (id) => api.get(`${api.url.majors}/${id}`).then(res => res.data)
const add = (data) => api.post(api.url.majors, data).then(res => res.data)
const update = (id, data) => api.get(`${api.url.majors}/${id}`, data).then(res => res.data)

const majorService = {
    list,
    get,
    add,
    update,
    // remove,
}

export  default majorService