import {createRouter, createWebHistory} from "vue-router";
import Home from "@/features/views/home/views/Home.vue";
import UsedCars from "@/features/views/cars/views/UsedCars.vue";
import Login from "@/components/login/views/Login.vue";
import Register from "@/components/register/views/Register.vue";
import Contact from "@/features/views/contact/views/Contact.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', name: 'home', component: Home},
        {path: '/used-cars', name: 'used-cars', component: UsedCars},
        {path: '/contact', name: 'contact', component: Contact},
        {path: '/register', name:'register', component: Register},
        {path: '/login', name: 'login', component: Login},
    ]
})