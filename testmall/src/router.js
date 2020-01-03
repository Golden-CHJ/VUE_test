import  Vue from 'vue'
import Router from  'vue-router'
import  Cart from './page/cart'
import  Address from './page/address'
Vue.use(Router);
export default new Router({
    routes:[
        {
            path:'/',
            name:'cart',
            component: Cart
        },
        {
            path:'/address',
            name:'address',
            component: Address
        },
    ]
})