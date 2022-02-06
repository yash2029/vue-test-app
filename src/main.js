import Vue from 'vue'
import App from './App.vue'
import store from './store/store.js';
import router from './router/router.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPenSquare,faTrash,faDumpster,faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPenSquare);
library.add(faDumpster);
library.add(faTrash);
library.add(faWindowClose);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
