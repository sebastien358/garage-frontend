import {defineStore} from "pinia";

interface Message {
    message: string
    type: string
}

export const useMessageStore = defineStore('messageStore', {
    state: (): Message => {
        return {
            message: null,
            type: null
        }
    },
    actions: {
        addMessage(message, error) {
            this.message = message
            this.type = error
        },
        initMessage() {
            this.message = null
            this.type = null
        }
    }
})
