<template>
  <div class="motriz">
    <h2>Motriz</h2>
    <p> Ejemplo de empatia con personas con discapacidad motriz</p>
    
    <section>
      <h3>Enlace en movimiento</h3>
      <p> Al entrar en el enlace, se mueve. </p>
      <!-- asigna el valor de la variable disabled al atributo shake -->
      <div :class="{ shake: disabled }">

        <div v-if="disabled">
          <a href="#" @mouseover="warnDisabled">Se mueve!!!</a>
        </div>

        <p>
          <a href="https://www.udl.cat/ca/" @mouseover="warnDisabled">Acceso UdL</a>
          |
          <a href="#" @mouseover="warnDisabled">Otro enlace</a>
          |
          <a href="#" @mouseover="warnDisabled">Enlace a algun sitio</a>
        </p>

      </div>
    </section>


    <section>
      <h3>Enlaces con acceso desordenado</h3>
      <p> La navegación por los enlaces por teclado (tecla TAB) no es coherente tal y como se presentan en pantalla.</p>
      
      <b-link href="#foo" tabindex="1">Enlace1</b-link> | 
      <b-link href="#foo"  tabindex="4">Enlace4</b-link> | 
      <b-link href="#foo" disabled>Enlace Deshabilitado</b-link> | 
      <b-link href="#foo"  tabindex="2">Enlace2</b-link> | 
      <b-link href="#foo"  tabindex="5">Enlace5</b-link> | 
      <b-link href="#foo"  tabindex="3">Enlace3</b-link>

    </section>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      disabled: false
    }
  },
  methods: {
    warnDisabled() {
      this.disabled = true
      setTimeout(() => {
        this.disabled = false
      }, 1500)
    }
  }
}
</script>

<style scoped>
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  900% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>