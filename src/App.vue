<template>
    <div class="tmpl">
        <!--头部标题-->
        <mt-header fixed title="买买买"></mt-header>
        
        <!--中间部分-->
        <router-view></router-view>
        <!--底部导航栏部分-->
        
    <mt-tabbar fixed>
        <mt-tab-item id="首页">
           <router-link to="/home">
               <img src="http://img08.jiuxian.com/bill/2016/0224/cccd8df26a754c139de800406af82178.png">
            </router-link>
        </mt-tab-item>
        <mt-tab-item id="分类">
           <router-link to="/category">
                <img src="http://img07.jiuxian.com/bill/2016/0224/36a49b28ec5e4cdf9dbe37988199487d.png">
            </router-link>
        </mt-tab-item>
        <mt-tab-item id="购物车">
            
            <router-link to="/shopcart">
               <img src="http://img08.jiuxian.com/bill/2016/0224/42baf46987b6460bb43b3396e9941653.png">
            </router-link>

        </mt-tab-item>
        <mt-tab-item id="我的">
            <router-link to="/mine">
               <img src="http://img09.jiuxian.com/bill/2016/0224/cba9029a8f4444a989a2ab5aa84c6538.png">
            </router-link>
        </mt-tab-item>
    </mt-tabbar>

    </div>
</template>
<style scoped>
     img{
         width:42px;
         height:35px;
     }
</style>

