<template>

    <Head title="DASHBOARD" />
    <div class="max-w-7xl mx-auto px-2">
        <section class="mb-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">Account Overview</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h4 class="text-gray-800 font-semibold">Total Savings</h4>
                    <p class="text-gray-600 mt-2">K{{ totalSavings }}</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h4 class="text-gray-800 font-semibold">Total Loans</h4>
                    <p class="text-gray-600 mt-2">K {{ totalLoans }} </p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h4 class="text-gray-800 font-semibold">Total Transactions</h4>
                    <p class="text-gray-600 mt-2"> {{ trans_count }} </p>
                </div>
            </div>
        </section>

        <!-- Recent Activities -->
        <section>
            <h3 class="text-lg font-semibold text-gray-800 mb-4">Recent Activities</h3>
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <ul>
                    <li v-for="item in trans.data" class="flex space-x-4 border-b py-2">
                        <span class="text-gray-600 font-bold">{{ item.type }} - {{ item.amount }}</span>
                        <span class="flex-auto text-gray-400">{{ item.description }}</span>
                        <span class="text-gray-400">{{ item.created_at }}</span>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
import DashboardLaout from '@/Layouts/DashboardLaout.vue';
// import Inertia from '@inertiajs/vue3'
import { Link, Head } from '@inertiajs/vue3';
import ConfirmationModal from '@/Components/ConfirmationModal.vue';

export default {
    components: {
        DashboardLaout, Link, Head,
        ConfirmationModal
    },
    props: {
        users: Object,
        trans: Object,
        totalSavings: Number,
        totalLoans: Number,
        trans_count: Number
    },
    layout: DashboardLaout,
    setup() {
        const confirm = () => window.confirm('Are you sure you want to delete this user?');

        return {
            confirm
        }
    }
};
</script>