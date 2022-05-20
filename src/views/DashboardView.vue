<script>
import { mapActions, mapGetters, mapState } from 'pinia';
import { useOrderStore } from '@/stores/order';
import { ref } from 'vue';

export default {
    computed: {
        ...mapState(useOrderStore, ['filter', 'orderType']),

        ...mapGetters(useOrderStore, ['getOrder', 'getTotal']),
    },
    methods: {
        ...mapActions(useOrderStore, ['increment', 'order']),
    },
};
</script>

<template>
    <main>
        <div class="flex justify-between mt-5">
            <button
                v-on:click="getOrder(1)"
                class="bg-cyan-600 px-6 py-2 rounded-md text-white"
            >
                wa (total {{ getTotal(1) }})
            </button>
            <button
                v-on:click="getOrder(2)"
                class="bg-cyan-600 px-6 py-2 rounded-md text-white"
            >
                call (total {{ getTotal(2) }})
            </button>
            <button
                v-on:click="getOrder(3)"
                class="bg-cyan-600 px-6 py-2 rounded-md text-white"
            >
                email (total {{ getTotal(3) }})
            </button>
        </div>

        <div v-if="orderType == 1" class="mt-5">
            <table
                class="w-full border"
                v-for="filter in filter"
                :key="filter.id"
            >
                <tr>
                    <td>Nama</td>
                    <td>Email</td>
                    <td>No Hp</td>
                    <td>Jumlah Roti</td>
                    <td>Keterangan</td>
                </tr>
                <tr>
                    <td>{{ filter.name }}</td>
                    <td>{{ filter.email }}</td>
                    <td>{{ filter.phone }}</td>
                    <td>{{ filter.quantity }}</td>
                    <td>{{ filter.note }}</td>
                </tr>
            </table>
        </div>
        <div v-if="orderType == 2" class="mt-5">
            <table
                class="w-full border"
                v-for="filter in filter"
                :key="filter.id"
            >
                <tr>
                    <td>Nama</td>
                    <td>Email</td>
                    <td>No Hp</td>
                    <td>Jumlah Roti</td>
                    <td>Keterangan</td>
                </tr>
                <tr>
                    <td>{{ filter.name }}</td>
                    <td>{{ filter.email }}</td>
                    <td>{{ filter.phone }}</td>
                    <td>{{ filter.quantity }}</td>
                    <td>{{ filter.note }}</td>
                </tr>
            </table>
        </div>
        <div v-if="orderType == 3" class="mt-5">
            <table
                class="w-full border"
                v-for="filter in filter"
                :key="filter.id"
            >
                <tr>
                    <td>Nama</td>
                    <td>Email</td>
                    <td>No Hp</td>
                    <td>Jumlah Roti</td>
                    <td>Keterangan</td>
                </tr>
                <tr>
                    <td>{{ filter.name }}</td>
                    <td>{{ filter.email }}</td>
                    <td>{{ filter.phone }}</td>
                    <td>{{ filter.quantity }}</td>
                    <td>{{ filter.note }}</td>
                </tr>
            </table>
        </div>
    </main>
</template>
