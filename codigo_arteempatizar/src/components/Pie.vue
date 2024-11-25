<template>  
    <footer class="pie">
      <p>
      <b-link href="http://www.graudissenydigitalitec.udl.cat/">Grado Diseño Digital y Tecnologías Creativas</b-link> 
    ||   
    <b-link href="http://www.udl.cat/">Universitat de Lleida</b-link>.
    </p>
    <p>
      <router-link to="/about" target="_blank">
      Información del proyecto
      <!-- enlace se abre en nueva ventana -->
      <!--<router-link :to="{ name: '/about'}" target="_blank">-->
      </router-link>
    </p>
  </footer>
</template>

<script>
export default {


}
</script>


<style scoped>
.pie {
  background-color: #09458B;
  color: whitesmoke;
  font-size: 1.5em;

}

.pie a {
  color: #f8f9fa;
  text-decoration: underline;
}
.pie a:hover { 
  color: black;
  background-color: #F8DB4A;  
 }

 .pie a:focus-visible {
  top: 0;
  left: 0;
  width: auto;
  height: auto;
  overflow: visible;
  color: black;
  background-color: #F8DB4A;
  padding: 4px;
}
 .pie a.router-link-exact-active {
  /*color: #005a9c; */
  color: white;
  background-color: black;
  padding: 3px;
}
</style>