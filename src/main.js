import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
require('dotenv').config()
// Import the Auth0 configuration
// import { domain, clientId, audience } from '../auth_config.json'

// Import the plugin here
import { Auth0Plugin } from './auth';

import vuetify from './plugins/vuetify';

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain: process.env.VUE_APP_DOMAIN,
  clientId: process.env.VUE_APP_CLIENTID,
  audience:process.env.VUE_APP_AUDIENCE,

  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
