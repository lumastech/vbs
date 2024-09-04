<template>

    <Head title="Properties" />
    <header class="bg-secondary-500">
        <Navbar />
        <div class="max-w-7xl mx-auto p-2 pb-7">
            <h1 class="md:text-7xl text-4xl text-secondary-200 my-7 font-bold">Browse throught our properties</h1>
            <!-- dynamic colousel -->
            <div class="colousel-bg md:h-64 h-32 rounded"></div>
        </div>
    </header>

    <!-- MAIN SECTION -->
    <section class="bg-secondary-800 text-secondary-10 py-7 md:py-16">
        <!-- products list -->
        <div class="max-w-7xl mx-auto p-2">
            <h2 class="text-primary-600 text-3xl font-bold flex-auto">Trending Properties</h2>
            <p class="mb-4">Curated monthly, these properties represent current market trends.</p>

            <!-- products list -->
            <div class="grid md:grid-cols-3 gap-4">
                <Property v-for="item in items.data" :key="item.id"  :item="item"/>
            </div>
        </div>
    </section>

    <!-- footer -->
    <Footer />

</template>

<script>
import Navbar from '@/Components/Navbar.vue';
import Footer from '@/Components/Footer.vue';
import Property from '@/Components/Property.vue';
import {Link, Head} from '@inertiajs/vue3'
import ContactForm from '@/Components/ContactForm.vue'
export default {
    components: { Head, Link, Navbar, Footer, Property, ContactForm },
    props: {
        items: Object,
        new_itens: Object
    }
}
</script>

<style>
.colousel-bg{
    background-image: url("./../../assets/landing_cover.jpg");
    background-size: cover;
    background-position: 50%;
}
</style>
