import {defineStore} from "pinia";
import {useMessageStore} from "@/stores/messageStore";
import axios from "axios";
import {useUserAdminStore} from "@/stores/admin/userAdminStore";

export const useLoginStore = defineStore('loginStore', {
    state: () => {
        return {
            editLogin: null
        }
    },
    actions: {
        async initUser() {
            this.editLogin = {
                email: '',
                password: ''
            }
        },
        async login() {
            const messageStore = useMessageStore()
            const userAdminStore = useUserAdminStore()
            try {
                const response = await axios.post('https://127.0.0.1:8000/api/login_check', {
                    username: this.editLogin.email,
                    password: this.editLogin.password
                })
                sessionStorage.setItem('token', response.data.token)
                await userAdminStore.getMe()
                messageStore.addMessage('Vous êtes connecté', 'success')
            } catch(e) {
                messageStore.addMessage('Identifiant ou mot de passe incorrect', 'error')
                console.error(e)
            }
        }
    }
})