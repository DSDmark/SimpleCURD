import { http } from "../utils/"

class TodoDataService {
  getAll() {
    return http.get("/api/findAll")
  }
  get(id) {
    return http.get(`/todo?id=${id}`)
  }
  create(data) {
    return http.post("/api/add", data)
  }
  update(id) {
    return http.delete(`/todo?id=${id}`)
  }
  deleteAll() {
    return http.delete("/api/deleteAll")
  }
  deleteOne(id) {
    return http.delete(`/api/deleteOne?id=${id}`)
  }
  findByTitle(title) {
    return http.get(`/api/findAll?title=${title}`)
  }
}

export default new TodoDataService();
