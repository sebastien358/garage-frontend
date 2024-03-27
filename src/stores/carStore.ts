import {defineStore} from "pinia";
import axios from "axios";

export const useCarStore = defineStore('carStore', {
    state: () => {
        return {
            cars: [],
            editCar: null,
            filtersCars: {
                price: 0,
                mileage: 0,
                circulationYear: '1960'
            }
        }
    },
    actions: {
        async getCars() {
            const filters = []

            if (this.filtersCars.price !== 0) {
                filters.push(`price=${this.filtersCars.price}`)
            }
            if (this.filtersCars.mileage !== 0) {
                filters.push(`mileage=${this.filtersCars.mileage}`)
            }
            if (this.filtersCars.circulationYear !== '1960') {
                filters.push(`circulation_year=${this.filtersCars.circulationYear}`)
            }

            try {
                const response = await axios.get(`https://127.0.0.1:8000/car/list${filters.length ? '?' + filters.join('&') : ''}`, {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    }
                })
                this.cars = response.data
            } catch(e) {
                console.error(e)
            }
        },
        initFiltersCars() {
            this.filtersCars = {
                price: 0,
                mileage: 0,
                circulationYear: '1960'
            }
        },
        async getCurrentCar(id: number) {
            try {
                const response = await axios.get(`https://127.0.0.1:8000/car/details/${id}`, {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('token')
                    }
                })
                this.editCar = response.data
            } catch(e) {
                console.error(e)
            }
        }
    }
})