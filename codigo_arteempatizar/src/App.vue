<template>
  <div id="app">

    <b-container  fluid>

      <a href="#main-content" class="skip-link">
      Saltar al contenido principal
    </a>


    <!-- faltaria incluir aqui la etiqueta "header", pero ya se encuentra en el componente cabecera-->
    <Cabecera></Cabecera>


    <main id="main-content" class="my-5"> 
    
      <router-view/>
    
    </main>

    <Pie> </Pie>



  </b-container>

  </div>

</template>

<script>
import Cabecera from './components/Cabecera.vue'
import Pie from './components/Pie.vue'


export default {
  name: 'app',
  components: { 
    Cabecera, 
    Pie
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
  font-size: 1.2em;
}




/* enlace de salto al contenido */

.skip-link {
  position: absolute;
  top: auto;
  left: -999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
  
}

/* Show keyboard focus */
.skip-link:focus-visible {
  top: 0;
  left: 0;
  width: auto;
  height: auto;
  overflow: visible;
  display: block;
  color: black;
  background-color: #F8DB4A;
  padding: 4px;

}

a:focus-visible {
  top: 0;
  left: 0;
  width: auto;
  height: auto;
  overflow: visible;
  color: black;
  background-color: #F8DB4A;
  padding: 4px;
}

section {
  padding: 4em 2em 5em 2em;
  margin: 2em;
  border: 1px solid grey;
}

</style>
