import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)   //在vue应用中安装vuex
let store =new Vuex.Store({   //静态方法
    state:{count:0},    //存放数据的
    mutations:{         //存放用户提交的方法  =》业务
        //mutations是唯一修改state的方法
        increment(state,payload){  //修改state的业务函数
                //每个mutations的第一个参数就是state本身
                state.count=state.count+payload
        },
        decrement(state,payload){
            state.count=state.count-payload
        }
    },
    actions:{
        asyncincrement(context,payload){
            //存放异步的  提交mutation
            //每个action的第一个参数是上下文对象context就是store
            setTimeout(function(){
                context.commit("increment",payload)
            },2000)
        }
    }        
})
export default store
