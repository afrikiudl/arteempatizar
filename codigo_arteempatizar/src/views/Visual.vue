<template>
<b-container>
  <div class="visual">
    <h2>Visual</h2>
    <p>Ejemplo de empatia con personas con discapacidad visual total</p>
    
    
  <section>
    <h3>Ejemplo de Imágenes ocultas</h3>
    <p>Solo pueden "verse" con el lector de voz.</p> 
    

    <button @click="mostrar = !mostrar">
      <span v-if="mostrar">
        Oculta las imágenes
      </span>
      <span v-else>       
         Muestra las imágenes
      </span>
    </button>



    <b-carousel
      id="carousel-no-animation"
      v-model="slide"
      :interval="10000"
      controls
      fade
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
      label-next="Siguiente Diapositiva"
      label-prev="Anterior Diapositiva"
      label-goto-slide="Ir a la diapositiva"
      label-indicators="Seleccionada para mostrar"
      >
      <div v-for="proyecto in proyectos" :key="proyecto.id">
          <p v-if="mostrar">
            <Diapos :srcimg=proyecto.srcimg :alt=proyecto.alt ></Diapos>
          </p>
          <p v-if="!mostrar">
            <Diapos :srcimg=imgVacia :alt=proyecto.alt ></Diapos>
          </p>
      </div>
    </b-carousel>
  </section>



  <section>
  <h3>Tabla de datos</h3>
  <p> Esta tabla se presenta de forma adecuada para personas que utilizan lector de voz, pero se visualiza mal porque los usuarios que ven no saben a que corresponde cada celda/columna</p>


  <table>
    <caption>Horario de apertura</caption>
    <tr>
      <td></td>
      <th scope="col"><span class="sr-only">Lunes</span>  &nbsp; </th>
      <th scope="col"><span class="sr-only">Martes</span> &nbsp; </th>
      <th scope="col"><span class="sr-only">Miercoles</span> &nbsp; </th>
      <th scope="col"><span class="sr-only">Jueves</span> &nbsp; </th>
      <th scope="col"><span class="sr-only">Viernes</span> &nbsp; </th>
    </tr>
    <tr>
      <th scope="row"><span class="sr-only">09:00 – 11:00 horas</span>&nbsp;</th>
      <td>Abierto</td>
      <td>Cerrado</td>
      <td>Abierto</td>
      <td>Abierto</td>
      <td>Abierto</td>
    </tr>
    <tr>
      <th scope="row"><span class="sr-only">11:00 – 13:00</span>&nbsp;</th>
      <td>Abierto</td>
      <td>Abierto</td>
      <td>Cerrado</td>
      <td>Cerrado</td>
      <td>Cerrado</td>
    </tr>
    
  </table>
</section>

<section>
<h3>Gráfico</h3>
<p> Grafico que con una explicación de los datos que contiene.</p>
 <Grafico>  </Grafico>

</section>



</div>
</b-container>

</template>


<script type="text/javascript">var _gauges = _gauges || []; (function() {var t   = document.createElement('script'); t.type  = 'text/javascript'; t.async = true; t.id    = 'gauges-tracker'; t.setAttribute('data-site-id', '59133cdabad3a70724018023'); t.setAttribute('data-track-path', 'https://track.gaug.es/track.gif'); t.src = 'https://d36ee2fcip1434.cloudfront.net/track.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(t, s);})();</script>
    
    
<script>

import Diapos from '../components/Diapos.vue' 
import Grafico from '../components/Grafico.vue' 

//const lstProysJson = '/../../public/WD_Practica1_2425.json';


const lstProysJson = 'https://raw.githubusercontent.com/afrikiudl/proyectoswd2425/refs/heads/main/WD_Practica1_2425.json';


export default {
  name: 'Visual',
  props: {  
   name: {
      type: String,
      default: 'visual'
    }
  },
  components: {
       Diapos,
       Grafico 
      },
  data() {
      return {
        proyectos:[],
        githubPage: 1,
        page: 1,
        loading: false,
        perPage: 5,
        mostrar: false,
        //imgVacia: "https://picsum.photos/600/300/?image=25"
        imgVacia:"https://img.freepik.com/vector-gratis/marco-gris-rectangulo-vector-fondo-negro_53876-167869.jpg?t=st=1731584898~exp=1731588498~hmac=f0b6dfcac6b3992909dcbd4bc660f1969576e4e8ecb73712a9713d060c5344d7&w=1380"
      }
    },
    mounted() {
      this.fetchData()
    },
    methods: {
        async fetchData() {
          const res = await fetch (lstProysJson);
          const val= await res.json();
          this.proyectos=val;
          console.log(val);
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
/*
.carousel-control-prev {
border: 1px solid red;
color: red;
}

.carousel-control-next {
  border: 1px solid red;
  color: red;
}
*/

table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

</style>
