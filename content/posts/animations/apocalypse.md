---
layout: post
title: Dinosaurio apocalíptico
tags: ["Animaciones"]
date: "2019-11-19"
author: "Neus Agüera"
weight: 399
categories: ["Animations"]
img: animations/dino.gif
---
Este gracioso dinosaurio está viendo como un cometa se acerca, ¿Colapsará?. En este post puedes encontrar el código para crearlo. Pronto crearemos un curso de iniciación a las animaciones.

{{< partial file="animation/apocalypse" >}}

### Ficheros HTML y CSS
{{< twocodes >}}
{{< highlight HTML>}}
<div class="apocalypse">
  <div class="dino">
    <div class="dino-head">
      <div class="dino-eye">
        <div class="dino-eyebrown"></div>
        <div class="dino-iris"></div>
      </div>
      <div class="dino-eye right">
        <div class="dino-eyebrown"></div>
        <div class="dino-iris"></div>
      </div>
      <div class="dino-nostril"></div>
      <div class="dino-nostril right"></div>
      <div class="dino-tulk"></div>
      <div class="dino-tulk right"></div>
    </div>
    <div class="dino-body">
      <div class="dino-foot">
        <div class="dino-hoff"></div>
        <div class="dino-hoff center"></div>
        <div class="dino-hoff last"></div>
      </div>
      <div class="dino-foot right">
        <div class="dino-hoff"></div>
        <div class="dino-hoff center"></div>
        <div class="dino-hoff last"></div>
      </div>
    </div>
    <div class="dino-hand">
      <div class="dino-hoff"></div>
      <div class="dino-hoff center"></div>
      <div class="dino-hoff bottom"></div>
    </div>
    <div class="dino-hand right">
      <div class="dino-hoff"></div>
      <div class="dino-hoff center"></div>
      <div class="dino-hoff bottom"></div>
    </div>
    <div class="dino-tail">
      <div class="bone"></div>
      <div class="bone center"></div>
      <div class="bone bottom"></div>
    </div>
  </div>
  <div class="dino-knock">Knock, <span>knock...</span></div>
  <div class="dino-uhh">uhh?</div>
  <div class="meteor">
    <div class="meteor-fire"></div>
    <div class="meteor-rock"></div>
  </div>
  <div class="speech">
    <span>.dinosaur {</span>
    <span class="inside">visibility: collapse;</span>
    <span>}</span>
  </div>
</div>
{{< /highlight>}}
{{< highlight css >}}
.apocalypse {
  position: relative;
  height: 300px;
  overflow: hidden;
  max-width: 375px;
  margin: 0 auto;
}
.dino {
  position: absolute;
  width: 190px;
  height: 200px;
  margin: 0 auto;
  bottom: 0;
  left: 0;
}

.dino-head {
  width: 72px;
  height: 65px;
  position: absolute;
  left: 50%;
  top: 5%;
  background: green;
  transform: translateX(-50%) rotate(46deg);
  border-radius: 80% 150% 25% 250%;
  box-shadow: 1px 1px 3px black;
  z-index: 100;
  animation: move-head 10s infinite ease;
}

.dino-eye {
  background: green;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  top: 15%;
  left: -30%;
  position: absolute;
  transform: rotate(-46deg);
}

.dino-eye:before {
  content: "";
  display: block;
  background: green;
  width: 34px;
  height: 27px;
  border-radius: 50%;
  border-top: 2px solid #aada47;
  position: absolute;
  top: 88%;
  left: 36%;
  z-index: 10;
}
.dino-eye.right {
  left: 14%;
  top: -38%;
}
.dino-eye.right:before {
  left: 4%;
}

.dino-iris {
  width: 30px;
  height: 35px;
  background: white;
  border-radius: 50%;
  position: absolute;
  left: 25%;
  top: 38%;
}
.dino-iris:before {
  content: "";
  display: block;
  background: black;
  width: 14px;
  height: 18px;
  border-radius: 50%;
  left: 52%;
  position: absolute;
}
.dino-iris:after {
  content: "";
  display: block;
  background: white;
  width: 5px;
  height: 7px;
  border-radius: 50%;
  left: 52%;
  position: absolute;
}
.right .dino-iris {
  left: 16%;
}
.dino-nostril {
  width: 5px;
  height: 15px;
  background: black;
  border-radius: 50% 150% 50%;
  position: absolute;
  bottom: 9%;
  left: 62%;
  z-index: 10;
  transform: rotate(105deg);
}
.dino-nostril.right {
  left: 75%;
  bottom: 24%;
  transform: rotate(-10deg);
}

.dino-body {
  background: green;
  width: 140px;
  height: 156px;
  border-radius: 50%;
  position: absolute;
  top: 10%;
  left: 15%;
  z-index: 10;
  box-shadow: 0px 2px 1px black;
}
.dino-body:after {
  content: "";
  display: block;
  background: rgba(255, 255, 255, 0.2);
  width: 84px;
  height: 105%;
  left: 20%;
  position: absolute;
  border-radius: 50%;
}
.dino-hand {
  width: 35px;
  height: 36px;
  position: absolute;
  background: green;
  border-radius: 20% 50% 50% 20%;
  left: 30%;
  bottom: 40%;
  z-index: 1000;
  overflow: hidden;
  box-shadow: 0px 1px 1px #315320;
  animation: move-hand 10s infinite ease;
}
.dino-hand .dino-hoff {
  background: white;
  border-radius: 50%;
  width: 15px;
  height: 8px;
  position: absolute;
  right: 0px;
  top: 20%;
  box-shadow: -1px -1px 1px #315320;
}
.dino-hand .dino-hoff.center {
  top: 40%;
}
.dino-hand .dino-hoff.bottom {
  top: 60%;
}
.right .dino-hand .dino-hoff {
  right: inherit;
  left: -1%;
}
.dino-hand.right {
  border-radius: 50% 20% 20% 50%;
  left: 53%;
}
.dino-hand.right .dino-hoff {
  right: inherit;
  left: -1%;
}

