<template>

    <Head title="invoices" />
    <div class="max-w-7xl mx-auto px-2">
        <div class="flex justify-between gap-4 mb-4 place-items-center">
            <h2 class="text-xl md:text-2xl font-bold">INVOICES</h2>
        </div>

        <div class="shadow rounded bg-white/90 p-2 overflow-x-scroll">
            <table class="w-full">
                <thead>
                    <tr>
                        <th class="border-b border-gray-200 px-2 py-1">
                            <i class="fa-solid fa-file-invoice-dollar"></i> Invoice N0
                        </th>
                        <th class="border-b border-gray-200 px-2 py-1 text-left">Name</th>
                        <th class="border-b border-gray-200 px-2 py-1 text-left">Email</th>
                        <th class="border-b border-gray-200 px-2 py-1 text-left">Phone</th>
                        <th class="border-b border-gray-200 px-2 py-1 text-left">Amount</th>
                        <th class="border-b border-gray-200 px-2 py-1 text-left">Status</th>
                        <th class="border-b border-gray-200 px-2 py-1 text-right">Action</th>
                    </tr>
                </thead>
                <tbody class="text-teal-500">
                    <tr v-for="invoice in invoices.data" :key="invoice.id" class="hover:bg-gray-50 transition">
                        <td class="border-b border-gray-200 px-2 py-3">
                            <Link :href="route('invoice.show', invoice)">{{ invoice.transactionReference }} </Link>
                        </td>
                        <td class="border-b border-gray-200 px-2 py-1 text-left">{{ invoice.customerFirstName }} {{
                            invoice.customerLastName }}</td>
                        <td class="border-b border-gray-200 px-2 py-1 text-left">
                            <a :href="`mailto:${invoice.customerEmail}`">{{ invoice.customerEmail }}</a>
                        </td>
                        <td class="border-b border-gray-200 px-2 py-3">{{ invoice.customerPhone }}</td>
                        <td class="border-b border-gray-200 px-2 py-3">{{ invoice.amount }} ZMW</td>
                        <td class="border-b border-gray-200 px-2 py-3"><span
                                class="bg-teal-500 px-2 rounded-md text-white">{{ invoice.status }}</span></td>
                        <td class="border-b border-gray-200 px-2 py-3 text-right">
                            <Link :href="route('invoice.destroy', invoice.id)" method="delete" class="text-red-500"
                                as="button" type="button" :onBefore="confirm">
                            <i class="fa-solid fa-trash-can"></i>
                            </Link>

                            <ConfirmationModal :show="0">
                                <template v-slot:title>
                                    <h4>Confirm action</h4>
                                </template>
                                <template v-slot:content>
                                    <p>Are you sure you want to delete this invoice?</p>
                                </template>
                                <template v-slot:footer>
                                    <button @click="close"
                                        class="text-gray-500 hover:bg-secondary-100 px-4 rounded transition">Cancel</button>
                                </template>
                            </ConfirmationModal>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
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
        invoices: Object,
    },
    layout: DashboardLaout,
    setup() {
        const confirm = () => window.confirm('Are you sure you want to delete this invoice?');

        return {
            confirm
        }
    }
};
</script>