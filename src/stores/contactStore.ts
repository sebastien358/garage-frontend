import {defineStore} from "pinia";
import axios from "axios";
import {useMessageStore} from "@/stores/messageStore";

export const useContactStore = defineStore('contactStore', {
    state: () => {
        return {
            contacts: [],
            editContact: null
        }
    },
    actions: {
        async initContact() {
            this.editContact = {
                reference: '',
                firstName: '',
                lastName: '',
                email: '',
                tel: '',
                message: ''
            }
        },
        async contactCreate(id: number) {
            const messageStore = useMessageStore()
            const formData = new FormData()
            formData.append('reference', this.editContact.reference)
            formData.append('firstName', this.editContact.firstName)
            formData.append('lastName', this.editContact.lastName)
            formData.append('email', this.editContact.email)
            formData.append('tel', this.editContact.tel)
            formData.append('message', this.editContact.message)
            try {
                await axios.post(`https://127.0.0.1:8000/contact/new/${id}`, formData)
                messageStore.addMessage('Votre message a bien été envoyé, vous serez recontacté dans un délai de 24h', 'success')
            } catch(e) {
                messageStore.addMessage('Votre message n\'a pas pu être envoyé', 'error')
                console.error(e)
            }
        }
    }
})