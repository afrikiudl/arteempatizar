<template>    
    <header class="site-header">
      <nav class="menuSuperior">
          <router-link to="/">Inicio</router-link> | 
          <router-link to="/about">Información</router-link> 
        </nav>
  
      
      <h1>
        Experiencia Digital Inclusiva: <br />
        ¡Pon a prueba tu <strong>empatía </strong>hacia las personas con discapacidad!
      </h1>
  
    <div class="textoPrincipal_interno">
      <p class="textoGrande">Selecciona una discapacidad y vive la experiencia digital desde su perspectiva:</p>
      <nav class="navDiscapacidad">      
        <router-link to="/visual">Visual</router-link> | 
        <router-link to="/bajavision">Baja Visión</router-link> | 
        <router-link to="/auditivo">Auditivo</router-link> | 
        <router-link to="/motriz">Motriz</router-link> | 
        <router-link to="/cognitivo">Cognitivo</router-link>
      </nav>
      
      <p>O también puedes... Seleccionar el botón para ser aleatorio</p>
  
      <b-button v-on:click="enlacerandom" size="lg" pill variant="light">Haz clic y sorpréndete!</b-button>
  
    </div>
  
    </header>
  </template>
  
  <script>
  
  
  export default {
    name: 'app',
    data: function() {
    return {
      numMax: 5, /* numero máximo de elementos par hacer el random */
      numRandom: 1,
      numRandomAhora: 0
    };
    },
    methods: {
      enlacerandom: function () {
  
  
        do {
        this.numRandomAhora = this.numRandom
        this.numRandom = Math.floor(Math.random() * this.numMax)
      } while ( this.numRandom == this.numRandomAhora );
  
  
        switch (this.numRandom) {
          case 0:
          return this.$router.push({ path: '/visual' })
          case 1: 
          return this.$router.push({ path: '/bajavision' })
          case 2:
          return this.$router.push({ path: '/auditivo' })
          case 3:
          return this.$router.push({ path: '/cognitivo' })
          case 4:
          return this.$router.push({ path: '/motriz' })
          
        }
  
      },
    }
  }
  </script>
  
  
  <style>
  
  h1 {
    font-size: 2em;
  }
  
  nav {
    padding: 30px;
  }
  
  nav a {
    font-weight: bold;
    color: #f8f9fa;
    font-size: 1.5em;
  }
  
  nav a:hover { 
    color: black;
    background-color: #F8DB4A;  
   }
  
  
  nav a.router-link-exact-active {
    /*color: #005a9c; */
    color: black;
    background-color: #CBE0FC;
    border: 1px solid black;
    padding: 3px;
  }

  
  .site-header {
    background-color: #09458B;
    border: 1px solid #D8F3FF; 
    padding: 1em;
    color: whitesmoke;
  }
  
  .navDiscapacidad {
    border: 1px solid grey;
    background: #012d62;
    margin: 1em 2em 1em 2em;
  }
  
  .menuSuperior {
    border: 1px solid grey;
    background: #012d62;
    margin: 1em 1em;
  }
  .textoGrande {
    font-size: 1.5em;

  }

  </style>
  