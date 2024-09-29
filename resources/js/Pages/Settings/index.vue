<template>

    <Head title="Users" />
    <div class="max-w-7xl mx-auto px-2">
        <div class="flex justify-between gap-4 mb-4 place-items-center">
            <h2 class="text-xl font-bold">SETTINGS</h2>
        </div>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Interest Rate
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Amount
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Duration
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" class="px-6 py-3 text-right">
                            <button @click="parckage.show = 1"
                                class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                type="button">
                                <i class="fa-solid fa-plus"></i> Add
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in parckages" :key="item.id"
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ item.name }}
                        </th>
                        <td class="px-6 py-4">
                            {{ item.rate }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.amount }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.duration }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.description }}
                        </td>
                        <td class="px-6 py-4 text-right">
                            <button @click="deleteCategory(item.id)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <Modal :show="parckage.show">
        <h2 class="bg-primary-500 text-gray-50 px-4 py-2">Add Category</h2>
        <div class="p-2">
            <div class="">
                <label for="name">Name</label>
                <input v-model="parckage.name" type="text" class="block w-full rounded">
            </div>

            <div class="grid md:grid-cols-3 gap-4 my-4">
                <div class="">
                    <label for="rate">Interest Rate (%)</label>
                    <input v-model="parckage.rate" type="Number" class="block w-full rounded">
                </div>
                <div class="">
                    <label for="amount">Amount (0.00)</label>
                    <input v-model="parckage.amount" type="Number" class="block w-full rounded">
                </div>
                <div class="">
                    <label for="duration">Duration (No. of Munths)</label>
                    <input v-model="parckage.duration" type="Number" class="block w-full rounded">
                </div>
            </div>

            <div class="">
                <label for="description">Description</label>
                <textarea v-model="parckage.description" name="" id="" class="block w-full rounded"></textarea>
            </div>

            <hr class="my-4">
            <div class="text-right">
                <button @click="parckage.show = 0"
                    class=" text-white bg-secondary-700 hover:bg-secondary-800 focus:ring-4 focus:outline-none focus:ring-secondary-300 font-medium rounded text-sm px-4 py-2 text-center dark:bg-secondary-600 dark:hover:bg-secondary-700 dark:focus:ring-secondary-800"
                    type="button">
                    Cancel
                </button>
                <button @click="saveCategory"
                    class="ml-4 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded text-sm px-4 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    type="button">
                    Save
                </button>
            </div>
        </div>
    </Modal>
</template>

<script>
import DashboardLaout from '@/Layouts/DashboardLaout.vue';
// import Inertia from '@inertiajs/vue3'
import { Link, Head, router } from '@inertiajs/vue3';
import ConfirmationModal from '@/Components/ConfirmationModal.vue';
import Modal from '@/Components/Modal.vue';
import { ref } from 'vue';

export default {
    components: {
    DashboardLaout, Link, Head,
    ConfirmationModal, Modal
},
    props: {
        parckages: Object,
    },
    layout: DashboardLaout,
    setup() {
        const parckage = ref({
            show: 0,
            name: '',
            rate: '',
            amount: '',
            duration: '',
            description: '',
        });

        const deleteCategory = (item) => {
            router.delete('parckages/destroy/'+item)
        }
        const confirm = () => window.confirm('Are you sure you want to delete this user?');

        const saveCategory = () => {
            // console.log(parckage.value);
            router.post('parckages/store', parckage.value, {
                onSuccess: () => {
                    parckage.value.name = '';
                    parckage.value.rate = '';
                    parckage.value.amount = '';
                    parckage.value.duration = '';
                    parckage.value.description = '';
                },
                onStart: () => parckage.value.show = 0,
                onError: () => parckage.value.show = 1,
            });
        }

        return {
            confirm, parckage, saveCategory, deleteCategory
        }
    }
};
</script>