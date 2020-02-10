---
layout: post
title: Nivel 4. Wall-e
img: walle/walle.jpg
tags: ["Tsum", "Ilustraciones"]
date: "2019-11-28"
author: "Neus Agüera"
weight: 195
categories: ["Tsum"]
---

En este nivel nos ayudará uno de los personajes que más me gusta de Disney, Wall-e. Con él aprenderemos como funcionan los fondos degradados, crearemos patrones con degradados, utilizaremos sombras para los elementos. ¡Agárrate que vienen curvas!

- <a href="#gradient">Degradados circulares</a>
- <a href="#shadow">Sombras en los elementos </a>
- <a href="#gradientRepeat">Degradado horizontal y repeticiones</a>

## Paso 1: Las formas básicas.

Como en los anteriores niveles empezaremos por crear dos ficheros walle.html y walle.css, una vez tenemos los ficheros creamos algo parecido a esto:

{{< image src="/walle/basic.jpg" alt="formas básicas de Walle">}}

Recuerda que ahora ya aplicamos variables, nombres legibles, ordenación CSS... Y si en algún momento notas que me salto alguna buena prática ya comentada no dudes en llamarme la atención.

### walle.html
{{< highlight HTML >}}
<div class="character">
    <div class="walle-hand"></div>
    <div class="walle-hand right"></div>
    <div class="walle-head"></div>
</div>
{{< /highlight >}}

### walle.css

{{< highlight css >}}
:root{
  --dark-walle: #e3a72e;
  --main-walle: #ffea80;
  --gray-walle: #aaa;
}

.character {
  position: relative;
  display: block;
  height: 200px;
  width: 200px;
  margin: 0 auto 32px auto;
  overflow: hidden;
}

.walle-head {
    position: absolute;
    left: 50%;
    bottom: 4%;
    transform: translateX(-50%);
    width: 130px;
    height: 125px;
    border-radius: 50%;
    background: var(--dark-walle);
    background: radial-gradient(var(--main-walle) 50%, var(--dark-walle));
    z-index: 10;
}

.walle-hand {
    position: absolute;
    left: 30%;
    bottom: 2%;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: var(--gray-walle);
    background: radial-gradient(white 10%, var(--gray-walle));
}

.walle-hand.right {
    left: 60%;
}
{{< /highlight >}}

>#### Degradados circulares {#gradient}
>Uno de los recursos que más utilizo en las illustraciones CSS son los degradados. Tenemos dos tipos de degradados lineales y circulares, ahora nos centraremos en el circular, los colores se definen del centro hacia fuera. En Walle-e para la cabeza y las manos estamos utilizando un gradient muy sencillo al que le damos el color claro en el centro y acabamos con un color más oscuro. Puedes ver que el primer color tiene un valor, este es el color stop, es decir donde le decimos que ese color debe empezar a "fluir" hacia el otro.
>
> Has podido observar que antes de un background con degradado siempre declaro una background con un color simple, en navegadores muy antiguos los degradados no funcionan o alguno necesita el vendor, con la línea de arriba me curo en salud por si el degrado no funciona y muestro el color central simple.
>

## Paso 2: Los prismáticos de wall-e

¿Qué tal si le añadimos los prismáticos a Wall-e? Quizá los prismáticos te sean un poco complicados, juega con <b>:before</b>, <b>:after</b> y <b>box-shadow</b>, intentálo y luego revisa con el código, ya sabes que si tienes alguna duda siempre me puedes escribir.

{{< image src="/walle/binocular.jpg" alt="Creando los prismáticos">}}

### walle.html
{{< highlight HTML>}}
<div class="walle-head">
  <div class="walle-binocular">
    <div class="walle-binocular-bolt"></div>
    <div class="walle-eye"></div>
  </div>
  <div class="walle-join-binocular"></div>
  <div class="walle-binocular right">
    <div class="walle-binocular-bolt"></div>
    <div class="walle-eye"></div>
  </div>
</div>
{{< /highlight >}}

### walle.css
{{< highlight css >}}
:root{
  --dark-walle: #e3a72e;
  --main-walle: #ffea80;
  --gray-walle: #aaa;
  --gray-binocular: #b3b1b1;
  --black: #000;
  --white: #fff;
}

