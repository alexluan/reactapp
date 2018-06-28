import {Dispatcher} from 'flux';
// 一如store
import Store from './TodoStore'
const TodoDispatcher = new Dispatcher();

TodoDispatcher.register(function (action) {
    switch (action.actionType){
      case 'ADD_TODO':
        // 调用 store
        Store.addTodoData(action.payload);
        Store.emitChange("change")
      default:
        // 其他处理
    }
})

export default TodoDispatcher;