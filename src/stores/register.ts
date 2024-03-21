import {defineStore} from "pinia";
import axios from "axios";

export const useRegisterStore = defineStore('registerStore', {
    state: () => {
        return {
            editRegister: null
        }
    },
    actions: {
        initRegister() {
            this.editRegister = {
                email: '',
                password: '',
                confirm: ''
            }
        }
    }
})