import Vue from 'vue';
import VueRouter from 'vue-router'

import RouterHeader from "./RouterHeader";
import RouterIndex from "../views/Index";
import RouterBottom from "./RouterBottom";

import My from "../views/My";
import Article from "../views/Article";
import DreamOL from "../views/Article/DreamOL";

import HelloWorld from "../views/HelloWorld";

Vue.use(VueRouter);
const routes = new VueRouter({
    routes:[
        {
            isMenu:true,
            menuName:'首页',
            path: '/',
            meta:{title:"我是首页"},
            components:{
                default:RouterIndex,
                header:RouterHeader,
                bottom:RouterBottom
            },
            children:[
                {
                    isMenu:true,
                    isOneMenu:true,
                    menuName:'简介',
                    path:'/my',
                    component:My
                },
                {
                    isMenu:true,
                    isOneMenu:true,
                    menuName:'文章',
                    path:'/article',
                    component:Article,
                    children:[
                        {
                            isMenu:true,
                            menuName:'梦魔幻境',
                            path:'/dreamOL',
                            component:DreamOL
                        }
                    ]
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
routes.beforeEach((to,from,next)=>{//beforeEach是router的钩子函数，在进入路由前执行
    if(to.meta.title){//判断是否有标题
        document.title = `${to.meta.title} - ${document.title}`;
    }
    next()  //执行进入路由，如果不写就不会进入目标页
})
export default routes;
