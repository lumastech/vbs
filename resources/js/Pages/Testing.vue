<template>
    <div class="flex h-screen bg-gray-100">
        <!-- Sidebar (for navigation, similar to the previous example) -->
        <aside class="w-64 bg-white shadow-lg">
            <!-- Sidebar content... -->
        </aside>

        <!-- Main Content -->
        <div class="flex-1 flex flex-col">
            <!-- Header (similar to the previous example) -->
            <header class="bg-white p-6 shadow">
                <h2 class="text-xl font-bold text-gray-800">Loan Application</h2>
            </header>

            <!-- Content Area -->
            <main class="p-6 overflow-y-auto">
                <!-- Loan Application Form -->
                <section class="mb-6">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">Apply for a Loan</h3>
                    <form @submit.prevent="submitApplication" class="bg-white p-6 rounded-lg shadow-lg">
                        <div class="mb-4">
                            <label for="amount" class="block text-gray-700">Loan Amount</label>
                            <input type="number" id="amount" v-model="loan.amount"
                                class="mt-1 p-2 w-full border border-gray-300 rounded-lg" required />
                        </div>
                        <div class="mb-4">
                            <label for="purpose" class="block text-gray-700">Purpose</label>
                            <textarea id="purpose" v-model="loan.purpose"
                                class="mt-1 p-2 w-full border border-gray-300 rounded-lg" required></textarea>
                        </div>
                        <div class="mb-4">
                            <label for="term" class="block text-gray-700">Term (in months)</label>
                            <input type="number" id="term" v-model="loan.term"
                                class="mt-1 p-2 w-full border border-gray-300 rounded-lg" required />
                        </div>
                        <div class="mb-4">
                            <label for="notes" class="block text-gray-700">Additional Notes</label>
                            <textarea id="notes" v-model="loan.notes"
                                class="mt-1 p-2 w-full border border-gray-300 rounded-lg"></textarea>
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
                                <tr v-for="application in applications" :key="application.id" class="border-t">
                                    <td class="py-2">{{ application.date }}</td>
                                    <td class="py-2">{{ application.amount }}</td>
                                    <td class="py-2">{{ application.status }}</td>
                                    <td class="py-2">{{ application.term }} months</td>
                                    <td class="py-2">{{ application.purpose }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoanApplication",
    data() {
        return {
            loan: {
                amount: null,
                purpose: '',
                term: null,
                notes: '',
            },
            applications: [
                // Dummy data for existing applications
                {
                    id: 1,
                    date: '2024-08-01',
                    amount: 1000,
                    status: 'Pending',
                    term: 12,
                    purpose: 'Business expansion',
                },
                {
                    id: 2,
                    date: '2024-07-15',
                    amount: 500,
                    status: 'Approved',
                    term: 6,
                    purpose: 'Emergency medical expenses',
                },
            ],
        };
    },
    methods: {
        submitApplication() {
            // Logic to handle form submission
            // This could include API calls to submit the loan application data

            // For now, we'll just log the data
            console.log('Loan application submitted:', this.loan);
            // Reset form fields
            this.loan = {
                amount: null,
                purpose: '',
                term: null,
                notes: '',
            };
        },
    },
};
</script>

<style scoped>
/* Additional styles if necessary */
</style>
