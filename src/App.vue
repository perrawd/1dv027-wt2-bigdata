<template>
  <div id="app">
    <b-container class="bv-row">
      <b-row class="header text-center">
        <b-col></b-col>
        <b-col cols="8">
          <h2>#wpjobb</h2>
          <p>
            Trends and amount of job ads published in the swedish job market between 2016-2021 for the <br/>most popular web development technologies according to StackOverflow survey 2021.<br/>
            The data presented has been fetched from Arbetsförmedlingens API and consists of over 250 000 job ads. <br/>The data is stored in and aggregated from an hosted Elasticsearch instance.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim velit eget aliquam imperdiet. Phasellus eu leo ac ipsum luctus fringilla. Etiam finibus vestibulum lobortis. Etiam nec sapien elementum, convallis orci nec, pellentesque neque. Phasellus tellus justo, placerat non lectus eget, eleifend rutrum quam. Praesent quis bibendum mauris. Phasellus fringilla tortor eget ligula fermentum, a imperdiet libero molestie. Pellentesque laoreet ut orci sit amet faucibus. Donec condimentum mollis finibus. Ut finibus felis non ipsum faucibus dignissim.
          </p>
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="text-center">
        <b-col></b-col>
        <b-col cols="8">
          <div>
              <b-button pill size="sm" variant="primary">2016-2021</b-button>
          </div>
          <div class="chartbox">
            <LineChart/>
          </div>
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="footer text-center">
        <b-col></b-col>
        <b-col cols="8">
          <p class="footertext">
            <ul>
              <li>Built with:</li>
              <li>Vue.js</li>
              <li>Elasticsearch</li>
              <li>VueBootStrap</li>
              <li>AMS API</li>
            </ul>
          </p>
          <p class="footertext">
            <ul>
              <li>Per Rawdin 1DV027 WT2 Big Data</li>
            </ul>
          </p>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import LineChart from './components/LineChart.vue'

export default {
  name: 'App',
  components: {
    LineChart
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.chartbox {
  margin: auto;
}

.btn {
  margin: 5px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.footertext {
  font-size: 11px;
}
</style>
