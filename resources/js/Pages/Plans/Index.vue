<template>
    <Head title="Plans" />
    <div class="max-w-7xl mx-auto px-2">
        <div class="flex justify-between gap-4 mb-4 place-items-center">
            <h2>Plans</h2>
            <Link :href="route('plans.create')" class="rounded bg-secondary-500 text-white hover:bg-secondary-600 transition border border-secondary-500 px-4 py-2">
                <i class="fa-solid fa-plus"></i>
                <span>Post Plan</span>
            </Link>
        </div>

        <div class="shadow rounded bg-white/60 p-2 overflow-x-scroll">
            <table class="w-full">
                <thead>
                    <tr>
                        <th class="border-b border-gray-200 px-2 py-1"></th>
                        <th class="border-b border-gray-200 px-2 py-1 text-left">Name</th>
                        <th class="border-b border-gray-200 px-2 py-1 text-left">Level</th>
                        <th class="border-b border-gray-200 px-2 py-1 text-left">Style</th>
                        <th class="border-b border-gray-200 px-2 py-1 text-right">Price</th>
                        <th class="border-b border-gray-200 px-2 py-1 text-right">Status</th>
                        <th class="border-b border-gray-200 px-2 py-1 text-right">Action</th>
                    </tr>
                </thead>
                <tbody class="text-teal-500">
                    <tr v-for="plan in plans.data" :key="plan.id" class="hover:bg-gray-50 transition">
                        <td class="border-b border-gray-200 shrink-0">
                            <img :src="plan.image_1" alt="" class="w-16">
                        </td>
                        <td class="border-b border-gray-200 px-2 py-1 text-left">{{ plan.name }}</td>
                        <td class="border-b border-gray-200 px-2 py-1 text-center">{{ plan.levels }}</td>
                        <td class="border-b border-gray-200 px-2 py-3">{{ plan.style }}</td>
                        <td class="border-b border-gray-200 px-2 py-3 text-right">{{ numeralFormat(plan.price, '0,0[.]00 ZMW')}} ZMW</td>
                        <td class="border-b border-gray-200 px-2 py-3 text-right"><span class="bg-teal-500 px-2 rounded-md text-white">{{ plan.area }}</span></td>
                        <td class="border-b border-gray-200 px-2 py-3 text-right">
                            <Link :href="route('plans.edit', plan)" class="p-2 text-sky-500">
                                <i class="fa-solid fa-edit"></i>
                            </Link>
                            <Link :href="route('plans.destroy', plan.id)" method="delete" class="text-red-500" as="button" type="button" :onBefore="confirm" >
                                <i class="fa-solid fa-trash-can"></i>
                            </Link>

                            <ConfirmationModal :show="0" >
                                <template v-slot:title>
                                    <h4>Confirm action</h4>
                                </template>
                                <template v-slot:content>
                                    <p>Are you sure you want to delete this plan?</p>
                                </template>
                                <template v-slot:footer>
                                    <button @click="close" class="text-gray-500 hover:bg-secondary-100 px-4 rounded transition">Cancel</button>
                                </template>
                            </ConfirmationModal>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <Toast />
</template>

<script>

import DashboardLaout from '@/Layouts/DashboardLaout.vue';
import { Link, Head } from '@inertiajs/vue3';
import ConfirmationModal from '@/Components/ConfirmationModal.vue';
import Toast from '@/Components/Toast.vue'

export default {
    components: {
    DashboardLaout, Link, Head,
    ConfirmationModal, Toast
},
    props: {
        plans: Object,
    },
    layout: DashboardLaout,
    setup() {
        const confirm = () => window.confirm('Are you sure you want to delete this plan?');

        return {
            confirm
        }
    }
};
</script>
