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
                    <img :src="preview" alt="plan name" class="rounded aspect-video w-full" />
                    <div class="flex my-4 gap-3">
                        <div class="w-8 bg-secondary-200 rounded-l-xl"></div>
                        <div class="flex overflow-x-scroll flex-auto gap-4">
                            <img v-for="image in plan.images" :key="image.id" @click="preview = image.image"
                                :src="image.image" :alt="plan.name" class="w-24 h-24 rounded cursor-pointer" />
                        </div>
                        <div class="w-8 bg-secondary-200 rounded-r-xl"></div>
                    </div>

                    <h2 class="mt-9 my-4 font-bold">WHAT YOU'LL GET:</h2>
                    <div class="border border-gray-500 p-2 rounded">
                        <p>
                            This full set of construction drawings complies with
                            the minimum requirements of the National Building
                            Regulations for approval at any local authority in
                            Zambia.
                        </p>
                        <!-- <br> -->
                        <!-- <a href="#" class="border border-primary-200 px-2 py-1 rounded bg-primary-100 hover:bg-primary-100/10 transition-all duration-150 text-orange-500">View Samples</a> -->
                    </div>
                    <div class="mt-9 p-2 md:p-4 rounded border border-gray-500">
                        <!-- description -->
                        <h2 class="text-2xl">DESCRIPTION</h2>
                        <p>{{ plan.description }}</p>
                    </div>
                </div>
                <div class="col-span-2">
                    <h1 class="text-xl text-primary-600">
                        {{ plan.name }} - HOUSE PLANS
                    </h1>

                    <h2 class="text-3xl text-primary-600">
                        {{ numeralFormat(plan.price, "0,0[.]00 ZMW") }} ZMW
                    </h2>
                    <h4 class="font-bold mt-4">FEATURES</h4>
                    <table class="table-auto w-full space-y-3">
                        <tr class="border-b border-secondary-500">
                            <td>Bedrooms</td>
                            <td>{{ plan.bedrooms }} bedrooms</td>
                        </tr>
                        <tr class="border-b border-secondary-500">
                            <td>Bathrooms</td>
                            <td>{{ plan.bathrooms }}</td>
                        </tr>
                        <tr class="border-b border-secondary-500">
                            <td>Levels</td>
                            <td>{{ plan.levels }}</td>
                        </tr>
                        <tr class="border-b border-secondary-500">
                            <td>Style</td>
                            <td>{{ plan.style }}</td>
                        </tr>
                        <tr class="border-b border-secondary-500">
                            <td>Roof Finish</td>
                            <td>{{ plan.roof_finish }}</td>
                        </tr>
                        <tr class="border-b border-secondary-500">
                            <td>Area</td>
                            <td>{{ plan.area }}</td>
                        </tr>
                    </table>

                    <p class="mt-4 font-semibold">Extras</p>
                    <div class="form-control my-1">
                        <input checked disabled type="checkbox" name="extra1" id="extra1"
                            class="border-primary-600 text-primary-600 focus:ring-primary-600" />
                        <label class="hover:text-orange-600 transition-all duration-150" for="extra1">Electronic Drawing
                            File (.DWG)</label>
                    </div>
                    <div class="form-control my-1">
                        <input checked disabled type="checkbox" name="extra2" id="extra2"
                            class="border-primary-600 text-primary-600 focus:ring-primary-600" />
                        <label class="hover:text-orange-600 transition-all duration-150" for="extra2">Electronic 3D
                            Revit File</label>
                    </div>
                    <div class="form-control my-1">
                        <input checked disabled type="checkbox" name="extra3" id="extra3"
                            class="border-primary-600 text-primary-600 focus:ring-primary-600" />
                        <label class="hover:text-orange-600 transition-all duration-150" for="extra3">List of Materials
                            and Quantities</label>
                    </div>
                    <div class="form-control my-1">
                        <input checked disabled type="checkbox" name="extra4" id="extra4"
                            class="border-primary-600 text-primary-600 focus:ring-primary-600" />
                        <label class="hover:text-orange-600 transition-all duration-150" for="extra4">Electrical
                            Layout</label>
                    </div>

                    <p class="text-lg font-semibold mt-7">
                        PLEASE SPECIFIY THE CITY OR TOWN WHERE THE HOUSE WILL BE
                        BUILT:
                    </p>
                    <textarea name="" id="" rows="3"
                        class="w-full rounded mb-5 border-primary-500 focus:ring-2 focus:ring-primary-600 bg-gray-800 text-primary-700 form-textarea"></textarea>

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
            <div class="grid md:grid-cols-4 grid-cols-2 gap-4">
                <ProductItem v-for="item in plans.data" :key="item.id" :plan="item" />
            </div>
        </section>
    </section>

    <!-- ORDER MODAL -->
    <PaymentModal :show="orderModal" :item="plan" @close="orderModal = 0" @open="orderModal = 1" />

    <LoadingAnim :show="ShowLoaderAnim" />

    <!-- footer -->
    <Footer />
</template>

<script>
import Navbar from "@/Components/Navbar.vue";
import Modal from "@/Components/Modal.vue";
import Footer from "@/Components/Footer.vue";
import LoadingAnim from "@/Components/LoadingAnim.vue";
import PaymentModal from "@/Components/PaymentModal.vue";
import ProductItem from "@/Components/ProductItem.vue";
import { Link, Head, } from "@inertiajs/vue3";
import { ref } from "vue";
export default {
    components: { Head, Link, Navbar, Footer, ProductItem, Modal, LoadingAnim, PaymentModal, },
    props: {
        plans: Object,
        plan: Object,
        errs: Array,
    },
    setup(props) {
        const preview = ref(props.plan.images[0].image);
        const orderModal = ref(0);
        const ShowLoaderAnim = ref(0);

        return {
            preview,
            orderModal,
            ShowLoaderAnim,
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
