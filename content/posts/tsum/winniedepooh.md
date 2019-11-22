---
layout: post
title: Nivel 3. Winnie de pooh
img: winnie/winnie.jpg
tags: ["Tsum", "Ilustraciones"]
date: "2019-11-22"
author: "Neus Agüera"
weight: 197
categories: ["Tsum"]
---

Empezamos el tercer apartado del curso con la compañía de uno de los ositos más famosos de Disney, Winnie de pooh. ¿Qué veremos en este nivel? Este será un nivel corto pero donde quiero mostrarte dos trucos que facilitan mucho mi trabajo.

- <a href="#inspector">Modo Inspector</a>
- <a href="#order">Ordenar CSS</a>

## Paso 1: Las formas básicas.

Seguro que no necesitas que te dé directrices de como crear las formas básicas de Winnie, así que te dejo el código como siempre y en la nota hablaremos del modo inspector, algo que si aún no conoces, te encantará.

{{< image src="/winnie/basic.jpg" alt="formas básicas de Winnie">}}

### winnie.html
{{< highlight HTML >}}
<div class="character">
    <div class="winnie-ear"></div>
    <div class="winnie-ear right"></div>
    <div class="winnie-head">
    </div>
    <div class="winnie-hand"></div>
    <div class="winnie-hand right"></div>
</div>
{{< /highlight >}}

### winnie.css

{{< highlight css >}}
:root{
  --winnie-main-color: #ffc830;
}
.character {
    position: relative;
    overflow: hidden;
    margin: 0 auto 32px auto;
    display: block;
    height: 200px;
    width: 200px;
}
.winnie-ear {
    position: absolute;
    height: 40px;
    width: 35px;
    left: 21%;
    top: 30%;
    border-radius: 77% 35% 50% 50%;
    background: var(--winnie-main-color);
    transform: rotate(-20deg);
}

.winnie-ear.right {
    left: 61%;
    border-radius: 35% 77% 50% 50%;
    transform: rotate(20deg);
}
.winnie-hand {
    position: absolute;
    left: 30%;
    bottom: 0%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background:  var(--winnie-main-color);
}
.winnie-hand.right {
    left: 10%;
}
.winnie-head {
    width: 130px;
    height: 110px;
    z-index: 10;
    position: absolute;
    left: 50%;
    bottom: 4%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: var(--winnie-main-color);
}
{{< /highlight >}}

>#### Modo inspector {#inspector}
> ¿Has copiado mi código? Si es así, te habrás dado cuenta que la mano derecha no está bien posicionada, el modo inspector nos ayudará a posicionarla en su sitio viendo los cambios que hacemos en el navegador directamente.
>
>Todos los navegadores tienen un modo inspector, yo suelo utilizar el de Chrome. Para acceder al modo inspector haz click con el botón derecho en la web y selecciona modo inspector. Si quieres acceder por teclado fn+f12 en Mac o F12 en Windows.
>
>{{< image src="/winnie/inspector.jpg" alt="captura inspector de chrome">}}
>
>
>El botón situado arriba a la izquierda te ayudará a seleccionar un elemento de la página. El que está al lado te permite visualizar el resultado en diferentes tamaños y dispositivos. Debajo encuentras el código HTML y CSS son totalmente modificables.
>
>Clica en el botón de seleccionar elemento y seguidamente clica la mano que está descuadrada, a la derecha podrás ver el CSS que está utilizando, donde tiene un 10% cambialo por un 60% ¡magia!
>
>El inspector es una herramiento muy útil, te aconsejo que le dediques unos minutos, luego no podrás vivir sin él.

## Paso 2: La cara de Winnie

Ahora vamos a darle forma a la cara de Winnie. ¿Intentas hacer algo tipo esto?

{{< image src="/winnie/facewinnie.jpg" alt="Creando la cara de Winnie">}}

### winnie.html
{{< highlight HTML>}}
<div class="winnie-head">
    <div class="winnie-eye"></div>
    <div class="winnie-eye right"></div>
    <div class="winnie-nose"></div>
