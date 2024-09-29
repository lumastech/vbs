<template>

    <Head title="Loans" />
    <div class="max-w-7xl mx-auto px-2">
        <div class="flex justify-between gap-4 mb-4 place-items-center">
            <h2 class="text-xl font-bold">Loans</h2>
            <Link href="loans/create"
                class="rounded bg-secondary-500 text-white hover:bg-secondary-600 transition border border-secondary-500 px-4 py-2">
            <i class="mr-2 fa-solid fa-plus"></i>
            <span>Apply</span>
            </Link>
        </div>

        <section>
            <h3 class="text-lg font-semibold text-gray-800 mb-4">Your Loan Applications</h3>
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <table class="w-full">
                    <thead>
                        <tr>
                            <th class="text-left py-2">Date</th>
                            <th class="text-left py-2">Amount</th>
                            <th class="text-left py-2">Interest Rate</th>
                            <th class="text-left py-2">Pay/Month</th>
                            <th class="text-left py-2">Total Pay</th>
                            <th class="text-left py-2">Status</th>
                            <th class="text-left py-2">Term</th>
                            <th class="text-left py-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="loan in loans.data" :key="loan.id" class="border-t">
                            <td class="py-2">{{new Date(loan.created_at).getDate() }}.{{ (new
                                Date(loan.created_at).getMonth())+1 }}.{{ new Date(loan.created_at).getFullYear() }}
                            </td>
                            <td class="py-2">{{ loan.amount }}</td>
                            <td class="py-2">{{ loan.rate }}%</td>
                            <td class="py-2">{{ Math.round((((loan.rate / 100) * loan.amount) +
                                Number.parseInt(loan.amount)) / Number.parseInt(loan.term)).toFixed(2) }}</td>
                            <td class="py-2">{{ ((loan.rate / 100) * loan.amount) + Number.parseInt(loan.amount) }}</td>
                            <td class="py-2">{{ loan.status }}</td>
                            <td class="py-2">{{ loan.term }} months</td>
                            <td class="py-2">

                                <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider"
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    type="button">Action <svg class="w-2.5 h-2 ms-3" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>

                                <!-- Dropdown menu -->
                                <div id="dropdownDivider"
                                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownDividerButton">
                                        <li>
                                            <a href="#"
                                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                        </li>
                                    </ul>
                                    <div class="py-2">
                                        <a href="#"
                                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated
                                            link</a>
                                    </div>
                                </div>

                            </td>
                        </tr>
                    </tbody>
                </table>
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
        loans: Object,
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