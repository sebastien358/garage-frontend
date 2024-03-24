import {createRouter, createWebHistory} from "vue-router";
import Home from "@/features/views/garage/home/views/Home.vue";
import UsedCars from "@/features/views/garage/cars/views/UsedCars.vue";
import Login from "@/components/login/views/Login.vue";
import Register from "@/components/register/views/Register.vue";
import Contact from "@/features/views/garage/contact/views/Contact.vue";
import Admin from "@/features/views/admin/views/Admin.vue";
import {useUserAdminStore} from "@/stores/admin/userAdminStore";
import RequestResetPassword from "@/components/resetPassword/views/requestResetPassword.vue";
import ResetPassword from "@/components/resetPassword/views/ResetPassword.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/used-cars', name: 'used-cars', component: UsedCars},
        {path: '/contact', name: 'contact', component: Contact},
        {path: '/register', name:'register', component: Register},
        {path: '/login', name: 'login', component: Login},
        {path: '/request/reset-password', name: 'request-password', component: RequestResetPassword},
        {path: '/reset-password/:token', component: ResetPassword},
        {path: '/administration', name: 'admin', meta: {isAdmin: true}, component: Admin}
    ]
})

router.beforeEach((to, from, next) => {
    const userAdminStore= useUserAdminStore()
    if (to.meta.isAdmin && !userAdminStore.isLogged()) next({ name: 'login' })
    else next()
})