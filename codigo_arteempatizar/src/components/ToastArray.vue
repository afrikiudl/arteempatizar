<template>
<!--      <div class="p-3 bg-secondary progress-bar-striped" style="min-height: 170px;"> -->
    <div class="p-3 bg-secondary">
      <b-toast 
      id="example-toast2"
      :title="titulo"  
      static auto-hide-delay="5ms"
      no-auto-hide
      :href="url">

        <b-button class="mb-2" variant="primary" @click="$bvToast.show('example-toast2')">
        Boton    
      </b-button>

      </b-toast>
    </div>
  </template> 

<!--
<script>
export default {
  props: ["id", "textoBoton", "mensaje"]
};
</script>
-->
<script>

export default {
  name: 'ToastArray',
  props: {
    textoBoton: String,
    mensaje: String,
    url: String
  }
}
</script>


