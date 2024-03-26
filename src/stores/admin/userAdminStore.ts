import {defineStore} from "pinia";
import axios from "axios";
import {useMessageStore} from "@/stores/messageStore";

export const useUserAdminStore = defineStore('userAdminStore', {
    state: () => {
        return {
            user: [],
            users: [],
            editUser: null
        }
    },
    actions: {
        async getMe() {
            try {
                const response = await axios.get('https://127.0.0.1:8000/admin/me', {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    }
                })
                this.user = response.data
            } catch(e) {
                console.error(e)
            }
        },
        isLogged() {
            return sessionStorage.getItem('token') !== null
        },
        logout() {
            return sessionStorage.removeItem('token')
        },
        async getUsers() {
            try {
                const response = await axios.get('https://127.0.0.1:8000/admin/users', {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    }
                })
                this.users = response.data
            } catch(e) {
                console.error(e)
            }
        },
        async getCurrentUser(id: number) {
            try {
                const response = await axios.get(`https://127.0.0.1:8000/admin/details/${id}`, {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    }
                })
                this.editUser = response.data
            } catch(e) {
                console.error(e)
            }
        },
        async initUpdateRegister() {
            this.editUser = {
                firstName: '',
                lastName: '',
                email: '',
                newPassword: '',
                confirm: ''
            }
        },
        async updateRegister(){
            const messageStore= useMessageStore()
            const formData = new FormData()
            formData.append('firstName', this.editUser.firstName)
            formData.append('lastName', this.editUser.lastName)
            formData.append('email', this.editUser.email)
            formData.append('newPassword[first]', this.editUser.newPassword)
            formData.append('newPassword[second]', this.editUser.confirm)
            try {
                await axios.post(`https://127.0.0.1:8000/admin/edit-register/${this.editUser.id}`, formData,{
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    }
                })
                messageStore.addMessage('Un compte utilisateur a bien été modifié', 'success')
            } catch(e) {
                messageStore.addMessage('Le compte utilisateur n\'a pas pu être modifié', 'error')
                console.error(e)
            }

            await this.getUsers()
        },
        async deleteUser(id: number) {
            try {
                await axios.delete(`https://127.0.0.1:8000/admin/user-delete/${id}`, {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    }
                })
            } catch(e) {
                console.error(e)
            }
        }
    }
})