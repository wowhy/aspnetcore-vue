import './components/core.scss'
import 'core-js/es6/promise'

import Vue from 'vue'
import App from './App'

import Router from 'vue-router'
import Resource from 'vue-resource'

import { sync } from 'vuex-router-sync'
import store from './store'
import routes from './routes'
import auth from './utils/auth'

Vue.use(Router)
Vue.use(Resource)

let router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: routes
})

store.commit('authed', auth.sync())

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
})
