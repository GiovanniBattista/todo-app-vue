
import axios from "axios"

class TodoService {

  request = null

  constructor() {
  }

  fetchAll() {
    return axios.get('/todos')
  }

  create( todo ) {
    return axios.post('/todos', todo)
  }

  update( todo ) {
    return axios.put('/todos' + todo.id, todo);
  }

  delete( id ) {
    return axios.delete('/todos' + id)
  }

}

export default new TodoService()
export { TodoService }