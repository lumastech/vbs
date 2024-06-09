<template>

    <Head title="Contact us" />
    <header class="bg-secondary-500 relative pb-24 ">
        <Navbar />

        <!-- dynamic colousel -->
        <div class="absolute top-0 left-0 colousel-bg h-96">
        </div>
        <div class="p-2">
            <div
                class="mt-24 scale-80 overflow-x-scroll md:scale-100 invoice max-w-4xl mx-auto bg-white text-secondary-500 shadow">
                <h1 class="px-2 md:px-16 py-7 bg-primary-600 text-white font-bold text-2xl">INVOICE</h1>
                <div class="md:flex py-9 px-2 md:px-16">
                    <div class="flex-auto">
                        <p class="mt-16 font-bold">Bill To:</p>
                        <p>{{ invoice.customerFirstName }}, {{ invoice.customerLastName }}</p>
                        <p>{{ invoice.customerPhone }}</p>
                        <p>{{ invoice.customerEmail }}</p>
                    </div>
                    <div>
                        <img src="../../assets/logo_yellow.png" alt="Mfumu" class="w-56 mb-4">
                        <p>Invoice N0. {{ invoice.transactionReference }}</p>
                        <p>Issue Date: {{ invoice.created_at.split("T")[0] }}</p>
                        <p>Due Date: {{ invoice.created_at.split("T")[0] }}</p>
                    </div>
                </div>
                <div class="px-2 md:px-16">
                    <table class="table border">
                        <thead>
                            <tr class="bg-secondary-100">
                                <th>DESCRIPTIONS</th>
                                <th>QUANTITY</th>
                                <th>@ (ZMW)</th>
                                <th class="text-right">AMOUNT (ZMW)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{{ invoice.transactionName }}</td>
                                <td class="text-center">1</td>
                                <td class="text-center">{{ numeralFormat(invoice.amount, "0,0[.]00 ZMW") }} ZMW</td>
                                <td class="text-right">{{ numeralFormat(invoice.amount, "0,0[.]00 ZMW") }} ZMW</td>
                            </tr>
                            <tr>
                                <td>Electronic Drawing File (.DWG)</td>
                                <td class="text-center">-</td>
                                <td class="text-center">-</td>
                                <td class="text-right">-</td>
                            </tr>
                            <tr>
                                <td>Electronic 3D Revit File</td>
                                <td class="text-center">-</td>
                                <td class="text-center">-</td>
                                <td class="text-right">-</td>
                            </tr>
                            <tr>
                                <td>List of Materials and Quantities</td>
                                <td class="text-center">-</td>
                                <td class="text-center">-</td>
                                <td class="text-right">-</td>
                            </tr>
                            <tr>
                                <td>Electrical Layout</td>
                                <td class="text-center">-</td>
                                <td class="text-center">-</td>
                                <td class="text-right">-</td>
                            </tr>
                        </tbody>
                    </table>
                    <table class="table border md:w-1/2 ml-auto -mt-4 md:mb-96">
                        <tbody>
                            <tr class="text-xl">
                                <td></td>
                                <td>TOTAL</td>
                                <td class="text-center"></td>
                                <td class="text-right">{{ numeralFormat(invoice.amount, "0,0[.]00 ZMW") }} ZMW</td>
                            </tr>
                            <tr class="text-xl w-1/2 offset-2">
                                <td></td>
                                <td class="text-xl">TOTAL DUE: </td>
                                <td class="text-center"></td>
                                <td class="text-right">{{ numeralFormat(invoice.amount, "0,0[.]00 ZMW") }} ZMW</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p class="px-2 md:px-16 py-2 bg-primary-600 text-white">Thank you for your business</p>
            </div>
        </div>
        <div class="max-w-4xl mx-auto p-2">
            <Link :href="invoice.payment_link"
                class="bg-primary-600 text-white px-4 py-2 rounded text-2xl w-full font-bold block text-center mt-4 hover:bg-primary-700 transition">
            PROCEED</Link>
        </div>
    </header>

    <!-- footer -->
    <Footer />

</template>

<script>
import Navbar from '@/Components/Navbar.vue';
import Footer from '@/Components/Footer.vue';
import ProductItem from '@/Components/ProductItem.vue';
import {Link, Head} from '@inertiajs/vue3'
export default {
    components: { Head, Link, Navbar, Footer },
    props: {
        invoice:Object
    },
}
</script>

<style>
.colousel-bg{
    background-image: url("./../../assets/landing_cover.jpg");
    background-size: cover;
    background-position: 50%;
}
</style>
