import Vue from 'vue';
import VueRouter from 'vue-router'

import RouterHeader from "./RouterHeader";
import RouterIndex from "../components/Index";
import RouterBottom from "./RouterBottom";

import My from "../components/My";

import HelloWorld from "../components/HelloWorld";

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            isMenu:true,
            menuName:'首页',
            path: '/',
            components:{
                default:RouterIndex,
                header:RouterHeader,
                bottom:RouterBottom
            },
            children:[
                {
                    isMenu:true,
                    menuName:'简介',
                    path:'/my',
                    component:My
                }
            ]
        },
        {
            isMenu: true,
            menuName: '哈喽！',
            path:'/hello',
            component: HelloWorld
        }
    ]
})