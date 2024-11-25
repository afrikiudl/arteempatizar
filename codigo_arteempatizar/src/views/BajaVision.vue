<template>
<b-container>
  <div class="bajavision">
    <h2>Baja Visión</h2>
    <p>Ejemplo de empatia con personas con discapacidad baja visión</p>

    <section>
      <h3>Cuadro Busqueda con mal contraste</h3>
      <p> No tiene contraste</p>
      <p> No se puede hacer más grande la letra del imput</p>
      <form action="" method="get">

      <p>
        <label for="textoBuscar">Introducd el texto a buscar:</label>
          <input id="textoBuscar" type="text" maxlength="30" />
          <input id="botonBuscar" type="submit" value="Buscar" /> 
          <!-- <input type="image" src=".././assets/search-icon.png" width="25">        -->

      </p>
      </form>
    </section>


    <section>
      <h3>Textos con mal contraste</h3>
      <p class="malContraste">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum vehicula odio non malesuada. Nulla vestibulum justo in lorem congue, gravida interdum nunc varius. Proin aliquet nunc eros, at tincidunt justo condimentum lobortis. Cras vehicula ipsum congue sem laoreet, mollis viverra sem tristique. Etiam et consequat felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus sed mi lorem. Phasellus commodo aliquet nulla et dapibus. Curabitur venenatis eleifend venenatis. Curabitur tortor purus, dapibus ut eros vel, fringilla pharetra risus. Nulla sit amet sodales sapien. Ut a egestas dolor.</p> 
  </section>



  <section>
    <h3>Imgagen de texto</h3>
    <p> No se puede hacer más grande la imagen y tal vez esta pixelada y tiene mala visualización.</p> 
    <img src="https://cdn.slidesharecdn.com/ss_thumbnails/eltexto-120723184532-phpapp02-thumbnail.jpg?width=640&height=640&fit=bounds"/>
  </section>
  

</div>
</b-container>

</template>

    
<script>



export default {
  name: 'BajaVision',
  props: {  
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.malContraste {
  color: lightgreen;
}
#textoBuscar {
    border : 1px solid lightgray;
    padding : 0.02em;
    color    :#99A0AA;
    padding-right: 30px;
    font-size: 12px;
}

.img {
  width: 200px;
  height: 200px;
}
</style>
