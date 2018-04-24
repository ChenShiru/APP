import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    bgColor :'red',
    title:''
}
const mutations = {
    change(state,obj){
        state.bgColor = obj.bgColor;
        state.title =obj.title 
    }

}

export default new Vuex.Store({
    state,
    mutations
})