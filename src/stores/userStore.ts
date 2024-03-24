import {defineStore} from "pinia";
import {useMessageStore} from "@/stores/messageStore";
import axios from "axios";

export const useUserStore = defineStore('userStore', {
    state: () => {
        return {
            editEmail: null,
            editPassword: null
        }
    },
    actions: {
        initEmail() {
            this.editEmail = {
                email: ''
            }
        },
        async resetRequestPassword(): Email {
            const messageStore = useMessageStore()
            const formData = new FormData()
            formData.append('email', this.editEmail.email)
            try {
                await axios.post('https://127.0.0.1:8000/reset/request-password', formData, {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    }
                })
                messageStore.addMessage('Un email de réinitialisation de mot de passe vous à été envoyé', 'success')
            } catch (e) {
                messageStore.addMessage('Aucun compte ne correspond à cet identifiant', 'error')
                console.error(e)
            }
        },
        initPassword() {
            this.editPassword = {
                password: '',
                confirm: ''
            }
        },
        async resetPassword(token) {
            const messageStore = useMessageStore()
            const formData = new FormData()
            formData.append('password[first]', this.editPassword.password)
            formData.append('password[second]', this.editPassword.confirm)
            try {
                await axios.post(`https://127.0.0.1:8000/reset-password/${token}`, formData, {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    }
                })
                messageStore.addMessage('Le mot de passe a bien été modifié', 'success')
            } catch (e) {
                messageStore.addMessage('Votre de demande a expirée, veuillez renouveller votre demande de réinitialisation de mot de passe', 'error')
                console.error(e)
            }
        }
    }
})