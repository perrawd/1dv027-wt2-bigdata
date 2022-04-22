<template>
  <div class='linechart'>
    <apexcharts type='line' :options='chartOptions' :series='series'></apexcharts>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'LineChart',
  components: {
    apexcharts: VueApexCharts
  },
  data: function () {
    return {
      chartOptions: {
        stroke: {
          curve: 'smooth'
        },
        chart: {
          id: 'basic-bar'
        },
        xaxis: {
          categories: []
        }
      },
      series: null
    }
  }
}
</script>
