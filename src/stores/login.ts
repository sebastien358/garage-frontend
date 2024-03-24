import {defineStore} from "pinia";
import {useMessageStore} from "@/stores/messageStore";
import axios from "axios";
import {useUserAdminStore} from "@/stores/admin/userAdminStore";

interface Login {
    editLogin: LoginInfo | null
}

export const useLoginStore = defineStore('loginStore', {
    state: (): Login => {
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
                messageStore.addMessage('Identifiant ou mot de passe incorrect', 'success')
            } catch(e) {
                messageStore.addMessage('La connexion a échouée', 'error')
                console.error(e)
            }
        }
    }
})

interface LoginInfo {
    email: string
    password: number
}