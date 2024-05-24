<template>
    <div class="max-w-12xl mx-auto px-2">
        <Head title="Dashboard" />

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div
                class="col-span-2 md:col-span-3 lg:col-span-4 shadow-sm rounded bg-white p-3"
            >
                <div class="grid md:grid-cols-4 gap-4 place-item-end">
                    <div class="md:col-span-3">
                        <h3 class="text-xl text-indigo-500">Congratulations</h3>
                        <p>
                            You have done 72% more sales today. Check your new
                            badge in your profile.
                        </p>
                        <button
                            class="text-indigo-500 px-2 py-1 mt-4 border border-indigo-500 rounded hover:bg-indigo-500 hover:text-white transition"
                        >
                            View Badges
                        </button>
                    </div>
                    <img
                        src="../../../assets/man_with_laptop_light.png"
                        class="selft-end mx-auto max-w-24"
                        alt=""
                    />
                </div>
            </div>
            <div class="flex lg:inline shadow-sm rounded bg-white p-3 space-x-2">
                <i class="self-center p-4 bg-sky-100 text-sky-500 rounded-md fas fa-ticket"></i>
                <div class="flex-auto sm:text-center lg:text-left self-center">
                    <p class="mt-2">Plans</p>
                    <p class="text-2xl font-bold">
                        {{ data.plan_count < 10 ? "0" : ""
                        }}{{ data.plan_count ? data.plan_count : "00" }}
                    </p>
                    <p class="text-red-500 text-xs">
                        <i class="fas fa-arrow-down"></i> {{ data.plan_count }} this Month
                    </p>
                </div>
            </div>

            <div class="flex lg:inline shadow-sm rounded bg-white p-3 space-x-2">
                <i
                    class="self-center p-4 bg-teal-100 text-teal-500 rounded-md fas fa-file-invoice-dollar"
                ></i>
                <div class="flex-auto sm:text-center lg:text-left self-center">
                    <p class="mt-2">SALES</p>
                    <p class="md:text-3xl font-bold">
                        <span class="text-xs">K</span> {{ data.invoice_sum ? data.invoice_sum : "0.00" }}
                    </p>
                    <p class="text-green-500 text-xs">
                        <i class="fas fa-arrow-up"></i> {{ data.invoice_sum }} this Month
                    </p>
                </div>
            </div>

            <div
                class="hidden md:flex lg:hidden shadow-sm rounded bg-white p-3"
            >
                <i class="self-center p-4 bg-orange-100 text-orange-500 rounded-md fas fa-users"></i>
                <div class="flex-auto text-center self-center">
                    <p class="mt-2">VISITORS</p>
                    <p class="text-2xl font-bold">
                        {{ data.visitors < 10 ? "0" : ""
                        }}{{ data.visitors ? data.visitors : "00" }}
                    </p>
                    <p class="text-green-500 text-xs">
                        <i class="fas fa-arrow-down"></i> {{ data.visitors }} this Month
                    </p>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 gap-4 my-7">
            <div
                class="grid md:grid-cols-3 min-h-70 col-span-2 md:col-span-3 lg:col-span-4 c bg-white transition rounded-md shadow-sm p-4 flex"
            >
                <apexchart
                    width="100%"
                    height="auto"
                    type="line"
                    :options="chartOptions"
                    :series="series"
                    class="md:col-span-2"
                ></apexchart>

                <div class="md:border-l">
                    <GaugeChart :last_month="data.invoice_sales_last_month" :this_month="data.invoice_sales_this_month" />
                </div>
            </div>

            <div
                class="grid grid-col-2 col-span-2 md:col-span-3 lg:col-span-2 lg:grid-cols-2 md:grid-cols-3 gap-4"
            >
                <div class="md:hidden lg:flex text-center flex-col justify-evenly justify-evenly place-items-center shadow-sm rounded bg-white p-3">
                     <i class="self-center p-4 bg-orange-100 text-orange-500 rounded-md fas fa-users"></i>
                    <div class="flex-auto self-center">
                        <p class="mt-2">VISITORS</p>
                        <p class="text-2xl font-bold">
                            {{ data.visitors < 10 ? "0" : ""
                            }}{{ data.visitors ? data.visitors : "00" }}
                        </p>
                        <p class="text-green-500 text-xs">
                        <i class="fas fa-arrow-up"></i> {{ data.visitors }} this Month
                    </p>
                    </div>
                </div>

                <div class="flex flex-col justify-evenly place-items-center shadow-sm rounded bg-white p-3">
                    <div>
                        <i
                        class="inline-block p-4 bg-teal-100 text-teal-500 rounded-md fas fa-users"></i>
                    </div>
                    <p class="mt-2">USERS</p>
                    <p class="md:text-3xl font-bold">
                        {{ data.users ? data.users : "00" }}
                    </p>
                    <p class="text-green-500 text-xs">
                        <i class="fas fa-arrow-up"></i> {{ data.users }} this Month
                    </p>
                </div>

                <div class="col-span-2 grid grid-cols-6 shadow-sm rounded bg-white p-3">
                    <div class="col-span-2 flex flex-col justify-evenly">
                        <p class="mt-2 font-bold">Profit Report</p>
                        <p class="mt-2 uppercase rounded bg-primary-50 px-2 text-primary-600 inline py-1 text-sm">
                            This month
                        </p>
                        <p class="md:text-xl font-bold">
                            <span class="text-xs">ZMW</span>
                            {{ data.invoice_sum ? data.invoice_sum : "0.00" }}
                        </p>
                        <p class="text-green-500">
                            <i class="fas fa-arrow-up"></i> {{ data.invoice_count }} Invoices
                        </p>
                    </div>
                    <div class="col-span-4">
                        <ProfitReportChart />
                    </div>
                </div>
            </div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="shadow-sm rounded bg-white p-3 text-secondary-400">
                <div class="flex">
                    <div class="flex-auto">
                        <h2 class="font-bold text-2xl text-secondary-600">Order Statistics</h2>
                        <p>Total Sales - {{ data.invoice_sum }} zmw</p>
                    </div>
                    <dropdown-menu :overlay="false" direction="right">
                        <template #trigger>
                            <button class="curso-pointer p-2"><i class="fa-solid fa-ellipsis-vertical"></i></button>
                        </template>
                        <template #body class="rounded overflow-hidden">
                            <ul class="shadow rounded text-left">
                                <li class="p-2 border-b border-gray-100 hover:bg-gray-100 transition cursor-pointer" >
                                    Refresh
                                </li>
                                <li class="p-2 border-b border-gray-100 hover:bg-gray-100 transition cursor-pointer" >
                                    View All
                                </li>
                            </ul>
                        </template>
                    </dropdown-menu>
                </div>

                <div class="flex mt-2">
                    <div class="flex-auto self-center">
                        <h2 class="text-secondary-600 font-bold text-2xl">{{ data.invoice_count }}</h2>
                        <p>Total Orders</p>
                    </div>
                    <PieChart />
                </div>

                <div class="mt-4">
                    <div v-for="invoice in data.invoices" :key="invoice.id" class="flex gap-3 rounded transition p-1">
                        <i class="self-center p-2 rounded bg-sky-100 mr-1 text-sky-500 fas fa-dollar"></i>
                        <div class="flex-auto">
                            <h4 class="font-bold capitalize text-secondary-600">{{ invoice.plan.name }} <span class="font-light text-sm"> - from {{ invoice.customerFirstName }}</span> </h4>
                            <p >{{invoice.transactionName}}</p>
                        </div>
                        <p class="self-center shrink-0">K {{invoice.amount}}</p>
                    </div>
                </div>
            </div>


            <div class="shadow-sm rounded bg-white p-3">
                <div class="grid grid-cols-3 gap-4 mb-3">
                    <button class="px-2 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded">Income</button>
                    <button class="hover:text-indigo-500 transition">Income</button>
                    <button class="hover:text-indigo-500 transition">Income</button>
                </div>
                <div class="flex gap-3 rounded hover:bg-secondary-50 transition cursor-pointer p-1">
                    <i class="self-center p-3 rounded bg-sky-100 mr-1 text-sky-500 fas fa-dollar"></i>
                    <div class="flex-auto">
                        <h4 class="capitalize text-secondary-600">Total Balance</h4>
                        <p class="font-bold">ZMW 15,780 <span class="text-green-500"> <i class="ml-2 fas fa-angle-up"></i> 47%</span></p>
                    </div>
                </div>
                <AreaChart />
                <div class="flex">
                    <RadialChart  />
                    <div class="self-center flex-auto">
                        <p class="font-bold">Expenses This Week</p>
                        <p>$39 less than last week</p>
                    </div>
                </div>
            </div>


            <div class="shadow-sm rounded bg-white p-3">
                <div class="flex">
                    <div class="flex-auto">
                        <h2 class="font-bold text-2xl text-secondary-600">Transactions</h2>
                    </div>
                    <dropdown-menu :overlay="false" direction="right">
                        <template #trigger>
                            <button class="curso-pointer p-2"><i class="fa-solid fa-ellipsis-vertical"></i></button>
                        </template>
                        <template #body class="rounded overflow-hidden">
                            <ul class="shadow rounded text-left">
                                <li class="p-2 border-b border-gray-100 hover:bg-gray-100 transition cursor-pointer" >
                                    Refresh
                                </li>
                                <li class="p-2 border-b border-gray-100 hover:bg-gray-100 transition cursor-pointer" >
                                    View All
                                </li>
                            </ul>
                        </template>
                    </dropdown-menu>
                </div>
                <div class="mt-2 text-secondary-400">
                    <div v-for="invoice in data.invoices" :key="invoice.id" class="flex gap-3 rounded transition px-1 py-2 border-b">
                        <i class="self-center p-3 rounded bg-sky-100 mr-1 text-sky-500 fas fa-dollar"></i>
                         <div class="flex-auto">
                            <h4 class="font-bold capitalize text-secondary-600">{{ invoice.plan.name }} <span class="font-light text-sm"> - from {{ invoice.customerFirstName }}</span> </h4>
                            <p >{{invoice.transactionName}}</p>
                        </div>
                        <p class="self-center shrink-0">K {{invoice.amount}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import DashboardLayout from "../../Layouts/DashboardLaout.vue";
import { Link, Head } from "@inertiajs/vue3";
import { ref } from "vue";
import GaugeChart from "./Charts/GaugeChart.vue";
import ProfitReportChart from "./Charts/ProfitReportChart.vue";
import PieChart from "./Charts/PieChart.vue";
import AreaChart from "./Charts/AreaChart.vue";
import RadialChart from "./Charts/RadialChart.vue";
export default {
    components: { DashboardLayout, Link, Head, GaugeChart, ProfitReportChart, PieChart,AreaChart, RadialChart },
    layout: DashboardLayout,
    props: {
        data: Object,
    },
    setup() {
        const chartOptions = ref({
            chart: {
                id: "vuechart-example",
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
            },
             stroke: {
                curve: 'smooth',
             },
            colors:['#66DA26', '#2E93fA', '#546E7A', '#E91E63', '#FF9800']
        });

        const series = ref([
            {
                name: "series-1",
                data: [30, 40, 35, 50, 49, 60, 70, 91],
            },
        ]);

        const currentYear = () => {
            let date = new Date();
            let n = date.getFullYear();
            return n;
        };

        return {
            sideToggle() {
                document.getElementById("side").classList.toggle("hidden");
            },
            chartOptions,
            series,
            currentYear,
        };
    },
};
</script>