.dino-foot {
  width: 45px;
  height: 46px;
  position: absolute;
  background: green;
  border-radius: 50% 50% 20% 20%;
  left: 16%;
  bottom: 0;
  z-index: 10;
  box-shadow: -1px -1px 1px #315320;
}
.dino-foot.right {
  left: 59%;
  box-shadow: 1px -1px 1px #315320;
}
.dino-foot.right .dino-hoff {
  right: inherit;
  left: -1%;
}

.dino-foot .dino-hoff {
  background: white;
  border-radius: 50%;
  width: 11px;
  height: 20px;
  position: absolute;
  left: 11%;
  bottom: -11%;
  box-shadow: -1px 1px 1px #315320;
}
.dino-foot .dino-hoff.center {
  left: 34%;
}
.dino-foot .dino-hoff.last {
  left: 60%;
}

.dino-tail {
  background: green;
  width: 171px;
  height: 70px;
  border-radius: 20% 120% 0 120%;
  position: absolute;
  right: -37px;
  bottom: 19px;
}
.dino-tail .bone {
  background: #aada47;
  height: 20px;
  position: absolute;
  width: 20px;
  right: 20%;
  bottom: 51%;
  border-radius: 50% 50% 20% 120%;
  box-shadow: 1px 1px 1px black;
}
.dino-tail .bone.center {
  right: 11%;
  bottom: 41%;
}
.dino-tail .bone.bottom {
  right: 2%;
  bottom: 31%;
}

.meteor {
  position: absolute;
  top: 0;
  right: 5%;
  width: 140px;
  height: 100px;
  animation: move-meteorite 10s infinite ease;
}

.meteor-fire {
  width: 140px;
  height: 100px;
  position: absolute;
  right: 0;
  top: 0;
  background: red;
  border-radius: 150px 10px 300px 150px;
  box-shadow: 8px -3px 6px orange, inset -11px 1px 17px #ffeb3b;
  animation: move-shadowfire 1.5s infinite ease;
}
.meteor-rock {
  width: 80px;
  height: 82px;
  background: gray;
  position: absolute;
  border-radius: 50%;
  bottom: 2%;
  left: 3%;
  box-shadow: inset -3px 6px 11px black;
}

.speech {
  background: red;
  width: 100%;
  height: 100%;
  padding: 0 18px;
  z-index: 1000;
  position: absolute;
  opacity: 0;
  animation: speech-visible 10s infinite ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.speech span {
  display: block;
  left: 24%;
  color: white;
  font-family: "Oswald", sans-serif;
  font-size: 40px;
  line-height: 60px;
  font-weight: 900;
  letter-spacing: -3px;
}
.speech .inside {
  padding-left: 24px;
}

.dino-knock {
  position: absolute;
  bottom: 29%;
  right: 14%;
  font-size: 26px;
  font-family: "Oswald", sans-serif;
  font-weight: 900;
  font-style: italic;
  line-height: 20px;
  animation: knock-visible 10s infinite ease;
  opacity: 0;
}
.dino-knock span {
  display: block;
  padding-left: 24px;
}

.dino-uhh {
  position: absolute;
  top: 21%;
  left: 23%;
  color: $c_rustyred;
  font-size: 26px;
  font-family: "Oswald", sans-serif;
  font-weight: 900;
  font-style: italic;
  line-height: 20px;
  animation: uhh-visible 10s infinite ease;
  opacity: 0;
}
@keyframes move-meteorite {
  30%,
  35%,
  39% {
    right: 26%;
    top: 68px;
  }
  31%,
  34%,
  36%,
  38% {
    right: 24.5%;
    top: 64px;
  }
  33%,
  37% {
    right: 25.5%;
    top: 66px;
  }
  100% {
    right: 26%;
    top: 68px;
  }
}

@keyframes move-head {
  30%,
  40% {
    top: 26%;
  }
  60% {
    top: 5%;
  }
  100% {
    top: 5%;
  }
}

@keyframes move-hand {
  30%,
  40% {
    bottom: 60%;
  }
  50% {
    bottom: 40%;
  }
  100% {
    bottom: 40%;
  }
}

@keyframes speech-visible {
  0% {
    opacity: 0;
  }
  68% {
    opacity: 0;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
@keyframes move-shadowfire {
  0% {
    box-shadow: 8px -3px 6px orange, inset -11px 1px 17px #ffeb3b;
  }
  30%,
  35%,
  39% {
    box-shadow: 8px -3px 10px orange, inset -11px 1px 17px #ffeb3b;
  }
  31%,
  34%,
  36%,
  38% {
    box-shadow: 8px -3px 8px orange, inset -11px 1px 17px #ffeb3b;
  }
  33%,
  37% {
    box-shadow: 8px -3px 10px orange, inset -11px 1px 17px #ffeb3b;
  }
  100% {
    box-shadow: 8px -3px 6px orange, inset -11px 1px 17px #ffeb3b;
  }
}
@keyframes knock-visible {
  0%,
  32% {
    opacity: 0;
  }
  33%,
  59%,
  100% {
    opacity: 1;
  }
}

@keyframes uhh-visible {
  0%,
  49% {
    opacity: 0;
  }
  50%,
  79% {
    opacity: 1;
  }
  80%,
  100% {
    opacity: 0;
  }
}
{{< /highlight >}}
{{< /twocodes >}}

### Enlace a codepen
Aquí tienes el enlace a <a href="https://codepen.io/neusaguera/pen/LYYadwj" target="_blank"> Codepen </a>  donde podrás ver el resultado.