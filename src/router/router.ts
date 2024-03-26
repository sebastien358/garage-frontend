import {createRouter, createWebHistory} from "vue-router";
import {useUserAdminStore} from "@/stores/admin/userAdminStore";
import Home from "@/features/views/garage/home/views/Home.vue";
import Login from "@/components/login/views/Login.vue";
import Register from "@/features/views/admin/register/views/Register.vue";
import Contact from "@/features/views/garage/contact/views/Contact.vue";
import Admin from "@/features/views/admin/Admin.vue";
import RequestResetPassword from "@/components/resetPassword/views/requestResetPassword.vue";
import ResetPassword from "@/components/resetPassword/views/ResetPassword.vue";
import {ADMIN_ROUTES} from "@/features/views/admin/admin.route";
import Cars from "@/features/views/garage/cars/views/Cars.vue";
import CarDetails from "@/features/views/admin/cars/views/CarDetails.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/cars', name: 'cars', component: Cars},
        {path: '/car-details/:id', name: 'car-details', component: CarDetails},
        {path: '/contact', name: 'contact', component: Contact},
        {path: '/register', name:'register', component: Register},
        {path: '/login', name: 'login', component: Login},
        {path: '/request/reset-password', name: 'request-password', component: RequestResetPassword},
        {path: '/reset-password/:token', component: ResetPassword},
        {path: '/administration', name: 'admin', meta: {isAdmin: true}, component: Admin, children: ADMIN_ROUTES}
    ]
})

router.beforeEach((to, from, next) => {
    const userAdminStore= useUserAdminStore()
    if (to.meta.isAdmin && !userAdminStore.isLogged()) next({ name: 'login' })
    else next()
})