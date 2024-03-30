<template>
    <Head title="Contact us" />
    <header class="bg-secondary-500">
        <Navbar />
        <div class="max-w-7xl mx-auto p-2 pb-7">
            <h1 class="md:text-7xl text-4xl text-secondary-200 my-7 font-bold">Contact Us</h1>
            <!-- dynamic colousel -->
            <div class="colousel-bg h-64  rounded"></div>
        </div>
    </header>

    <!-- MAIN SECTION -->
    <section class="bg-secondary-800 text-secondary-10 py-16">
        <ContactForm />
    </section>

    <!-- footer -->
    <Footer />

</template>

<script>
import Navbar from '@/Components/Navbar.vue';
import Footer from '@/Components/Footer.vue';
import ProductItem from '@/Components/ProductItem.vue';
import {Link, Head} from '@inertiajs/vue3'
import ContactForm from '@/Components/ContactForm.vue'
export default {
    components: { Head, Link, Navbar, Footer, ProductItem, ContactForm },
}
</script>

<style>
.colousel-bg{
    background-image: url("./../../assets/landing_cover.jpg");
    background-size: cover;
    background-position: 50%;
}
</style>
