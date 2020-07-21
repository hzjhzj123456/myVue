import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    name:"hello vueText",
    num:1,   
  },
  mutations:{
    add(state){
      console.log('出发了');
      state.num++;
    },
    edit(state) {
      state.name = "l like react"
    }
  },
  getters:{
    getData(state){
      console.log(state);
      return state.name+state.num;
    },
  },
  actions:{
    changeName(context){
      setTimeout(()=>{
        console.log('2233');
        context.commit("edit");
      },2000);
    }
  }
})

export default store;