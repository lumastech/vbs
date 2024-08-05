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
                            <th class="text-left py-2">Status</th>
                            <th class="text-left py-2">Term</th>
                            <th class="text-left py-2">Purpose</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="loan in loans" :key="loan.id" class="border-t">
                            <td class="py-2">{{ loan.date }}</td>
                            <td class="py-2">{{ loan.amount }}</td>
                            <td class="py-2">{{ loan.status }}</td>
                            <td class="py-2">{{ loan.term }} months</td>
                            <td class="py-2">{{ loan.purpose }}</td>
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