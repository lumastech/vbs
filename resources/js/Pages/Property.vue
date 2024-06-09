<template>

    <Head title="Details" />
    <header class="bg-secondary-500">
        <Navbar />
    </header>

    <!-- MAIN SECTION -->
    <section class="bg-secondary-800 text-secondary-10 pt-9">
        <section class="max-w-7xl mx-auto p-2">
            <div class="grid md:grid-cols-6 gap-3">
                <div class="md:col-span-4">
                    <!-- dynamic colousel -->
                    <img :src="preview" :alt="item.title" class="rounded aspect-video w-full" />
                    <div class="flex my-4 gap-3">
                        <div class="w-8 bg-secondary-200 rounded-l-xl"></div>
                        <div class="flex overflow-x-scroll flex-auto gap-4">
                            <img v-for="image in item.images" :key="image.id" @click="preview = image.image"
                                :src="image.image" :alt="item.title" class="w-24 h-24 rounded cursor-pointer" />
                        </div>
                        <div class="w-8 bg-secondary-200 rounded-r-xl"></div>
                    </div>

                    <h2 class="mt-9 my-4 font-bold">PROPERTY DETAILS</h2>

                    <div class="mt-9 p-2 md:p-4 rounded border border-gray-500">
                        <!-- description -->
                        <h2 class="text-2xl">DESCRIPTION</h2>
                        <p>{{ item.description }}</p>
                    </div>
                </div>
                <div class="col-span-2">
                    <h1 class="text-xl text-primary-600">
                        {{ item.title }}
                    </h1>

                    <h2 class="text-3xl text-primary-600">
                        {{ numeralFormat(item.price, "0,0[.]00 ZMW") }} ZMW
                    </h2>
                    <h4 class="font-bold mt-4">DETAILS</h4>
                    <table class="table-auto w-full space-y-3">
                        <tr class="border-b border-secondary-500">
                            <td>Bedrooms</td>
                            <td>{{ item.bedrooms }} bedrooms</td>
                        </tr>
                        <tr class="border-b border-secondary-500">
                            <td>Bathrooms</td>
                            <td>{{ item.bathrooms }}</td>
                        </tr>
                        <tr class="border-b border-secondary-500">
                            <td>Address</td>
                            <td>{{ item.address }}</td>
                        </tr>
                        <tr class="border-b border-secondary-500">
                            <td>City</td>
                            <td>{{ item.city }}</td>
                        </tr>
                        <tr class="border-b border-secondary-500">
                            <td>State</td>
                            <td>{{ item.state }}</td>
                        </tr>
                        <tr class="border-b border-secondary-500">
                            <td>Country</td>
                            <td>{{ item.country }}</td>
                        </tr>
                        <tr class="border-b border-secondary-500">
                            <td>Area <sup>m2</sup> </td>
                            <td>{{ item.lot_size }}<sup>m2</sup></td>
                        </tr>
                    </table>

                    <div class="mt-9 p-2  rounded border border-gray-500">
                        <p class="text-xl font-semibold">FEATURES</p>
                        <div class="grid grid-cols-2 gap-4 border-b border-secondary-300 my-2">
                            <p>FEATURE NAME</p>
                            <p>FEATURE VALUE</p>
                        </div>
                        <div v-for="feature in features" :key="feature.id" class="grid grid-cols-2 gap-4">
                            <p>{{feature.name}}</p>
                            <p>{{feature.value}}</p>
                        </div>
                    </div>


                    <div class="grid grid-cols-2 gap-4">
                        <button @click="orderModal = 1"
                            class="bg-primary-500 center text-white p-2 rounded mt-4 hover:bg-primary-700 transition-all duration-300">
                            Buy Now
                        </button>
                        <button disabled
                            class="disabled:bg-gray-300 bg-orange-300 center text-white p-2 rounded mt-4 hover:bg-orange-500 transition-all duration-300">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <hr class="max-w-7xl mx-auto border-t border-secondary-600 my-12" />

        <section class="max-w-7xl mx-auto p-2 pb-24">
            <h2 class="text-xl font-bold my-4 uppercase">You may also like</h2>
            <div class="grid md:grid-cols-3 gap-4">
                <Property v-for="item in items.data" :key="item.id" :item="item" />
            </div>
        </section>
    </section>

    <!-- ORDER MODAL -->
    <PaymentModal :show="orderModal" :item="item" @close="orderModal=0" @open="orderModal=1" />

    <!-- footer -->
    <Footer />
</template>

<script>
import Navbar from "@/Components/Navbar.vue";
import Modal from "@/Components/Modal.vue";
import Footer from "@/Components/Footer.vue";
import Property from "@/Components/Property.vue";
import PaymentModal from "@/Components/PaymentModal.vue";
import { Link, Head} from "@inertiajs/vue3";
import { ref } from "vue";
export default {
    components: { Head, Link, Navbar, Footer, Property, Modal, PaymentModal },
    props: {
        items: Object,
        item: Object,
        errs: Array,
        feature: Object,
    },
    setup(props) {
        const preview = ref(props.item.images[0].image);
        const orderModal = ref(0);
        return {
            preview,
            orderModal,
        };
    },
};
</script>

<style>
.colousel-bg {
    background-image: url("./../../assets/landing_cover.jpg");
    background-size: cover;
    background-position: 50%;
}
</style>
