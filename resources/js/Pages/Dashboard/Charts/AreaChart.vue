<template>
    <apexchart
        width="100%"
        height="auto"
        type="area"
        :options="chartOptions"
        :series="series"
        class="md:col-span-2"
    ></apexchart>
</template>

<script setup>
import { ref } from "vue";
const chartOptions = ref({
    chart: {
        animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800,
            animateGradually: {
                enabled: true,
                delay: 150
            },
            dynamicAnimation: {
                enabled: true,
                speed: 350
            }
        }
    },
    xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },

    stroke: {
        curve: "smooth",
    },
    colors: ["#EB840F"],
    dataLabels: {
        enabled: false,
    },
});
const series = ref([
    {
        name: "series-1",
        data: [30, 40, 35, 50, 49, 60, 70, 91],
    },
]);
</script>
