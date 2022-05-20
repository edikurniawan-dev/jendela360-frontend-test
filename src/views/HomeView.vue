<script>
import { mapActions, mapState } from 'pinia';
import { useOrderStore } from '@/stores/order';

export default {
    methods: {
        ...mapActions(useOrderStore, ['increment', 'order']),
    },
};
</script>

<template>
    <main>
        <form
            @submit.prevent="
                order(typeOrder, name, email, phone, quantity, note)
            "
        >
            <div class="flex flex-col mt-3">
                <label for="" class="capitalize">sumber pesanan</label>
                <select
                    class="border rounded focus:outline-none px-2 py-1 focus:border-cyan-500"
                    v-model="typeOrder"
                    required
                >
                    <option value="">pilih</option>
                    <option value="1">Whatsapp</option>
                    <option value="2">Call</option>
                    <option value="3">Email</option>
                </select>
            </div>

            <div class="flex flex-col mt-3">
                <label for="" class="capitalize">Nama</label>
                <input
                    class="border rounded focus:outline-none px-2 py-1 focus:border-cyan-500"
                    type="text"
                    v-model="name"
                    required
                />
            </div>

            <div class="flex flex-col mt-3">
                <label for="" class="capitalize">email</label>
                <input
                    class="border rounded focus:outline-none px-2 py-1 focus:border-cyan-500"
                    type="text"
                    v-model="email"
                />
            </div>

            <div class="flex flex-col mt-3">
                <label for="" class="capitalize">no telfon</label>
                <input
                    class="border rounded focus:outline-none px-2 py-1 focus:border-cyan-500"
                    type="text"
                    v-model="phone"
                />
            </div>

            <div class="flex flex-col mt-3">
                <label for="" class="capitalize">jumlah roti</label>
                <input
                    class="border rounded focus:outline-none px-2 py-1 focus:border-cyan-500"
                    type="text"
                    v-model="quantity"
                />
            </div>

            <div class="flex flex-col mt-3">
                <label for="" class="capitalize">catatan</label>
                <textarea
                    class="border rounded focus:outline-none px-2 py-1 focus:border-cyan-500"
                    v-model="note"
                    rows="10"
                ></textarea>
            </div>

            <div class="flex justify-center mt-5">
                <button
                    type="submit"
                    class="px-5 py-2 rounded-md capitalize text-white bg-cyan-600"
                >
                    submit
                </button>
            </div>
        </form>
    </main>
</template>