.walle-binocular {
    position: absolute;
    top: 30%;
    left: -4%;
    transform: rotate(-6deg);
    height: 50px;
    width: 47%;
    border: 4px solid var(--gray-binocular);
    border-radius: 70% 10% 100% 70%;
    background: white;
    box-shadow: inset 0.5px 1.5px 0px 0px var(--black),  0.5px 1.5px 0px 0.5px var(--black);
    z-index: 10;
}
.walle-binocular.right {
    left: inherit;
    transform: rotate(6deg);
    border-radius: 10% 70% 70% 100%;
    box-shadow: inset -0.5px 1px 0px 0px var(--black),  0.5px 1.5px 0px 0.5px var(--black);
}
.walle-binocular:before {
    content: '';
    position: absolute;
    top: -34%;
    left: 10px;
    transform: rotate(4deg);
    height: 14px;
    width: 25px;
    border-top: 4px solid var(--gray-binocular);
    border-left: 4px solid var(--gray-binocular);
    border-radius: 100% 0;
    background: none;
    box-shadow: inset 1px 2px 0px 0px var(--black);
}
.walle-binocular.right:before {
    left: 20px;
    transform: rotate(-4deg);
    border-left: none;
    border-right: 4px solid var(--gray-binocular);
    border-radius: 0% 100%;
    box-shadow: inset -0.5px 1.5px 0px 0.5px var(--black);
}
.walle-binocular-bolt {
    position: absolute;
    top: 3px;
    right: 2px;
    height: 6px;
    width: 6px;
    border-radius: 50%;
    background: var(--gray-binocular);
}
.right .walle-binocular-bolt {
    top: 3px;
    left: 2px;
}
.walle-binocular-bolt:before, .walle-binocular-bolt:after {
    content: '';
    position: absolute;
    top: 6px;
    left: -46px;
    height: 6px;
    width: 6px;
    border-radius: 50%;
    background: var(--gray-binocular);
}
.walle-binocular-bolt:after {
    top: 34px;
}
.right .walle-binocular-bolt:before {
    top: 6px;
    left: 46px;
}
.right .walle-binocular-bolt:after {
    top: 34px;
    left: 46px;
}
.walle-eye {
    position: absolute;
    top: 11%;
    left: 40%;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    background: var(--black);
}
.right .walle-eye {
    left: 13%;
}
.walle-eye::before {
    content: '';
    position: absolute;
    top: 20%;
    left: 20%;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background: var(--white);
}
.walle-join-binocular {
    position: absolute;
    top: 52%;
    right: 44%;
    height: 15px;
    width: 16px;
    border-radius: 50%;
    background: var(--gray-binocular);
    box-shadow: 0px 2px 0px 0px var(--black);
}
{{< /highlight >}}

>#### Sombras en los elementos {#shadow}
> Como he comentado antes para crear los binoculares me he ayudado de la propiedad box-shadow. Esta propiedad puede adjuntar una o más sombras  en un mismo elemento como hemos podido ver en la clase <b> .walle-binocular </b>, para adjuntar más de una deberemos separarlas con comas. El valor por defecto de esta propiedad es <b>none</b>, es decir, los elementos no tienen sombras por defecto. Su sintaxis más simple es la siguiente: <b>box-shadow: h-offset v-offset color</b>
> 
> box-shadow: 2px 2px black;
>
>h-offset: cuánto va a sobrepasar horizontalmente, v-offset: cuanto va a sobrepasar verticalmente. Si queremos que la sombra este difuminada, le añadiremos el blur: <b>box-shadow: h-offset v-offset blur color </b>
>
> box-shadow: 2px 2px 0.5px black;
>
>Otro valor opcional que tiene esta propiedad es decirle si queremos que la sombra este dentro del objeto, para ello le añadiremos inset
>
>box-shadow: inset 2px 2px 0.5px black;
>
>¿Quieres que el mismo elemento tenga una sombra externa y una interna, pues las separaremos con una coma:
>
>box-shadow: 2px 2px 0.5px black, inset 2px 2px red;

## Paso 3: Las ruedas de Wall-e

Para crear el efecto de las ruedas de oruga que tiene wall-e he utilizado el degradado y mucha paciencia para poner todos los cortes de color.

{{< image src="/walle/wheels.jpg" alt="Creando las ruedas oruga de wall-e">}}
### walle.html
{{< highlight HTML>}}
<div class="walle-hand">
    <div class="walle-wheel"></div>
  </div>
  <div class="walle-hand right">
    <div class="walle-wheel"></div>
</div>
{{< /highlight >}}

### walle.css
{{< highlight css >}}
.walle-wheel {
    width: 22px;
    height: 43px;
    position: absolute;
    top: -22px;
    left: -14px;
    border-radius: 10px;
    transform: rotate(-27deg);
    z-index: -1;
    background: var(--gray-binocular);
    background: repeating-linear-gradient(to bottom, 
    #444 0%,  #666 6%, #222 12.5%, #000 12.75%, #222 19%, #111 24.75% );
}

.right .walle-wheel {
    transform: rotate(27deg);
    left: inherit;
}
{{< /highlight >}}

>#### Degradado horizontal y repeticiones {#gradientRepeat}
>En el primer apartado de este nivel hemos tratado los degradados circulares, ahora con la ayuda de la propiedad repeating y el degrado horizontal podemos crear una figura como las ruedas oruga de wall-e.
>
>to bottom: le estamos diciendo la dirección que tendrá el degradado en este caso de arriba a bajo.
>
>Para este ejemplo he dividido el primer 25% de la figura y le he dado 6 tonos de colores (5 grises y negro) para crear el efecto de ranura. Con la propiedad repetir (repeating-linear-gradient), este patrón se repetira 4 veces hasta rellenar la figura.


## Paso 4: Mejora tu Wall-e
Ahora sí, ya tenemos a Wall-e y como siempre digo seguro que tú lo puedes mejorar. ¿Lo intentas? Este es el enlace a Codepen para que veas mi Wall-e final. Juega un rato, mejora y enséñame el resultado.

<a href="https://codepen.io/neusaguera/pen/MWYgWXO" target="_blank"> Codepen Wall-e </a>

Nos leemos en el próximo nivel.