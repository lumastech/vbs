<template>

    <Head title="Savings" />
    <div class="max-w-7xl mx-auto px-2">
        <div class="flex justify-between gap-4 mb-4 place-items-center">
            <h2 class="text-xl font-bold">Savings</h2>
            <Link href="savings/create"
                class="rounded bg-secondary-500 text-white hover:bg-secondary-600 transition border border-secondary-500 px-4 py-2">
            <i class="mr-2 fa-solid fa-plus"></i>
            <span>Apply</span>
            </Link>
        </div>

        <section>
            <h3 class="text-lg font-semibold text-gray-800 mb-4">Your Saving Applications</h3>
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <table class="w-full">
                    <thead>
                        <tr>
                            <th class="text-left py-2">Date</th>
                            <th class="text-left py-2">Amount</th>
                            <th class="text-left py-2">Interest Rate</th>
                            <th class="text-left py-2">Monthly</th>
                            <th class="text-left py-2">Total Earnings</th>
                            <th class="text-left py-2">Status</th>
                            <th class="text-left py-2">Term</th>
                            <th class="text-left py-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="saving in savings.data" :key="saving.id" class="border-t">
                            <td class="py-2">{{new Date(saving.created_at).getDate() }}.{{ (new
                                Date(saving.created_at).getMonth())+1 }}.{{ new Date(saving.created_at).getFullYear() }}
                            </td>
                            <td class="py-2">{{ saving.amount }}</td>
                            <td class="py-2">{{ saving.rate }}%</td>
                            <td class="py-2">{{ Math.round((((saving.rate / 100) * saving.amount) +
                                Number.parseInt(saving.amount)) / Number.parseInt(saving.term)).toFixed(2) }}</td>
                            <td class="py-2">{{ ((saving.rate / 100) * saving.amount) + Number.parseInt(saving.amount) }}</td>
                            <td class="py-2">{{ saving.status }}</td>
                            <td class="py-2">{{ saving.term }} months</td>
                            <td class="py-2">
                                <dropdown-menu :overlay="false" class="rounded overflow-hidde">
                                    <template #trigger>
                                        <button class="mr-2 text-sm">MENU <i class="fas fa-angle-down"></i></button>
                                    </template>
                                    <template #body>
                                        <Link :href="route('savings.show', saving)"
                                            class="block w-full hover:bg-secondary-200 text-sm p-2 transition">View
                                        </Link>
                                        <Link :href="route('savings.edit', saving)"
                                            class="block w-full hover:bg-secondary-200 text-sm p-2 transition">Update
                                        </Link>
                                        <Link v-if="saving.status != 'Approved'" :href="`savings/approve/${saving.id}/Approved`"
                                            class="block w-full hover:bg-secondary-200 text-sm p-2 transition">Approve
                                        </Link>
                                        <Link v-if="saving.status == 'pending'" :href="`savings/approve/${saving.id}/Rejected`"
                                            class="block w-full hover:bg-secondary-200 text-sm p-2 transition">Reject
                                        </Link>
                                        <Link :href="route('savings.destroy', saving)" method="delete"
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
        savings: Object,
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