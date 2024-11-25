<template>
  <div id="cognitivo">
    <h2>Cognitivo</h2>
    <p>Ejemplo de empatia con personas con discapacidad cognitiva</p>

<section>
    <h3>Elementos en movimiento</h3>
    <p>Se mueven elementos para simular desconcentración.</p>
  <div class="animate__animated animate__bounce">
    <a href="#" >Enlace que SALTA al cargar la página</a>
  </div>
</section>



<section>
    <!-- si no esta esto el texto de "me voy" no se va-->
    <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
    
    <h3>Texto que parpadea</h3>
    <p> Texto que parpadea y molesta</p>
    <TextoParpadea />

</section>


<section>
    <!-- si no esta esto el texto de "me voy" no se va-->
    <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
    
    <h3>Pintar SVG</h3>
    <p> Elemento que se pinta en SVG pero no se puede tener el control</p>
    <AnimatedSVG />
</section>



<section>
  <h3>Boton que aparece y desaparece texto</h3>
  <p> Textos en moviiento. Puede causar desorientación (porque aparece y desaparece texto)</p>
  <button @click="show = !show">
    Clicame!
  </button>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated tada"
    leave-active-class="animated bounceOutRight"
  >
    <p v-if="show">Me vooooy!</p>
  </transition>

  <!--<button @click="show = !show"> Y a mi también!</button>-->
  <transition name="bounce">
    <p v-if="show">No me verás más!!</p>
  </transition>

  <transition name="face">
    Conditional display via v-show

    <p v-if="!show">Ahora si me vuelves a ver!!</p>
  </transition>
</section>



<section>
  <h3>Lista que caen elementos</h3>
  <p>Elementos que se añaden/eliminan aletatoriamente. Puede causar confusión</p>
  <CognitivoListaCae></CognitivoListaCae>
</section>


<section>
  <h3>ModalForm</h3>
  <p>Elementos que se incluyen en la pantalla. Permite que el usuario escriba con un modal</p>
  <ModalForm></ModalForm>
</section>

<section>
  <h3>Mensaje Superpuesto</h3>
  <o>Mensaje que aparece superpuesto en pantalla</o>
  <ToastMovimiento></ToastMovimiento>
</section>    

<section>
  <h3>Cognitivo Toast</h3>
  <p>Ejemplo de un mensaje "toast" unico y también conectado con datos JSON</p>
  <CognitivoToast></CognitivoToast>
</section>

    
  

</div>
</template>

<script>
/* se importan los componentes */
import CognitivoListaCae from '../components/CognitivoListaCae.vue'
import CognitivoToast from '../components/CognitivoToast.vue' 
import TextoParpadea from "../components/TextoParpadea.vue"
import AnimatedSVG from "../components/AnimatedSVG.vue"
import ToastMovimiento from '../components/ToastMovimiento.vue'
import ModalForm from "../components/ModalForm.vue"


export default {
  name: 'Cognitivo',
  data() {
    return {
    show: true
  }
  },
  props: {  
   name: {
      type: String,
      default: 'cognitivo'
    }
  },
  components: {
    CognitivoListaCae, 
    CognitivoToast,
    TextoParpadea,
    AnimatedSVG,
    ModalForm,
    ToastMovimiento

      }
  }
</script>


<style scoped>

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(5);
  }
  100% {
    transform: scale(10);
  }
}


</style>


