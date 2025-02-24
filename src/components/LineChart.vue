<template>
  <!-- Display chart if data has been loaded sucessfully -->
  <div v-if="series" class='linechart'>
    <apexcharts type='line' :options='chartOptions' :series='series'/>
  </div>
  <!-- Else display loading spinner. -->
  <div v-else class="d-flex justify-content-center mb-3 loading">
    <b-spinner/>
  </div>
</template>

<script>
/**
 *
 * LineChart component.
 * Fetches data from Elasticsearch and presents it in a linechart.
 *
 * @author Per Rawdin <per.rawdin@student.lnu.se>
 * @version 1.0.0
 */
import VueApexCharts from 'vue-apexcharts'
import axios from 'axios'
import { countAllYears } from '../queries/count_all_years.js'

export default {
  name: 'LineChart',
  components: {
    apexcharts: VueApexCharts
  },
  mounted () {
    // Fetch data from Elasticsearch.
    axios({
      method: 'post',
      url: process.env.VUE_APP_URL,
      headers: {
        Authorization: process.env.VUE_APP_AUTH
      },
      // Query
      data: countAllYears
    })
      // Map response data to object variable.
      .then(response => (this.series = response.data.aggregations.langs.buckets.map(
        language => (
          {
            name: language.key,
            data: language.lang.buckets.map(month => month.doc_count)
          }
        ))
      ))
      .catch(error => console.error(error.message))
  },
  data () {
    return {
      // Chart configuration.
      chartOptions: {
        stroke: {
          curve: 'smooth'
        },
        chart: {
          id: 'basic-bar'
        },
        xaxis: {
          categories: [2016, 2017, 2018, 2019, 2020, 2021]
        },
        colors: ['#B2E1B8', '#70D6FF', '#94BDE9', '#B8A3D3', '#FF70A6', '#FF4751', '#FF6F61', '#521600', '#FFD670', '#E9FF70', '#399345', '#046DC8', '#F29602']
      },
      series: null
    }
  }
}
</script>
