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
                                <dropdown-menu :overlay="false" class="rounded overflow-hidde">
                                    <template #trigger>
                                        <button class="mr-2 text-sm">MENU <i class="fas fa-angle-down"></i></button>
                                    </template>
                                    <template #body>
                                        <Link :href="route('loans.show', loan)"
                                            class="block w-full hover:bg-secondary-200 text-sm p-2 transition">View
                                        </Link>
                                        <Link :href="route('loans.edit', loan)" v-if="loan.status == 'pending' || $page.props.auth.user.role == 'admin'"
                                            class="block w-full hover:bg-secondary-200 text-sm p-2 transition">Update
                                        </Link>
                                        <Link v-if="loan.status != 'Approved' && $page.props.auth.user.role == 'admin'"
                                            :href="`loans/approve/${loan.id}/Approved`"
                                            class="block w-full hover:bg-secondary-200 text-sm p-2 transition">Approve
                                        </Link>
                                        <Link v-if="loan.status == 'pending' && $page.props.auth.user.role == 'admin'"
                                            :href="`loans/approve/${loan.id}/Rejected`"
                                            class="block w-full hover:bg-secondary-200 text-sm p-2 transition">Reject
                                        </Link>
                                        <Link :href="route('loans.destroy', loan)" method="delete" v-if="$page.props.auth.user.role == 'admin'"
                                            class="block w-full hover:bg-secondary-200 text-sm p-2 transition">Delete
                                        </Link>
                                    </template>
                                </dropdown-menu>
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
import Dropdown from '@/Components/Dropdown.vue';
import { Link, Head } from '@inertiajs/vue3';
import ConfirmationModal from '@/Components/ConfirmationModal.vue';

export default {
    components: {
    DashboardLaout, Link, Head,
        ConfirmationModal, Dropdown
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