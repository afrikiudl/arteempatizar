<template>
  <!-- https://vue-chartjs.org/guide/ -->
   <div clas="grafico">

    <button aria-describedby="Explicacion">Clica en el botón para más información del gráfico</button>
      <span id="Explicacion" class="sr-only">
      Este es un grafico que explica los datos entre Enero y Mayo de los litros lluvia de la región. En enero llovió 22 litros, en febrero 20 litros, en marzo 12 litros y en mayo 44 litros.      
    </span>

    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  

    </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ 'Enero', 'Febrero', 'Marzo', 'Abril' ],
        datasets: [ { data: [22, 20, 12, 44] } ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>