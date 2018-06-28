
// 进入 dispachter
import React,{Component} from 'react';
import TodoDispatcher from './TodoDispatcher'


const TodoActions = {
  addTodo:function (data) {
      TodoDispatcher.dispatch({
        actionType:'ADD_TODO',
        payload:data
      });
  }
}

export  default TodoActions