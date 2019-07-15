import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import xingzheng from '@/views/xingzheng/xingzheng.vue'
import renzi from '@/views/renzi/renzi.vue'
import xitong from '@/views/xitong/xitong.vue'
import hezuo from '@/views/hezuo/hezuo.vue'
import xiangmu from '@/views/xiangmu/xiangmu.vue'
import kaoqinA from '@/views/xingzheng/kaoqin/kaoqinA.vue'
import kaoqinB from '@/views/xingzheng/kaoqin/kaoqinB.vue'
export default new Router({
    routes: [
    {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
        path:'/',
        name:'xingzheng',
        component: xingzheng,
        children: [{
            path:'/',
            name:'kaoqinA',
            component:kaoqinA
        },
        {
            path:'/kaoqinB',
            name:'kaoqinB',
            component:kaoqinB
        }]
    },
    {
        path:'/renzi',
        name:'renzi',
        component: renzi
    },
    {
        path:'/xitong',
        name:'xitong',
        component: xitong
    },
    {
        path:'/hezuo',
        name:'hezuo',
        component: hezuo
    },
    {
        path:'/xiangmu',
        name:'xiangmu',
        component: xiangmu
    },
    ]
})