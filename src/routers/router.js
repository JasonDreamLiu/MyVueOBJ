import Vue from 'vue';
import VueRouter from 'vue-router'

import RouterHeader from "./RouterHeader";
import RouterIndex from "../components/Index";
import RouterBottom from "./RouterBottom";

import HelloWorld from "../components/HelloWorld";

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path: '/',
            components:{
                default:RouterIndex,
                header:RouterHeader,
                bottom:RouterBottom
            }
        },
        {
            path:'/hello',
            component: HelloWorld
        }
    ]
})