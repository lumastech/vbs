<template>

    <Head title="Invoice" />
    <header class="bg-secondary-500 relative pb-24 ">
        <Navbar />

        <!-- dynamic colousel -->
        <div class="absolute top-0 left-0 colousel-bg h-96">
        </div>
        <InvoicePreview :invoice="invoice" />
        <div class="max-w-4xl mx-auto p-2">
            <button @click="iframe=true"
                class="bg-primary-600 text-white px-4 py-2 rounded text-2xl w-full font-bold block text-center mt-4 hover:bg-primary-700 transition">
                PROCEED</button>
        </div>
    </header>

    <!-- footer -->
    <Footer />
    <Modal :show="iframe" maxWidth="md" class="z-10 loading-bg">
        <did class="flex border-b">
            <h2 class="flex-auto self-center px-2 font-bold">BroadPay Checkout</h2>
            <button @click="onFrameClosed()" class="text-red-500 px-2 hover:bg-red-100 transition"><i class="fas fa-times"></i></button>
        </did>
        <iframe ref="frame" @load="loaded=false" :src="invoice.payment_link" frameborder="0" class="w-full h-[26rem] loading-bg"></iframe>
        <did class="flex border-t">
            <h2 class="flex-auto self-center px-2 font-bold"></h2>
            <button @click="onFrameClosed()" class="text-gray-500 px-2 m-1 hover:bg-red-100 transition rounded border"><i class="fas fa-times"></i> Close</button>
        </did>
    </Modal>

    <LoadingAnim :show="ShowLoaderAnim" />
</template>

<script>
import Navbar from '@/Components/Navbar.vue';
import Footer from '@/Components/Footer.vue';
import Modal from "@/Components/Modal.vue";
import LoadingAnim from "@/Components/LoadingAnim.vue";
import InvoicePreview from "@/Components/InvoicePreview.vue";

import { Link, Head, router } from '@inertiajs/vue3'
import { ref } from 'vue';
export default {
    components: { Head, Link, Navbar, Footer, Modal, InvoicePreview, LoadingAnim },
    props: {
        invoice:Object
    },
    setup(props) {
        const iframe = ref(false);
        const frame = ref()
        const ShowLoaderAnim = ref(false);

        const checkPayment = () => {
            ShowLoaderAnim.value = true;
             router.post(`/invoice-invst`, {'txn_ref': props.invoice.transactionReference}, {
                onError: (err) => {
                },
                onSuccess: (res) => {
                    console.log(res.data);
                },
                onFinish: (res) => {
                    ShowLoaderAnim.value = false;
                    // console.log(res);
                },
                preserveScroll: true,
            });
        }

        const onFrameClosed = () => {
            iframe.value = false;
            checkPayment();
        }
        return { iframe, frame, onFrameClosed, ShowLoaderAnim }
    },
}
</script>

<style>
.colousel-bg{
    background-image: url("./../../assets/landing_cover.jpg");
    background-size: cover;
    background-position: 50%;
}

.loading-bg{
    background-image: url("../../assets/loading_bg.gif");
    background-size: 100px;
    background-repeat: no-repeat;
    background-position: 50%;
}
</style>

