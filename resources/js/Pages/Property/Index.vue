<template>

    <Head title="PROPERTIES" />
    <div class="max-w-7xl mx-auto px-2">
        <div class="flex justify-between gap-4 mb-4 place-items-center">
            <h2>PROPERTIES</h2>
            <Link :href="route('property.create')"
                class="rounded bg-secondary-500 text-white hover:bg-secondary-600 transition border border-secondary-500 px-4 py-2">
            <i class="fa-solid fa-plus"></i>
            <span>Post PROPERTY</span>
            </Link>
        </div>

        <div class="shadow-xs rounded bg-white/90 p-2 overflow-x-scroll">
            <table class="w-full">
                <thead>
                    <tr>
                        <th class="border-b border-gray-200 px-2 py-1"></th>
                        <th class="border-b border-gray-200 px-2 py-1 text-left">Title</th>
                        <th class="border-b border-gray-200 px-2 py-1 text-left">Address</th>
                        <th class="border-b border-gray-200 px-2 py-1 text-left">City</th>
                        <th class="border-b border-gray-200 px-2 py-1 text-right">Price</th>
                        <th class="border-b border-gray-200 px-2 py-1 text-right">Status</th>
                        <th class="border-b border-gray-200 px-2 py-1 text-right">Action</th>
                    </tr>
                </thead>
                <tbody class="text-teal-500">
                    <tr v-for="item in items.data" :key="item.id" class="hover:bg-gray-50 transition"
                        :class="{ 'bg-red-100': item.status != 'active' }">
                        <td class="border-b border-gray-200 shrink-0">
                            <img :src="item.images.length? item.images[0].image : ''" alt="" class="w-16">
                        </td>
                        <td class="border-b border-gray-200 px-2 py-1 text-left">{{ item.title }}</td>
                        <td class="border-b border-gray-200 px-2 py-1 text-center">{{ item.address }}</td>
                        <td class="border-b border-gray-200 px-2 py-3">{{ item.city }}</td>
                        <td class="border-b border-gray-200 px-2 py-3 text-right">{{ numeralFormat(item.price, '0,0[.]00ZMW')}} ZMW</td>
                        <td class="border-b border-gray-200 px-2 py-3 text-right"><span
                                class="px-2 rounded-md text-white"
                                :class="{'bg-teal-500':item.status=='active', 'bg-red-500':item.status!='active'}">{{
                                item.status }}</span></td>
                        <td class="border-b border-gray-200 px-2 py-3 text-right">
                            <Link :href="route('property.edit', item)" class="p-2 text-sky-500">
                            <i class="fa-solid fa-edit"></i>
                            </Link>
                            <Link :href="route('property.destroy', item.id)" method="delete" class="text-red-500"
                                as="button" type="button" :onBefore="confirm">
                            <i class="fa-solid fa-trash-can"></i>
                            </Link>

                            <ConfirmationModal :show="0">
                                <template v-slot:title>
                                    <h4>Confirm action</h4>
                                </template>
                                <template v-slot:content>
                                    <p>Are you sure you want to delete this property?</p>
                                </template>
                                <template v-slot:footer>
                                    <button @click="close"
                                        class="text-gray-500 hover:bg-secondary-100 px-4 rounded transition">Cancel</button>
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
        items: Object,
    },
    layout: DashboardLaout,
    setup() {
        const confirm = () => window.confirm('Are you sure you want to delete this property?');

        return {
            confirm
        }
    }
};
</script>
