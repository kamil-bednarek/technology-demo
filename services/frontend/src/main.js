import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIO from 'vue-socket.io'
import io from 'socket.io-client'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

const socketInstance = io('http://127.0.0.1:8080', {
  transports: ['websocket']
})

Vue.config.productionTip = false

Vue.use(new VueSocketIO({
  debug: true,
  connection: socketInstance,
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  },
  options: {
    path: '/test/'
  }
}))

Vue.use(Vuetify)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
