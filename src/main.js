import Vue from 'vue'
import App from './App'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render () {
    return <App />
  }
}).$mount('#app')
