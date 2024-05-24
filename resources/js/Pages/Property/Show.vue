<template>
<div class="max-w-7xl mx-auto px-2">
    <Head title="Dashboard" />
    <div class="grid lg:grid-cols-4 grid-cols-2 gap-4">
        <Link to="/" class="bg-white/50 backdrop-blur hover:bg-secondary-500/50 hover:text-white transition rounded-md shadow-sm p-4 flex">
            <div class="flex-1">
                <h2 class="">PLANS</h2>
                <p class="text-3xl font-bold">{{ plans_count? plans_count : '00' }}</p>
            </div>
            <div class="">
                <i class="fa-solid fa-ticket text-6xl"></i>
            </div>
        </Link>

        <Link to="/" class="bg-white/50 backdrop-blur hover:bg-secondary-500/50 hover:text-white transition rounded-md shadow-sm p-4 flex">
            <div class="flex-1">
                <h2 class="">SALES</h2>
                <p class="text-3xl font-bold">ZMW {{ sales? sales : '00' }}</p>
            </div>
            <div class="">
                <i class="fa-solid fa-file-invoice-dollar text-6xl"></i>
            </div>
        </Link>

        <Link to="/" class="bg-white/50 backdrop-blur hover:bg-secondary-500/50 hover:text-white transition rounded-md shadow-sm p-4 flex">
            <div class="flex-1">
                <h2 class="">VISITORS</h2>
                <p class="text-3xl font-bold">{{ visitors? visitors : '00' }}</p>
            </div>
            <div class="">
                <i class="fa-solid fa-users text-6xl"></i>
            </div>
        </Link>

        <Link to="/" class="bg-white/50 backdrop-blur hover:bg-secondary-500/50 hover:text-white transition rounded-md shadow-sm p-4 flex">
            <div class="flex-1">
                <h2 class="">USERS</h2>
                <p class="text-3xl font-bold">{{ users? users : '00' }}</p>
            </div>
            <div class="">
                <i class="fa-solid fa-users text-6xl"></i>
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
