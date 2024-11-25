<template>
<b-container>
    <div class="auditivo">
    <h2>Auditivo</h2>
    <p>Ejemplo de empatia con personas con discapacidad auditiva</p>

    <section>
    <h3>Video sin subtitulos</h3>
    <p>Video sin audio y solo con lengua de signos</p>

    <iframe width="695" height="391" src="https://www.youtube.com/embed/49ARvYVZnD8" title="Armas. El control de las armas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    
  
    </section>


    <section>

    <h3>Texto complejo y justificado</h3>
    <p class="textoJustificado">
    
      El desarrollo de habilidades que posibiliten la comprensión lectora se ha convertido en un reto de la cultura contemporánea que repercute en la formación de la personalidad, por la trascendencia que tiene la reconstrucción de los enunciados, o sea, la comprensión de los significados que entrañan los enunciados dentro de un texto. Desde este punto de vista, enseñar a comprender posee un extraordinario valor, pues constituye un importante punto de partida para la apropiación del conocimiento y su modificación oportuna. Sin lugar a dudas, implica una transformación intelectual, espiritual, material y afectiva, en la medida en que se buscan y crean nuevos significados.

      <!-- Fuente: http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S2218-36202019000400206 -->
    </p> 
  </section>

  

</div>
</b-container>

</template>

    
<script>

export default {
  name: 'auditivo',
  props: {  
   
  }
}
</script>

<style scoped>
.textoJustificado {
  text-align: justify;

}
</style>
