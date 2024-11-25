<template>
  <div class="about">
    <h2>Presentación del proyecto </h2>
    <p>
      Es una web que presenta barreras de acceso de forma directa a usuarios sin discapacidad para que al interactuar con ellas, empaticen con los problemas habituales que tienen los usuarios con discapacidad al usar la tecnología
    </p>

    <h2>Lista de Barreras </h2>
    Para cada discapacidad se han incliuido distintas barreras. Esta información se encuentra en las propias páginas:
    <div>
      <router-link to="/visual">Visual</router-link> | 
      <router-link to="/bajavision">Baja Visión</router-link> | 
      <router-link to="/auditivo">Auditivo</router-link> | 
      <router-link to="/motriz">Motriz</router-link> | 
      <router-link to="/cognitivo">Cognitivo</router-link>
    </div>

    <h2> Reflexión</h2>
    <p>En esta web se ha intentado ofrecer una buena experiencia a las personas con discapacidad y una experiencia limitante a las personas sin discapacidad</p>

    <h3>Accesible User Experience, AUX</h3>
      <p>
        Es el conjunto de factores y elementos relativos a la interacción del usuario con discapacidad en un entorno o dispositivo concretos, dando como resultado una percepción positiva de dicho servicio, producto o dispositivo.
        
        <br/>
      Dicho de otro modo, que las personas con discapacidad y que utilizan tecnología asistencial, tengan un fácil acceso e interacción en la web para que disfruten de la experiencia.

      </p>
    <p>
        El proposito es percibir una sensación parecida a cuando las personas con discapacidad impactan con barreras de acceso a contenido web.
      </p>
    <p>
        De este modo, empatizar con ellas para poder ponerse en su piel.
    </p>
    <b-link href="https://accessibleux.wordpress.com/manifesto/">Enlace al manifiesto de Experiencia de Usuario Accesible</b-link>.

    <div>
    <b-img src="../assets/accessible-user-experience.webp" fluid alt="Conocer al otro fomenta la empatia"></b-img>
  </div>

  </div>
</template>




<style>

.about a {
  text-decoration: underline;
}

</style>