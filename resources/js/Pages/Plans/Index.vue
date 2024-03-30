<template>
    <Head title="Users" />
    <div class="max-w-7xl mx-auto px-2">
        <div class="flex justify-between gap-4 mb-4 place-items-center">
            <h2>STAFFS</h2>
            <Link :href="route('user.create')" class="rounded bg-secondary-500 text-white hover:bg-secondary-600 transition border border-secondary-500 px-4 py-2">
                <i class="fa-solid fa-plus"></i>
                <span>Add Staff</span>
            </Link>
        </div>

        <div class="shadow rounded bg-white/60 p-2 overflow-x-scroll">
            <table class="w-full">
                <thead>
                    <tr>
                        <th class="border-b border-gray-200 px-2 py-1"></th>
                        <th class="border-b border-gray-200 px-2 py-1 text-left">Name</th>
                        <th class="border-b border-gray-200 px-2 py-1 text-left">Email</th>
                        <th class="border-b border-gray-200 px-2 py-1 text-left">Phone</th>
                        <th class="border-b border-gray-200 px-2 py-1 text-left">Role</th>
                        <th class="border-b border-gray-200 px-2 py-1 text-left">Status</th>
                        <th class="border-b border-gray-200 px-2 py-1 text-right">Action</th>
                    </tr>
                </thead>
                <tbody class="text-teal-500">
                    <tr v-for="user in users.data" :key="user.id" class="hover:bg-gray-50 transition">
                        <td class="border-b border-gray-200 px-2 py-3">
                            <i class="fa-solid fa-user"></i>
                        </td>
                        <td class="border-b border-gray-200 px-2 py-1 text-left">{{ user.name }}</td>
                        <td class="border-b border-gray-200 px-2 py-1 text-left">
                            <a :href="`mailto:${user.email}`">{{ user.email }}</a>
                        </td>
                        <td class="border-b border-gray-200 px-2 py-3">{{ user.phone }}</td>
                        <td class="border-b border-gray-200 px-2 py-3">{{ user.role }}</td>
                        <td class="border-b border-gray-200 px-2 py-3"><span class="bg-teal-500 px-2 rounded-md text-white">{{ user.status }}</span></td>
                        <td class="border-b border-gray-200 px-2 py-3 text-right">
                            <Link :href="route('user.edit', user.id)" class="p-2 text-sky-500">
                                <i class="fa-solid fa-edit"></i>
                            </Link>
                            <Link :href="route('user.destroy', user.id)" method="delete" class="text-red-500" as="button" type="button" :onBefore="confirm" >
                                <i class="fa-solid fa-trash-can"></i>
                            </Link>

                            <ConfirmationModal :show="0" >
                                <template v-slot:title>
                                    <h4>Confirm action</h4>
                                </template>
                                <template v-slot:content>
                                    <p>Are you sure you want to delete this user?</p>
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
</template>

<script>
import DashboardLaout from '@/Layouts/DashboardLaout.vue';
// import Inertia from '@inertiajs/vue3'
import { Link, Head } from '@inertiajs/vue3';
import ConfirmationModal from '@/Components/ConfirmationModal.vue';

export default {
    components: {
    DashboardLaout, Link, Head,
    ConfirmationModal
},
    props: {
        users: Object,
    },
    layout: DashboardLaout,
    setup() {
        const confirm = () => window.confirm('Are you sure you want to delete this user?');

        return {
            confirm
        }
    }
};
</script>
