<script lang="ts" setup>
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { Bar } from 'vue-chartjs'

// Register
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


const chartData = ref({
  labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
  datasets: [
    {
      label: '',
      backgroundColor: '#f87979',
      data: [40, 20, 12, 50, 10, 35, 30],
    },
  ],
})
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
})

</script>
<template>
  <div class="w-full ">
    <Bar
      :data="chartData"
      :options="chartOptions"
    />
  </div>
</template>
