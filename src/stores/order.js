import { defineStore } from 'pinia';

export const useOrderStore = defineStore('orderID', {
    state: () => ({
        array: [],
        orderType: '',
        filter: [],
    }),

    getters: {
        getOrder: (state) => (id) => {
            state.orderType = id;
            state.filter = state.array.filter(
                (element) => element.typeOrder == id,
            );
        },

        getTotal: (state) => (id) => {
            let total;
            total = state.array.filter((element) => element.typeOrder == id);
            return JSON.parse(JSON.stringify(total)).length;
        },
    },

    actions: {
        order(typeOrder, name, email, phone, quantity, note) {
            this.array.push({
                id: this.array.length + 1,
                typeOrder: typeOrder,
                name: name,
                email: email,
                phone: phone,
                quantity: quantity,
                note: note,
            });
        },
    },
});
