import {defineStore} from "pinia";
import axios from "axios";
import {useMessageStore} from "@/stores/messageStore";

export const useContactAdminStore = defineStore('contactAdminStore', {
    state: () => {
        return {
            contacts: [],
            editContact: null
        }
    },
    actions: {
        async getContacts() {
            try {
                const response = await axios.get('https://127.0.0.1:8000/admin/contact/list', {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    }
                })
                this.contacts = response.data
                console.log(this.contacts)
            } catch(e) {
                console.error(e)
            }
        }
    }
})