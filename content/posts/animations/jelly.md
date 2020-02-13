---
layout: post
title: Medusa
tags: ["Animaciones"]
date: "2020-02-13"
author: "Neus Agüera"
weight: 398
categories: ["Animations"]
img: animations/jelly.gif
---
¡Cuidado en este mar hay medusas! ¿Quieres saber como hemos creado esta medusa? Debajo tienes el código y el enlace a codepen.

{{< partial file="animation/jelly" >}}

### Ficheros HTML y CSS
{{< twocodes >}}
{{< highlight HTML>}}
<div class="sea">
  <div class="jellyfish">
    <div class="jellyfish-body"> </div>
    <div class="jellyfish-down">
      <div class="jellyfish-tentacle"></div>
      <div class="jellyfish-tentacle"></div>
      <div class="jellyfish-tentacle"></div>
      <div class="jellyfish-tentacle"></div>
    </div>
  </div>
</div>
{{< /highlight >}}
{{< highlight CSS>}}
.sea {
  position: relative;
  height: 300px;
  overflow: hidden;
  max-width: 375px;
  margin: 0 auto 32px auto;
  background-color: #00c1ff;
  background: linear-gradient(#00c1ff 0%, #6875f2 100%);
  
}
.jellyfish {
  width: 150px;
  position: absolute;
  top: 3%;
  left: 20%;
  animation: jellyfish-mov 15s linear infinite, mov-float 3s linear infinite;
}

.jellyfish-body {
  background: rgba(255, 151, 202, 0.7);
  width: 80px;
  height: 50px;
  border: 6px solid rgba(255, 151, 202, 0.8);
  border-bottom: 10px solid rgba(255, 151, 202, 0.8);
  border-radius: 50% 50% 20% 20%;
}
.jellyfish-down {
  margin-left: 10px;
}
.jellyfish-tentacle {
  width: 10%;
  height: 40px;
  float: left;
  margin-top: -12px;
  border-left: 6px solid rgba(255, 151, 202, 0.8);
  border-radius: 50%;
  animation: jellyfish-tentacle 2s linear infinite;
}

@keyframes mov-float {
  0% {
    margin-top: 0;
  }
  50% {
    margin-top: 5%;
  }
  100% {
    margin-top: 0;
  }
}
@keyframes jellyfish-mov {
  0% {
    -webkit-transform: translateX(-340%);
    -ms-transform: translateX(-340%);
    transform: translateX(-340%);
  }
  100% {
    -webkit-transform: translateX(440%);
    -ms-transform: translateX(440%);
    transform: translateX(440%);
  }
}
@keyframes jellyfish-tentacle {
  0% {
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
  }
  25% {
    -webkit-transform: rotate(15deg);
    -ms-transform: rotate(15deg);
    transform: rotate(15deg);
  }
  50% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  75% {
    -webkit-transform: rotate(-15deg);
    -ms-transform: rotate(-15deg);
    transform: rotate(-15deg);
  }
  100% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}
{{< /highlight >}}
{{< /twocodes >}}

### Enlace a codepen
Aquí tienes el enlace a <a href="https://codepen.io/neusaguera/pen/zYGvQEx" target="_blank"> Codepen </a>  donde podrás ver el resultado.