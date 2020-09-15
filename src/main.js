import Vue from 'vue';
import App from './App.vue';

new Vue({
    render: h => h(App),
}).$mount('#jsl-app');
Vue.config.devtools = true