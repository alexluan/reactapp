// object

import  EventEmitter from 'events'

const Store = Object.assign({},EventEmitter.prototype,{
  list:[],
  getTodoListData:function () {
    return this.list;
  }
  ,
  addTodoData: function (data) {
    this.list.push(data);

  },
  emitChange:function () {
    // 通知
    this.emit("change");
  },
  addChangeListener:function (callback) {
    // 注册回调函数,调用回调函数
    this.on("change", callback);
  }
})

export  default Store