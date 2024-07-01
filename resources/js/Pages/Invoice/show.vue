<template>

    <Head title="invoices" />
    <div class="max-w-7xl mx-auto px-2">
        <div class="flex justify-between gap-4 mb-4 place-items-center">
            <Link href="/invoice" class="text-xl md:text-2xl font-bold"> <i class="fas fa-arrow-left"></i> BACK TO INVOICES</Link>
        </div>

        <InvoicePreview :invoice="invoice" />
    </div>
</template>

<script>
import DashboardLaout from '@/Layouts/DashboardLaout.vue';
// import Inertia from '@inertiajs/vue3'
import { Link, Head } from '@inertiajs/vue3';
import ConfirmationModal from '@/Components/ConfirmationModal.vue';
import InvoicePreview from '@/Components/InvoicePreview.vue';

export default {
    components: {
    DashboardLaout, Link, Head,
        ConfirmationModal,
    InvoicePreview
},
    props: {
        invoice: Object,
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