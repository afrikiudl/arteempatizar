<template>
  <div id="Grafico">

  <BarChart /> 
  <!--<BarChartAPI />-->

</div>

</template>

<script>
import BarChart from './BarChart.vue'
//import BarChartAPI from '../components/BarChartAPI.vue'


export default {
  name: 'Grafico',
  components: { 
    BarChart
   /* BarChartAPI  */
  } 
}
</script>
