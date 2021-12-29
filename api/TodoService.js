
import axios from "axios"

class TodoService {

  request = null

  constructor() {
    console.log("Constructor was called")
    this.request = axios.create({
      baseURL: 'http://localhost:3000/todos',
      timeout: 5000
    })
  }

  fetchAll() {
    return this.request.get()
  }

  create( todo ) {
    return this.request.post('', todo)
  }

  update( todo ) {
    return this.request.put('/' + todo.id, todo);
  }

  delete( id ) {
    return this.request.delete('/' + id)
  }

}

export default new TodoService()
export { TodoService }