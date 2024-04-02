<template>
<div class="max-w-7xl mx-auto px-2">
    <Head title="Dashboard" />
    <div class="grid lg:grid-cols-4 grid-cols-2 gap-4">
        <Link href="/plans" class="bg-white/50 backdrop-blur hover:bg-secondary-500/50 hover:text-white transition rounded-md shadow-sm p-4 flex">
            <div class="flex-1">
                <h2 class="text-xs md:text-sm">PLANS</h2>
                <p class="md:text-3xl font-bold">{{ plans_count? plans_count : '00' }}</p>
            </div>
            <div class="self-center">
                <i class="text-teal-400 fa-solid fa-ticket md:text-6xl text-2xl"></i>
            </div>
        </Link>

        <Link href="/orders" class="bg-white/50 backdrop-blur hover:bg-secondary-500/50 hover:text-white transition rounded-md shadow-sm p-4 flex">
            <div class="flex-1">
                <h2 class="text-xs md:text-sm">SALES</h2>
                <p class="md:text-3xl font-bold"><span class="text-xs">ZMW</span> {{ sales? sales : '0.00' }}</p>
            </div>
            <div class="self-center">
                <i class="text-teal-400 fa-solid fa-file-invoice-dollar md:text-6xl text-2xl"></i>
            </div>
        </Link>

        <Link href="/visitors" class="bg-white/50 backdrop-blur hover:bg-secondary-500/50 hover:text-white transition rounded-md shadow-sm p-4 flex">
            <div class="flex-1">
                <h2 class="text-xs md:text-sm">VISITORS</h2>
                <p class="md:text-3xl font-bold">{{ visitors? visitors : '00' }}</p>
            </div>
            <div class="self-center">
                <i class="text-teal-400 fa-solid fa-users md:text-6xl text-2xl"></i>
            </div>
        </Link>

        <Link href="/user" class="bg-white/50 backdrop-blur hover:bg-secondary-500/50 hover:text-white transition rounded-md shadow-sm p-4 flex">
            <div class="flex-1">
                <h2 class="text-xs md:text-sm">USERS</h2>
                <p class="md:text-3xl font-bold">{{ users? users : '00' }}</p>
            </div>
            <div class="self-center">
                <i class="text-teal-400 fa-solid fa-users md:text-6xl text-2xl"></i>
            </div>
        </Link>
    </div>
</div>
</template>
<script>
import DashboardLayout from '../../Layouts/DashboardLaout.vue';
import { Link, Head } from '@inertiajs/vue3';
    export default {
        components:{DashboardLayout, Link, Head},
    layout: DashboardLayout,
    props: {
        auth:Object,
        users: Number,
        visitors: Number,
        plans: Object,
        sales: Number,
        plans_count: Number,
    },
    setup() {
        return {
            sideToggle() {
                document.getElementById('side').classList.toggle('hidden');
            }
        }
    }
    }
</script>
