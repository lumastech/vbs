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
