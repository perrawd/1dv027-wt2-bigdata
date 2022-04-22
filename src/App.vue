<template>
  <div id="app">
    <b-container class="bv-row">
      <b-row class="header text-center">
        <b-col></b-col>
        <b-col cols="8">
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="text-center">
        <b-col></b-col>
        <b-col cols="8">
          <div class="chartbox">
            <LineChart/>
          </div>
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="footer text-center">
        <b-col></b-col>
        <b-col cols="8">
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
</style>
