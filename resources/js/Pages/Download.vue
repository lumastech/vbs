<template>

    <Head title="Contact us" />
    <header class="bg-secondary-500">
        <Navbar />

        <!-- dynamic colousel -->
        <div class="colousel-bg h-96">

        </div>
    </header>

    <!-- MAIN SECTION -->
    <section class="bg-secondary-800 text-secondary-10 pt-9">
        <div class="mx-auto py-24 max-w-7xl">
            <div class="border border-gray-600 p-4 md:p-7 rounded-md mb-4">
                <p class="text-2xl md:text-4xl text-yellow-600">Your Order Number</p>
                <div class="flex">
                    <form action="{{ url('searchorder') }}" method="post">
                        <input type="text" name="order" value="{{ isset($order)? $order->order_number:old('order')}}"
                            class="border border-gray-600 rounded-l bg-gray-700" placeholder="Search order number">
                        <button type="submit"
                            class="border border-gray-600 py-2 px-4 my-4 bg-gray-600 text-white hover:bg-yellow-700 transition-all rounded-r">Search</button>
                    </form>
                </div>
            </div>

            <div v-if="invoice.id" class="border border-gray-600 p-4 md:p-9 rounded-md">
                @if($order->status == "success")
                <h2 v-if="invoice.status === 'paid'" class="text-yellow-600 mt-4 text-2xl md:text-4xl">Your Order</h2>
                <p>Bellow are your document download links, they will be avairrable within 48 hours</p>
                <p>Keep your order number safe in case you want to come back to download within 48 hours and for
                    future refference.</p>
                <h3 class="text-2xl mt-4">DOWNLOAD LINKS</h3>
                <h4>Images</h4>
                <div class="grid grid-cols-3">
                    <img v-for="image in images" :key="image.id" :src="image['url']" :alt="image['name']" class="aspect-video">
                </div>
                @endif

                @if($order->status == "failed")
                <h2 class="text-yellow-600 mt-4 text-2xl md:text-4xl">Failed!</h2>
                <p>Payment for this transaction did not go through!</p>
                @endif
            </div>
            @endif
            @if(!isset($order))
            <div class="border border-gray-600 p-4 md:p-9 rounded-md">
                <h2 class="text-yellow-600 mt-4 text-2xl md:text-4xl">Order not found!</h2>
                <p>Provided information did not march any order in our systen!</p>
            </div>
            @endif

        </div>
    </section>

    <!-- footer -->
    <Footer />

</template>

<script>
import Navbar from '@/Components/Navbar.vue';
import Footer from '@/Components/Footer.vue';
import ProductItem from '@/Components/ProductItem.vue';
import {Link, Head} from '@inertiajs/vue3'
export default {
    props: {
        invoice: Object,
        plan:Object,
        images: Array,
        files: Array
    },
    components: { Head, Link, Navbar, Footer, ProductItem },
}
</script>

<style>
.colousel-bg{
    background-image: url("./../../assets/landing_cover.jpg");
    background-size: cover;
    background-position: 50%;
}
</style>
