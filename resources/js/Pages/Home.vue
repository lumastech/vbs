<template>
    <Head title="Home" />
    <header class="bg-secondary-500">
        <Navbar />

        <!-- dynamic colousel -->
        <div class="colousel-bg">
            <carousel
                :items-to-show="1"
                :wrapAround="true"
                :autoplay="3000"
                :touchDrag="reue"
                :transition="1000"
                :pauseAutoplayOnHover="true"
                class="relative"
            >
                <slide v-for="plan in plans.data" :key="plan.id">
                    <img
                    v-if="plan.images.length"
                        :src="plan.images[0].image"
                        :alt="plan.name"
                        class="aspect-video md:h-130 w-full"
                    />
                    <div
                        class="absolute bg-black/70 hover:bg-black/80 transition w-full h-full pt-"
                    >
                        <div class="md:absolute md:top-1/2 md:right-1/3">
                            <h1 class="text-xl md:text-4xl text-center text-secondary-100">
                                Welcome To Mfumu House Plans
                            </h1>
                            <p class="d-none md:flex txet-sm md:text-md text-center text-white max-w-2xl mx-auto">
                                If you are looking to Design or build your dream
                                home, you're in the right place. Mfumu house
                                plans offers a variety of ready-made house plans
                                created by Zambia's best floor plan designers
                                offering you a unique house plan at an
                                affordable price
                            </p>
                        </div>
                    </div>
                </slide>

                <template #addons>
                    <navigation class="text-white" />
                    <div class="absolute md:bottom-2 w-full">
                        <pagination class="mx-auto" />
                    </div>
                </template>
            </carousel>
        </div>
    </header>

    <!-- MAIN SECTION -->
    <section class="bg-secondary-800 text-secondary-10 pt-9">
        <!-- New House Plans -->
        <div class="max-w-7xl mx-auto p-4 bg-primary-700 rounded">
            <h1 class="text-4xl text-center text-secondary-100">
                Welcome To Mfumu House Plans
            </h1>
            <p class="text-center max-w-2xl mx-auto">
                If you are looking to Design or build your dream home, you're in
                the right place. Mfumu house plans offers a variety of
                ready-made house plans created by Zambia's best floor plan
                designers offering you a unique house plan at an affordable
                price
            </p>

            <!-- products list -->
            <div class="flex mt-9">
                <h2 class="text-primary-100 text-3xl font-bold flex-auto">
                    New House Plans
                </h2>
                <Link
                    :href="route('plan.list')"
                    class="self-center text-xs md:text-sm shrink-0 bg-secondary-800 rounded-r-full px-2 py-1"
                    >View All</Link
                >
            </div>
            <p class="mb-4">
                Explore our newest house plans added on a weekly basis.
            </p>

            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <ProductItem
                    v-for="plan in new_plans"
                    :key="plan.id"
                    :plan="plan"
                />
            </div>
        </div>

        <!-- Trending House Plans -->
        <div class="max-w-7xl mx-auto p-2 mt-16">
            <div class="flex">
                <h2 class="text-primary-600 text-3xl font-bold flex-auto">
                    Trending House Plans
                </h2>
                <Link
                    :href="route('plan.list')"
                    class="self-center text-xs md:text-sm shrink-0 bg-primary-800 rounded-r-full px-2 py-1"
                    >View All</Link
                >
            </div>
            <p class="mb-4">
                Curated monthly, these house plans represent current market
                trends.
            </p>

            <!-- products list -->
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <ProductItem
                    v-for="plan in plans.data"
                    :key="plan.id"
                    :plan="plan"
                />
            </div>
        </div>

        <!-- banner -->
        <div class="max-w-7xl mx-auto p-2 my-24">
            <div class="shadow">
                <div class="colousel-bg w-full h-64 rounded-t overflow-hidden">
                    <carousel
                        :items-to-show="1"
                        :wrapAround="true"
                        :autoplay="3000"
                        :touchDrag="reue"
                        :transition="1000"
                        :pauseAutoplayOnHover="true"
                        class="relative"
                    >
                        <slide
                            v-for="plan in plans.data"
                            :key="plan.id"
                            class="-ntranslat-y-32"
                        >
                            <img
                            v-if="plan.images.length"
                                :src="plan.images[0]"
                                :alt="plan.name"
                                class="object-fill h-full w-full top-0 left-0"
                            />
                        </slide>

                        <template #addons>
                            <navigation class="text-white" />
                        </template>
                    </carousel>
                </div>
                <div class="grid md:grid-cols-3 border-b-4 border-primary-700">
                    <div class="bg-secondary-900 p-4">
                        <i class="fas fa-home"></i>
                        <h5 class="text-2xl font-bold flex-auto">
                            Customize Any Plan
                        </h5>
                        <p>
                            You've found a house plan you really like, but you'd
                            like the rooms to be oriented differently. Or
                            perhaps you'd like to add another bedroom, an
                            office, a garage, or remove something? Our in-house
                            experts can customize your floor plans to meet your
                            exact needs!
                        </p>
                    </div>

                    <div
                        class="bg-primary-700 md:bg-secondary-900 border-x border-primary-700 p-4"
                    >
                        <i class="fas fa-home"></i>
                        <h5 class="text-2xl font-bold flex-auto">
                            Customize Any Plan
                        </h5>
                        <p>
                            You've found a house plan you really like, but you'd
                            like the rooms to be oriented differently. Or
                            perhaps you'd like to add another bedroom, an
                            office, a garage, or remove something? Our in-house
                            experts can customize your floor plans to meet your
                            exact needs!
                        </p>
                    </div>

                    <div class="bg-secondary-900 p-4">
                        <i class="fas fa-home"></i>
                        <h5 class="text-2xl font-bold flex-auto">
                            Customize Any Plan
                        </h5>
                        <p>
                            You've found a house plan you really like, but you'd
                            like the rooms to be oriented differently. Or
                            perhaps you'd like to add another bedroom, an
                            office, a garage, or remove something? Our in-house
                            experts can customize your floor plans to meet your
                            exact needs!
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- What you get -->
        <div class="max-w-7xl mx-auto p-2 mb-24">
            <div
                class="grid md:grid-cols-2 bg-secondary-900 shadow rounded overflow-hidden"
            >
                <img
                    src="../../assets/landing_cover.jpg"
                    alt="What you get"
                    class="w-full"
                />
                <div class="bg-primary-700 px-4 py-7">
                    <h4 class="text-2xl font-bold flex-auto">What you get</h4>
                    <hr class="my-2" />
                    <ul class="space-y-3">
                        <li>
                            <i
                                class="fas fa-check-circle text-secondary-100"
                            ></i>
                            Floor plan, Roof plan
                        </li>
                        <li>
                            <i
                                class="fas fa-check-circle text-secondary-100"
                            ></i>
                            Sections and Elevations
                        </li>
                        <li>
                            <i
                                class="fas fa-check-circle text-secondary-100"
                            ></i>
                            Door and window schedule
                        </li>
                        <li>
                            <i
                                class="fas fa-check-circle text-secondary-100"
                            ></i>
                            Drainage and Plumbing plans
                        </li>
                        <li>
                            <i
                                class="fas fa-check-circle text-secondary-100"
                            ></i>
                            Electrical drawings
                        </li>
                        <li>
                            <i
                                class="fas fa-check-circle text-secondary-100"
                            ></i>
                            Structural drawings
                        </li>
                        <li>
                            <i
                                class="fas fa-check-circle text-secondary-100"
                            ></i>
                            Bills of quantities - without rates
                        </li>
                        <li>
                            <i
                                class="fas fa-check-circle text-secondary-100"
                            ></i>
                            Schedule of materials - without rates
                        </li>
                    </ul>
                    <p class="mt-2">
                        <i>*Drawings Delivered in PDF and DWG Format</i>
                    </p>
                </div>
            </div>
        </div>

        <!-- about us -->
        <div class="colousel-bg">
            <div class="backdrop-blur bg-secondary-900/70">
                <div class="max-w-7xl mx-auto px-2 py-16">
                    <h4 class="text-2xl font-bold flex-auto">
                        Mfumu house plans
                    </h4>
                    <p>
                        If you are looking to Design or build your dream home,
                        you're in the right place. Mfumu house plans offers a
                        variety of ready-made house plans created by Zambia's
                        best floor plan designers offering you a unique house
                        plan at an affordable price
                    </p>

                    <div class="grid md:grid-cols-2 gap-4 my-9">
                        <div>
                            <h5 class="text-2xl font-bold flex-auto">
                                Customize any plan
                            </h5>
                            <p>
                                If you have found a plan that you already like
                                but you would like to add another bedroom,
                                office, garage or remove a room our inhouse
                                designers will be able to customise the plan to
                                meet your needs.
                            </p>
                        </div>
                        <div>
                            <h5 class="text-2xl font-bold flex-auto">
                                Develop new plan
                            </h5>
                            <p>
                                If you have not found a plan that meets your
                                requirements, you have the option of designing a
                                house from scratch using our inhouse floor plan
                                designers.
                            </p>
                        </div>
                    </div>

                    <p>
                        After you have selected a plan that you like, you have
                        the option of building with us. For information on our
                        construction services, kindly click here. New house
                        plans will be curated and uploaded monthly that reflect
                        market trends.
                    </p>

                    <div class="grid md:grid-cols-2 gap-4 mt-4">
                        <ul class="space-y-3">
                            <li>1. Floor plan,Roof plan</li>
                            <li>2. Door and window schedule</li>
                            <li>3. Plumbing and electrical drawings</li>
                            <li>4. Structural design</li>
                            <li>5. Bill of quantities- without rates.</li>
                            <li>6. 3D render of the plan</li>
                        </ul>

                        <hr
                            class="border-t border-secondary-500 my-4 md:hidden"
                        />

                        <ul class="space-y-3">
                            <li>
                                <i class="fas fa-home"></i> 1 bedroom house
                                plans
                            </li>
                            <li>
                                <i class="fas fa-home"></i> 2 bedroom house
                                plans
                            </li>
                            <li>
                                <i class="fas fa-home"></i> 3 bedroom house
                                plans
                            </li>
                            <li>
                                <i class="fas fa-home"></i> 4 bedroom house
                                plans
                            </li>
                            <li>
                                <i class="fas fa-home"></i> 5 bedroom house
                                plans
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- footer -->
    <Footer />
</template>

<script>
import Navbar from "@/Components/Navbar.vue";
import Footer from "@/Components/Footer.vue";
import ProductItem from "@/Components/ProductItem.vue";
import { Link, Head } from "@inertiajs/vue3";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
    components: {
        Head,
        Link,
        Navbar,
        Footer,
        ProductItem,
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    props: {
        plans: Object,
        new_plans: Object,
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
