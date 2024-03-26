import type {RouteRecordRaw} from "vue-router";
import Profile from "@/features/views/admin/profile/views/Profile.vue";
import UsersList from "@/features/views/admin/users/views/UsersList.vue";
import CarsList from "@/features/views/admin/cars/views/CarsList.vue";
import CarCreate from "@/features/views/admin/cars/views/CarCreate.vue";

export const ADMIN_ROUTES: RouteRecordRaw[] = [
    {path: '/profile/:id', name: 'admin-user-profile', component: Profile},
    {path: '/users', name: 'admin-users-list', component: UsersList},
    {path: '/car-create', name: 'admin-car-create', component: CarCreate},
    {path: '/cars', name: 'admin-cars-list', component: CarsList}
]