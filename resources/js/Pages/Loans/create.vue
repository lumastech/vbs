<template>

    <Head title="Add user" />
    <div class="max-w-7xl mx-auto px-2">
        <header class="bg-white p-6 shadow">
            <h2 class="text-xl font-bold text-gray-800">Loan Application</h2>
        </header>

        <!-- Content Area -->
        <main class="overflow-y-auto">
            <!-- Loan Application Form -->
            <section class="mb-6">
                <h3 class="text-lg font-semibold text-gray-800 mb-4">Apply for a Loan</h3>
                <form @submit.prevent="submitApplication" class="bg-white p-6 rounded-lg shadow-lg">
                    <div class="mb-4">
                        <label for="term" class="block text-gray-700">Select Available Packages</label>
                        <select
                            @change="loan.amount = loan_packages.filter(item => item.id == loan.loan_package_id)[0].amount"
                            v-model="loan.loan_package_id" class=" p-2 w-full border border-gray-300 rounded-lg">
                            <option v-for="packag in loan_packages" :key="packag.id" :value="packag.id">you will get K{{
                                packag.amount }} @ {{packag.rate}}%/Month for {{ packag.duration }} months</option>
                        </select>
                    </div>
                    <div class="mb-4">
                        <label for="amount" class="block text-gray-700">Loan Amount</label>
                        <input type="number" id="amount" v-model="loan.amount" placeholder="Select package above"
                            class="mt-1 p-2 w-full border border-gray-300 rounded-lg" disabled />
                    </div>
                    <div class="mb-4">
                        <label for="purpose" class="block text-gray-700">Purpose</label>
                        <textarea id="purpose" v-model="loan.purpose"
                            class="mt-1 p-2 w-full border border-gray-300 rounded-lg" required></textarea>
                    </div>
                    <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-lg">Submit
                        Application</button>
                </form>
            </section>

            <!-- Existing Loan Applications -->
            <section>
                <h3 class="text-lg font-semibold text-gray-800 mb-4">Your Loan Applications</h3>
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
                            <tr v-for="loan in loans.data" :key="loan.id" class="border-t">
                                <td class="py-2">{{ new Date(loan.created_at).getDate() }}.{{ (new
                                    Date(loan.created_at).getMonth()) + 1 }}.{{ new Date(loan.created_at).getFullYear() }}
                                </td>
                                <td class="py-2">{{ loan.amount }}</td>
                                <td class="py-2">{{ loan.status }}</td>
                                <td class="py-2">{{ loan.term }} months</td>
                                <td class="py-2">{{ loan.purpose }}</td>
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
        loans: Object,
        loan_packages: Object,
    },
    layout: DashboardLaout,

    setup() {
        const loan = useForm({
            amount: null,
            purpose: '',
            term: null,
            loan_package_id: '',
        });

        const submitApplication = () => {
            loan.post('/loan/store', {
                onSuccess: (data) => {
                    loan.reset()
                    console.log(data)
                    alert("Loan Created successfully")
                }
            });
        };

        return {
            loan,
            submitApplication,
        };
    },
};
</script>
