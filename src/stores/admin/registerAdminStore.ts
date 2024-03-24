import {defineStore} from "pinia";
import axios from "axios";
import {useMessageStore} from "@/stores/messageStore";

interface Register {
    editRegister: RegisterInfo | null
}

export const useRegisterAdminStore = defineStore('registerAdminStore', {
    state: (): Register => {
        return {
            editRegister: null
        }
    },
    actions: {
        initRegister() {
            this.editRegister = {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirm: ''
            }
        },
        async register(){
            const messageStore= useMessageStore()
            const formData = new FormData()
            formData.append('firstName', this.editRegister.fistName)
            formData.append('lastName', this.editRegister.lastName)
            formData.append('email', this.editRegister.email)
            formData.append('password[first]', this.editRegister.password)
            formData.append('password[second]', this.editRegister.confirm)
            try {
                await axios.post('https://127.0.0.1:8000/admin/register', formData,{
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    }
                })
                messageStore.addMessage('Un compte utilisateur a bien été créé', 'success')
            } catch(e) {
                messageStore.addMessage('Un compte existe déjà avec cet identifiant', 'error')
                console.error(e)
            }
        }
    }
})

interface RegisterInfo {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirm: string
}