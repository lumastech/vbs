<template>

    <Head title="Loans" />
    <div class="max-w-7xl mx-auto px-2">
        <div class="flex justify-between gap-4 mb-4 place-items-center">
            <h2 class="text-xl font-bold">Transactions</h2>
        </div>

        <section>
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <table class="w-full">
                    <thead>
                        <tr>
                            <th class="text-left py-2">Type</th>
                            <th class="text-left py-2">Amount</th>
                            <th class="text-left py-2">Description</th>
                            <th class="text-left py-2">Date</th>
                            <th class="text-left py-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in trans.data" :key="item.id" class="border-t">
                            <td class="py-2">{{ item.type }}</td>
                            <td class="py-2">{{ item.amount }}</td>
                            <td class="py-2">{{ item.description }}</td>
                            <td class="py-2">{{new Date(item.created_at).getDate() }}.{{ (new
                                Date(item.created_at).getMonth())+1 }}.{{ new Date(item.created_at).getFullYear() }}
                            </td>

                            <td class="py-2">

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
        trans: Object,
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