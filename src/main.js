import Vue from 'vue';
import Mint from 'mint-ui'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';


//基于vue的又要使用use引入,才能使用这第三方库
Vue.use(Mint);
Vue.use(VueRouter);
Vue.use(VueResource);// 相当于请求服务
// 导入样式
import 'mint-ui/lib/style.css';
// import './statics/MUI/mui.css';
import './statics/css/site.css';
// 导入根组件
import App from './App.vue';
import home from './components/home/home.vue';
import category from './components/category/category.vue';
import shopcart from './components/shopcart/shopcart.vue';
import mine from './components/mine/mine.vue';
//创建路由对象, 配置路由
const router= new VueRouter({
     routes:[
            {path:'/',redirect:'/home'},
            {path:'/home',component:home},
            {path:'/category',component:category},
            {path:'/shopcart',component:shopcart},
            {path:'/mine',component:mine},
     ]
})

// 创建根实例
new Vue({
    el:'#app',
    router:router,
    render:h=>h(App),
})