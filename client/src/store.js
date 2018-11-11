import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:'su',
    pw:'123456',
    host:'http://localhost:8080/api/demo',
    auth:'',
    query:'readAll(site)'
  },
  getters: {
    user: state => {
      return state.user
    },
    pw: state => {
      return state.pw
    },
    host: state => {
      return state.host
    },
    auth: state => {
      return state.auth
    },
    query: state => {
      return state.query
    }
  },
  mutations: {
    USER_INPUT: (state, input) => {
      state.user = input;
    },
    PW_INPUT: (state, input) => {
      state.pw = input;
    },
    HOST_INPUT: (state, input) => {
      state.host = input;
    },
    AUTH_INPUT: (state, input) => {
      state.auth = input;
    },
    QUERY_INPUT: (state, input) => {
      state.query = input;
    }

  },
  actions: {
    userInput: (context, input) => {
      context.commit("USER_INPUT", input)
    },
    pwInput: (context, input) => {
      context.commit("PW_INPUT", input)
    },
    hostInput: (context, input) => {
      context.commit("HOST_INPUT", input)
    },
    authInput: (context, input) => {
      context.commit("AUTH_INPUT", input)
    },
    queryInput: (context, input) => {
      context.commit("QUERY_INPUT", input)
    }
  }
})
