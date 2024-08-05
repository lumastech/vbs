<template>

    <Head title="DASHBOARD" />
    <div class="max-w-7xl mx-auto px-2">
        <section class="mb-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">Account Overview</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h4 class="text-gray-800 font-semibold">Total Savings</h4>
                    <p class="text-gray-600 mt-2">$5,000</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h4 class="text-gray-800 font-semibold">Total Loans</h4>
                    <p class="text-gray-600 mt-2">$2,000</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h4 class="text-gray-800 font-semibold">Total Transactions</h4>
                    <p class="text-gray-600 mt-2">25</p>
                </div>
            </div>
        </section>

        <!-- Recent Activities -->
        <section>
            <h3 class="text-lg font-semibold text-gray-800 mb-4">Recent Activities</h3>
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <ul>
                    <li class="flex justify-between border-b py-2">
                        <span class="text-gray-600">Deposited $200</span>
                        <span class="text-gray-400">2 days ago</span>
                    </li>
                    <li class="flex justify-between border-b py-2">
                        <span class="text-gray-600">Loan repayment $50</span>
                        <span class="text-gray-400">5 days ago</span>
                    </li>
                    <li class="flex justify-between border-b py-2">
                        <span class="text-gray-600">Withdrawn $100</span>
                        <span class="text-gray-400">1 week ago</span>
                    </li>
                    <li class="flex justify-between py-2">
                        <span class="text-gray-600">Deposited $300</span>
                        <span class="text-gray-400">2 weeks ago</span>
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