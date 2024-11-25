<template>
<div class="diapos">
  
  

    <b-carousel-slide
      content-visible-up="sm"
      :caption="alt"
      :img-src="srcimg"
      :img-alt="alt"
      width="1024"
      height="600"
      html="https://graudissenydigitalitec.udl.cat/ca/"         
    > </b-carousel-slide>

</div>
</template>

<script>
export default {
  props: ["id", "srcimg", "alt"]
};
</script>
<style>

.carousel-caption {
  color: #00000;
  background-color: black;
  opacity: 0.8;
}

.diapos {

  background: black !important;

}

</style>
