<template>
    <apexchart
        width="100%"
        height="auto"
        type="donut"
        :options="chartOptions"
        :series="series"
        class="md:col-span-2"
    ></apexchart>
</template>

<script setup>
import { ref } from "vue";
const chartOptions = ref({
    series: [44, 55, 13, 33],
    labels: [44, 55, 13, 33],
    dataLabels: {
      enabled: false,
      formatter: function (val) {
        return val + "%"
      },
      dropShadow: {
      }
    },
    pie: {
        donut: {
          size: '65%'
        }
      }
});
const series = ref([44, 55, 13, 33]);
</script>
