import http from "../utils/http-common.js"

class TodoDataService{
  getAll(){
    return http.get("/todo")
  }
  get(id){
    return http.get(`/todo?id=${id}`)
  }
  create(data){
    return http.post("/api/add",data)
  }
  update(id){
    return http.delete(`/todo?id=${id}`)
  }
  deleteAll(){
    return http.delete("/todo")
  }
  findByTitle(title){
    return http.get(`/todo?title=${title}`)
  }
}

export default new TodoDataService();
