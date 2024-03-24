import {defineStore} from "pinia";
import axios from "axios";

interface User {
    user: userInfo[]
}

export const useUserAdminStore = defineStore('userAdminStore', {
    state: (): User => {
        return {
            user: []
        }
    },
    actions: {
        async getMe() {
            try {
                const response = await axios.get('https://127.0.0.1:8000/admin/user/me', {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    }
                })
                this.user = response.data
                console.log(this.user)
            } catch(e) {
                console.error(e)
            }
        },
        isLogged() {
            return sessionStorage.getItem('token') !== null
        },
        logout() {
            return sessionStorage.removeItem('token')
        }
    }
})

interface userInfo {
    firstName: string
    lastName: string
    email: string
    password: string
}