</div>
{{< /highlight >}}

### winnie.css
{{< highlight css >}}
:root {
  --winnie-main-color: #ffc830;
  --winnie-dark-color: #962600;
}
.character {
  position: relative;
  overflow: hidden;
  margin: 0 auto 32px auto;
  display: block;
  height: 200px;
  width: 200px;
}
.winnie-ear {
  position: absolute;
  height: 40px;
  width: 35px;
  left: 21%;
  top: 30%;
  border-radius: 77% 35% 50% 50%;
  background: var(--winnie-main-color);
  transform: rotate(-20deg);
}

.winnie-ear.right {
  left: 61%;
  border-radius: 35% 77% 50% 50%;
  transform: rotate(20deg);
}
.winnie-hand {
  position: absolute;
  left: 30%;
  bottom: 0%;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--winnie-main-color);
}
.winnie-hand.right {
  left: 60%;
}
.winnie-head {
  width: 130px;
  height: 110px;
  z-index: 10;
  position: absolute;
  left: 50%;
  bottom: 4%;
  transform: translateX(-50%);
  border-radius: 50%;
  background: var(--winnie-main-color);
}
.winnie-eye {
  position: absolute;
  left: 32%;
  top: 52%;
  width: 12px;
  height: 12px;
  background: var(--winnie-dark-color);
  border-bottom: 2px solid white;
  border-radius: 50%;
}
.winnie-eye:before {
  content: "";
  background: none;
  position: absolute;
  right: 30%;
  top: -27px;
  width: 19px;
  height: 11px;
  border-top: 3px solid var(--winnie-dark-color);
  transform: rotate(-50deg);
  border-radius: 50%;
}
.winnie-eye.right {
  left: 58%;
}
.winnie-eye.right:before {
  right: -69%;
  -webkit-transform: rotate(50deg);
  -ms-transform: rotate(50deg);
  transform: rotate(50deg);
}
.winnie-nose {
  position: absolute;
  left: 44%;
  top: 67%;
  width: 15px;
  height: 15px;
  background: var(--winnie-dark-color);
  border-bottom: 1px solid white;
  border-right: 1px solid white;
  transform: rotate(39deg);
  border-radius: 66% 14% 44% 14%;
}
.winnie-nose:before {
    content: '';
    background: none;
    position: absolute;
    right: -39%;
    top: -28%;
    width: 33px;
    height: 12px;
    border-top: 3px solid #962600;
    -webkit-transform: rotate(-39deg);
    -ms-transform: rotate(-39deg);
    transform: rotate(-39deg);
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
}
{{< /highlight >}}

>#### Ordenar Css {#order}
> Para mi es muy importante mantener un orden a la hora de escribir las propiedades de CSS, hasta ahora en este curso lo he hecho de manera desordenada para llegar a este momento y que puedas ver como ayuda el orden de las propiedades.
>
>Muchas veces te encontrarás propiedades sin ordenar, ordenadas por tamaño de linea, alfabéticamente o por propiedades. Yo tengo predilección por propiedades, de fuera a dentro, es decir:
>
> 1. Posición (position, display..).
>
> 2. Tamaños (width, height, margin, padding).
>
> 3. Propiedades visuales (border, background, box-shadow...).
>
> 4. Tipografía (color, font-family, font-size, text-align...).
>
> 5. Mix (cursor, z-index).
>
> Puedes elegir la que te sea más cómoda, en un futuro agradecerás este buen hábito.

## Paso 3: Intenta mejorar Winnie
Ahora sí, ya tenemos a Winnie de pooh y como siempre digo seguro que tú lo puedes mejorar. ¿Lo intentas? aquí te dejo un par de enlaces en Codepen para que veas mi Winnie final. Juega un rato, mejora y enséñame el resultado.

<a href="https://codepen.io/neusaguera/pen/XWWQXVM" target="_blank"> Codepen Winnie </a>

Nos leemos en el próximo nivel.