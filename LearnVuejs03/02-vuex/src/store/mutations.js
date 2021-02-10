import { INCREMENT } from './mutations-types'

export default {

  [INCREMENT](state) {
    state.counter++
  },
  decrement(state) {
    state.counter--
  },
  incrementCount(state,count/*payload*/) {
    state.counter += count
    //state.counter += payload.count
  },
  addStudent(state,stu) {
    state.students.push(stu)
  }
}
