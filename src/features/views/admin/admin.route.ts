import type {RouteRecordRaw} from "vue-router";
import Profile from "@/features/views/admin/profile/views/Profile.vue";
import UsersAdminList from "@/features/views/admin/users/views/UsersAdminList.vue";
import CarAdminCreate from "@/features/views/admin/cars/views/CarAdminCreate.vue";
import CarAdminDetails from "@/features/views/admin/cars/views/CarAdminDetails.vue";
import CarAdminUpdate from "@/features/views/admin/cars/views/CarAdminUpdate.vue";
import CarsAdminList from "@/features/views/admin/cars/views/CarsAdminList.vue";
import ContactAdminList from "@/features/views/admin/contacts/views/ContactAdminList.vue";

export const ADMIN_ROUTES: RouteRecordRaw[] = [
    {path: '/admin-profile/:id', name: 'admin-user-profile', component: Profile},
    {path: '/admin-users', name: 'admin-users-list', component: UsersAdminList},
    {path: '/admin-car-create', name: 'admin-car-create', component: CarAdminCreate},
    {path: '/admin-cars-list', name: 'admin-cars-list', component: CarsAdminList},
    {path: '/admin-car-details/:id', name: 'admin-car-details', component: CarAdminDetails},
    {path: '/admin-car-update/:id', name: 'admin-car-update', component: CarAdminUpdate},
    {path: '/admin-contacts-list', name: 'admin-contacts-list', component: ContactAdminList}
]