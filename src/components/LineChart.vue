<template>
  <div v-if="series" class='linechart'>
    <apexcharts type='line' :options='chartOptions' :series='series'></apexcharts>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import axios from 'axios'
import countAllYears from '../queries/count_all_years.js'

export default {
  name: 'LineChart',
  components: {
    apexcharts: VueApexCharts
  },
  mounted () {
    axios({
      method: 'post',
      url: process.env.VUE_APP_URL,
      headers: {
        Authorization: process.env.VUE_APP_AUTH
      },
      data: countAllYears
    })
      .then(response => (this.series = response.data.aggregations.langs.buckets.map(
        lang => (
          {
            name: lang.key,
            data: lang.lang.buckets.map(month => month.doc_count)
          }
        ))
      ))
      .catch(error => console.error(error.message))
  },
  data () {
    return {
      chartOptions: {
        stroke: {
          curve: 'smooth'
        },
        chart: {
          id: 'basic-bar'
        },
        xaxis: {
          categories: [2016, 2017, 2018, 2019, 2020, 2021]
        }
      },
      series: null
    }
  }
}
</script>
