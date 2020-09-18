import Vue from 'vue';
import router from './routers/router';
import App from './App';

Vue.config.devtools = true;
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');