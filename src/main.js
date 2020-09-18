import Vue from 'vue';
// import {Button} from 'element-ui';
import App from './App';

// Vue.component(Button.name, Button);

Vue.config.devtools = true;
new Vue({
    render: h => h(App),
}).$mount('#app');