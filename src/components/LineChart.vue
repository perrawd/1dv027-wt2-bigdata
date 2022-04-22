<template>
  <div class='linechart'>
    <apexcharts type='line' :options='chartOptions' :series='series'></apexcharts>
  </div>
</template>

<script>

export default {
  name: 'LineChart'
}
</script>
