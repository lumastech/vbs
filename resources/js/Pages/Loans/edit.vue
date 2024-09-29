<template>

    <Head title="Add user" />
    <div class="max-w-7xl mx-auto px-2">
        <header class="bg-white p-6 shadow">
            <h2 class="text-xl font-bold text-gray-800">Loan Details</h2>
        </header>

        <!-- Content Area -->
        <main class="overflow-y-auto">
            <!-- Loan Application Form -->
            <section class="mb-6">
                <form @submit.prevent="submitApplication" class="bg-white p-6 rounded-lg shadow-lg">
                    <div class="mb-4">
                        <label for="term" class="block text-gray-700">Select Available Packages</label>
                        <select
                            @change="loan.amount = loan_packages.filter(item => item.id == loan.loan_package_id)[0].amount"
                            v-model="loan.loan_package_id" class=" p-2 w-full border border-gray-300 rounded-lg">
                            <option v-for="packag in loan_packages" :key="packag.id" :value="packag.id">you will get K{{
                                packag.amount }} @ {{ packag.rate }}%/Month for {{ packag.duration }} months</option>
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
                    <button v-if="$page.props.auth.user.role == 'admin'" type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-lg">Update</button>
                </form>
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
        loan: Object,
        loan_packages: Object,
    },
    layout: DashboardLaout,

    setup(props, ctx) {
        const loanForm = useForm({
            id: null,
            amount: null,
            purpose: '',
            term: null,
            loan_package_id: '',
        });

        const submitApplication = () => {
            loanForm.purpose = props.loan.purpose
            loanForm.term = props.loan.term
            loanForm.loan_package_id = props.loan.loan_package_id
            loanForm.put(route('loans.update', props.loan.id), {
                onSuccess: (data) => {
                    alert("Loan Updated successfully")
                }
            });
        };

        return {
            loanForm,
            submitApplication,
        };
    },
};
</script>
