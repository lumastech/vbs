<template>

    <Head title="Add user" />
    <div class="max-w-7xl mx-auto px-2">
        <header class="bg-white p-6 shadow">
            <h2 class="text-xl font-bold text-gray-800">Saving Application</h2>
        </header>

        <!-- Content Area -->
        <main class="overflow-y-auto">
            <!-- Saving Application Form -->
            <section class="mb-6">
                <h3 class="text-lg font-semibold text-gray-800 mb-4">Apply for a Saving</h3>
                <form @submit.prevent="submitApplication" class="bg-white p-6 rounded-lg shadow-lg">
                    <div class="mb-4">
                        <label for="term" class="block text-gray-700">Select Available Packages</label>
                        <select
                            @change="saving.amount = saving_packages.filter(item => item.id == saving.loan_package_id)[0].amount"
                            v-model="saving.loan_package_id" class=" p-2 w-full border border-gray-300 rounded-lg">
                            <option v-for="packag in saving_packages" :key="packag.id" :value="packag.id">Save K{{
                                packag.amount }} @ {{packag.rate}}%/Month for {{ packag.duration }} months -> K {{ ((packag.rate / 100) * packag.amount) + Number.parseInt(packag.amount) }}</option>
                        </select>
                    </div>
                    <div class="mb-4">
                        <label for="amount" class="block text-gray-700">Saving Amount</label>
                        <input type="number" id="amount" v-model="saving.amount" placeholder="Select package above"
                            class="mt-1 p-2 w-full border border-gray-300 rounded-lg" disabled />
                    </div>

                    <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-lg">Submit
                        Application</button>
                </form>
            </section>

            <!-- Existing Saving Applications -->
            <section>
                <h3 class="text-lg font-semibold text-gray-800 mb-4">Your Saving Applications</h3>
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <table class="w-full">
                        <thead>
                            <tr>
                                <th class="text-left py-2">Date</th>
                                <th class="text-left py-2">Amount</th>
                                <th class="text-left py-2">Status</th>
                                <th class="text-left py-2">Term</th>
                                <th class="text-left py-2">Purpose</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="saving in savings.data" :key="saving.id" class="border-t">
                                <td class="py-2">{{ new Date(saving.created_at).getDate() }}.{{ (new
                                    Date(saving.created_at).getMonth()) + 1 }}.{{ new Date(saving.created_at).getFullYear() }}
                                </td>
                                <td class="py-2">{{ saving.amount }}</td>
                                <td class="py-2">{{ saving.status }}</td>
                                <td class="py-2">{{ saving.term }} months</td>
                                <td class="py-2">{{ saving.purpose }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </main>

    </div>
</template>

<script>
import DashboardLaout from '@/Layouts/DashboardLaout.vue';
import { Link, Head, useForm } from '@inertiajs/vue3';

export default {
    components: {
        DashboardLaout, Link, Head
    },
    props: {
        errors: Object,
        savings: Object,
        saving_packages: Object,
    },
    layout: DashboardLaout,

    setup() {
        const saving = useForm({
            amount: null,
            purpose: '',
            term: null,
            loan_package_id: '',
        });

        const submitApplication = () => {
            saving.post(route('savings.store'), {
                onSuccess: (data) => {
                    saving.reset()
                    console.log(data)
                    alert("Saving Created successfully")
                }
            });
        };

        return {
            saving,
            submitApplication,
        };
    },
};
</script>
