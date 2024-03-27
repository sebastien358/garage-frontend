import {defineStore} from "pinia";
import axios from "axios";

export const useCarAdminStore = defineStore('carAdminStore', {
    state: () => {
        return {
            cars: [],
            editCar: null
        }
    },
    actions: {
        async getCars() {
            try {
                const response = await axios.get('https://127.0.0.1:8000/admin/car/list', {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    }
                })
                this.cars = response.data
            } catch(e) {
                console.error(e)
            }
        },
        async getCurrentCar(id: number) {
            try {
                const response = await axios.get(`https://127.0.0.1:8000/admin/car/details/${id}`, {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    }
                })
                this.editCar = response.data
            } catch(e) {
                console.log(this.editCar)
                console.error(e)
            }
        },
        async initCar() {
            this.editCar = {
                model: '',
                reference: '',
                mileage: '',
                price: '',
                circulationYear: '',
                fuel: '',
                pictures: []
            }
        },
        async createCar(pictures: Object) {
            const formData = new FormData()
            formData.append('model', this.editCar.model)
            formData.append('reference', this.editCar.reference)
            formData.append('price', this.editCar.price)
            formData.append('circulationYear', this.editCar.circulationYear)
            formData.append('mileage', this.editCar.mileage)
            formData.append('fuel', this.editCar.fuel)
            for(let i = 0; i < pictures.length; i++) {
                formData.append(`pictures_${i}`, pictures[i])
            }

            try {
                await axios.post(`https://127.0.0.1:8000/admin/car/new`, formData,{
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    }
                })
                await this.initCar()
            } catch(e) {
                console.error(e)
            }

            await this.getCars()
        },
        async deleteCar(id) {
            try {
                await axios.delete(`https://127.0.0.1:8000/admin/car/delete/${id}`, {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    }
                })
            } catch(e) {
                console.log(e)
            }

            await this.getCars()
        }
    }
})