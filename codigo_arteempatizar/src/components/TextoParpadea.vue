<template>

    <div class="textoparpadea">
        <span class="parpadea text">
            <!--https://codepen.io/sekane81/pen/yLwYrw-->
            <strong>Este texto parpadea</strong>
        </span>
    
    </div>
  </template>
  
  
  
  <style>
  
  
  .blink {
  background:red;
  width:100px;
  height:100px;
  }
  
  
  .text {
    font-size:28px;
    font-family:helvetica;
    font-weight:bold;
    color:#71d90b;
    text-transform:uppercase;
  }
  .parpadea {
    
    animation-name: parpadeo;
    animation-duration: 1.5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  
    -webkit-animation-name:parpadeo;
    -webkit-animation-duration: 1s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
  }
  
  @-moz-keyframes parpadeo{  
    0% { opacity: 1.0; }
    50% { opacity: 0.0; }
    100% { opacity: 1.0; }
  }
  
  @-webkit-keyframes parpadeo {  
    0% { opacity: 1.0; }
    50% { opacity: 0.0; }
     100% { opacity: 1.0; }
  }
  
  @keyframes parpadeo {  
    0% { opacity: 1.0; }
     50% { opacity: 0.0; }
    100% { opacity: 1.0; }
  }
  
  </style>
  
  
  