---
layout: post
title: Nivel 2. Daisy & Donald
img: daisy_donald/daisydonald.png
tags: ["Tsum", "Ilustraciones"]
date: "2019-10-02"
lastmod: "2019-11-06"
author: "Neus Agüera"
weight: 197
categories: ["Tsum"]
---

¿Qué te pareció el primer nivel con Mickey y Minnie? Fácil, ¿verdad?. En este segundo nivel crearemos los Tsums de Daisy y Donald. ¿Qué veremos?

- <a href="#variables">Definir variables sin Sass o Less</a>
- <a href="#colors">Colores</a>
- <a href="#before">:before & :after</a>
- <a href="#similar">Clases con propiedades iguales</a>
- <a href="#vendors">Vendors</a>

## Paso 1: Las formas básicas.

Esta vez empezaremos con Daisy, como en el primer nivel antes de empezar a crear nuestro HTML, nos fijaremos en el tsum de Daisy y dibujaremos su forma básica, ya sea en papel, photoshop o en tu mente, ¿Lo tienes?

![formas básicas Daisy](/daisy_donald/basicdaisy.png)

Ahora que tenemos el dibujo creamos dos ficheros   <b>daisy.html</b> y <b>daisy.css</b>.

Nos han salido 3 círculos (manos y cabeza). Cada círculo lo convertiremos en un <b>div</b> y le añadiremos una clase, recuerda que los nombres de las clases deben ser claros para que sea más fácil trabajar con el código.

### daisy.html
{{< highlight HTML >}}
<div class="character daisy">
    <div class="daisy-head"></div>
    <div class="daisy-hand"></div>
    <div class="daisy-hand right"></div>
</div>
{{< /highlight >}}

### daisy.css

{{< highlight css >}}
:root {
  --main-daisy-color: white;
}

.character {
    display: block;
    position: relative;
    overflow: hidden;
    margin: 0 auto 32px auto;
    height: 200px;
    width: 200px;
}

.daisy-head {
    width: 140px;
    height: 120px;
    z-index: 10;
    position: absolute;
    left: 50%;
    bottom: 4%;
    transform: translateX(-50%);
    border-radius: 50%;
    border: 1px solid black;
    background: var(--main-daisy-color);
}

.daisy-hand {
    position: absolute;
    left: 30%;
    bottom: 0%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid black;
    background: var(--main-daisy-color);
}

.daisy-hand.right {
   left: 60%;
}

{{< /highlight >}}

>#### Variables {#variables}
> Aunque el curso acaba de empezar hemos de adquirir buenas prácticas desde el inicio. El uso de variables es una de las más importantes para tener un código CSS que sea mantenible en el tiempo.
>Para declarar las variables sin los pre-procesadores Less o Sass necesitamos añadirlas en un scope global como pueden ser:
{{< highlight css >}}
    body{
        /*variables*/
    }
    *{
        /*variables*/
    }
    :root{
        /*variables*/
    }
{{< /highlight >}}

>En la declaración de las variables ponemos dos guiones y el nombre de la variable. Si el nombre está compuesto por dos palabras las separamos con un guion para que resulte fácil de leer.
>Par llamar a las variables en las propiedades debemos poner la variable entre <b> var() </b>
{{< highlight css >}}
    :root{
        /*Declaración variable*/
        --main-daisy-color: white;
    }
    .daisy-hand {
        /*llamada variable*/
        background: var(--main-daisy-color);
    }
{{< /highlight >}}

>¿Cuándo utilizar las variables? Normalmente tenemos unos valores definidos a la hora de picar CSS como pueden ser los colores, tamaños de pantalla, paddings, fuentes... Nos encontraremos más de una vez que mientras estamos trabajando nos pidan cambiar uno de estos valores, si hemos creado variables solo tendremos que hacer un cambio.
>En nuestro código prueba cambiar el color principal de daisy para ver como funciona.

## Paso 2: La cara de Daisy.

Ya tenemos la forma básica de Daisy, ahora vamos a por la cara, ojos, pico y coloretes. Intenta crear el código necesario para tener algo parecido a esto:

![Creando la cara de Daisy](/daisy_donald/facedaisy.png)

### daisy.html
Añade dentro de  <b>daisy-head</b> estos divs

{{< highlight HTML>}}
    ...
    <div class="daisy-eye">
        <div class="daisy-lash"></div>
        <div class="daisy-lash two"></div>
        <div class="daisy-lash three"></div>
    </div>
    <div class="daisy-eye right">
        <div class="daisy-lash"></div>
        <div class="daisy-lash two"></div>
        <div class="daisy-lash three"></div>
    </div>
    <div class="daisy-peak"></div>
    <div class="daisy-blush"></div>
    <div class="daisy-blush right"></div>
    ...
{{< /highlight >}}

### daisy.css

{{< highlight css >}}
:root {
  --main-daisy-color: white;
  --blush-daisy-color: #ff9ea2;
  --peak-daisy-color: #f4cd00;
  --dark-daisy-color: black;
}

...

.daisy-blush {
    position: absolute;
    left: 13%;
    top: 56%;
    width: 20px;
    height: 12px;
    background: var(--blush-daisy-color);
    border-radius: 50%;
}
.daisy-blush.right {
    left: 71%;
}
.daisy-peak {
    position: absolute;
    left: 31%;
    top: 62%;
    width: 53px;
    height: 18px;
    border-radius: 50%;
    background: var(--peak-daisy-color);
}

.daisy-eye {
    position: absolute;
    left: 30%;
    top: 45%;
    width: 12px;
    height: 16px;
    background: var(--dark-daisy-color);
    border-radius: 50%;
}
.daisy-eye.right {
    left: 60%;
}
.daisy-lash {
    position: absolute;
    left: -1px;
    top: -3px;
    width: 0px;
    height: 7px;
    background: none;
    border-left: 1.5px solid var(--dark-daisy-color);
    transform: rotate(-45deg);
}
.daisy-lash.two {
    left: 1px;
    top: -5px;
}
.daisy-lash.three {
    left: 5px;
    top: -6px;
    height: 9px;
}
.right .daisy-lash {
    left: 4px;
    height: 9px;
    top: -5px;
    transform: rotate(45deg);
}
.right .daisy-lash.two {
    left: 8px;
    top: -5px;
}
.right .daisy-lash.three {
    left: 12px;
}
{{< /highlight >}}

Recuerda que no hay una única solución, intenta hacerlo a tu manera y si tienes alguna duda escríbeme e intentaré ayudarte.

>#### Colores {#colors}
> En CSS hay diferentes maneras de escribir los colores RGB, RGBA, HEX, nombre... Aquí te dejo un ejemplo del color fucsia.
{{< highlight css >}}
    Fuchsia hex: FF00FF;
    Fuchsia hex abreviado: F0F;
    Fuchsia rgb: rgb(255,0,255);
    Fuchsia rgba: rgba(255,0,255,0);
    Fuchsia name: fuchsia:
{{< /highlight >}}
>
> En RGBA el último dígito define la opacidad del color, siendo 0 transparente y 1 opaco.
>
> Sigamos con las buenas prácticas, cuando declaramos los colores deberíamos usar el mismo tipo. En mi código puedes ver que los he declarado de forma distinta, ¿Lo corriges?

## Paso 3: El lazo de Daisy.

Ahora vamos a añadirle el lazo. Puedes mirar como hicimos con el lazo de Minnie pero en este paso yo lo he creado con <b>:before</b> y <b>:after</b>.

![Daisy con lazo](/daisy_donald/bowdaisy.png)

### daisy.html
Añade entre <b>character</b> y <b>daisy-head</b> el siguiente código:

{{< highlight html >}}
<div class="daisy-bow">
    <div class="daisy-petal"></div>
    <div class="daisy-knot"></div>
    <div class="daisy-petal right"></div>
</div>
{{< /highlight >}}

### daisy.css
{{< highlight css >}}
:root {
  --main-daisy-color: white;
  --blush-daisy-color: #ff9ea2;
  --peak-daisy-color: #f4cd00;
  --dark-daisy-color: black;
  --petal-daisy-color: #ffcad6;
  --dark-petal-daisy: #ff8ab2;
}


.daisy-bow {
    position: absolute;
    height: 61px;
    width: 87px;
    left: 50%;
    top: 25%;
    background: none;
    z-index: 100;
    transform: translateX(-50%);
}
.daisy-petal:before, .daisy-petal:after {
    content: '';
    position: absolute;
    height: 20px;
    width: 31px;
    left: 5px;
    border-bottom: 1px solid var(--dark-petal-daisy);
    top: 22%;
    background: var(--petal-daisy-color);
    border-radius: 50%;
    transform: rotate(44deg);
}
.daisy-petal:before {
    z-index: 10;
}
.daisy-petal:after {
    top: 33%;
    transform: rotate(-24deg);
}
.daisy-petal.right:before, .daisy-petal.right:after {
    left: inherit;
    right: 8%;
    -webkit-transform: rotate(-44deg);
    -ms-transform: rotate(-44deg);
    transform: rotate(-44deg);
}
.daisy-petal.right:after {
    -webkit-transform: rotate(24deg);
    -ms-transform: rotate(24deg);
    transform: rotate(24deg);
}
.daisy-knot {
    position: absolute;
    height: 18px;
    width: 22px;
    left: 37%;
    top: 34%;
    z-index: 100;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    background: var(--dark-petal-daisy);

}
{{< /highlight >}}

>#### :before & :after {#before}
>Són dos pseudo elementos y se usan para añadir contenido antes o después respectivamente del contenido que tiene el elemento. Necesitan la propiedad <b>content</b> para mostrarse, cuando se utilizan para crear una ilustración dejamos las comillas vacías y le añadimos la propiedad <b>display</b>.
{{< highlight html >}}
<div class="box">
  Esto es una caja
</div>
{{< /highlight >}}
{{< highlight css >}}
.box{
  width: 100px;
  height: 100px;
  background: red;
  padding: 25px;
  font-size: 20px;
}
.box:before{
  content:'<!';
  font-weight: bold;
}
.box:after{
  content: '';
  display: block;
  width: 10px;
  height: 10px;
  background: blue;
}
{{< /highlight >}}

## Paso 4: Donald.

Ya tenemos a Daisy y ahora vamos a por Donald, como siempre para un nuevo tsum crearemos dos ficheros <b> donald.html </b> y <b>donald.css</b>. El código básico de Donald es el mismo de Daisy sin pestañas ni lazo.

![La cara de Donald](/daisy_donald/facedonald.png)

### donald.html
{{< highlight html >}}
<div class="character donald">
    <div class="donald-head">
        <div class="donald-eye"></div>
        <div class="donald-eye right"></div>
        <div class="donald-peak"></div>
        <div class="donald-blush"></div>
        <div class="donald-blush right"></div>
    </div>
    <div class="donald-hand"></div>
    <div class="donald-hand right"></div>
</div>
{{< /highlight >}}

### donald.css
{{< highlight css >}}
:root {
  --main-donald-color: #ffffff;
  --blush-donald-color: #ff9ea2;
  --peak-donald-color: #f4cd00;
  --dark-donald-color: #000000;
}

.character {
    display: block;
    position: relative;
    overflow: hidden;
    margin: 0 auto 32px auto;
    height: 200px;
    width: 200px;
}

.donald-head {
    width: 140px;
    height: 120px;
    z-index: 10;
    position: absolute;
    left: 50%;
    bottom: 4%;
    transform: translateX(-50%);
    border-radius: 50%;
    border: 1px solid black;
    background: var(--main-donald-color);
}

.donald-hand {
    position: absolute;
    left: 30%;
    bottom: 0%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid black;
    background: var(--main-donald-color);
}

.donald-hand.right {
   left: 60%;
}

.donald-blush {
    position: absolute;
    left: 13%;
    top: 56%;
    width: 20px;
    height: 12px;
    background: var(--blush-donald-color);
    border-radius: 50%;
}
.donald-blush.right {
    left: 71%;
}
.donald-peak {
    position: absolute;
    left: 31%;
    top: 62%;
    width: 53px;
    height: 18px;
    border-radius: 50%;
    background: var(--peak-donald-color);
}

.donald-eye {
    position: absolute;
    left: 30%;
    top: 45%;
    width: 12px;
    height: 16px;
    background: var(--dark-donald-color);
    border-radius: 50%;
}
.donald-eye.right {
    left: 60%;
}
{{< /highlight >}}

## Paso 5: El gorro de Donald.

El gorro de Donald lo dividimos en dos partes la copa y el ribete. Para la copa creamos un div rectangular al que le redondeamos los bordes. Para el ribete otro div rectangular redondeado y utilizaremos los pseudo elementos <b>:before</b> y <b>:after</b> para la cinta colgante.

![Daisy con lazo](/daisy_donald/hatdonald.png)

### donald.html
Añadiremos los divs del gorro entre <b> character </b> y <b> donald-head</b>
{{< highlight html >}}
    <div class="donald-hat">
        <div class="donald-ribbon"></div>
    </div>
{{< / highlight >}}

### donald.css
{{< highlight css >}}
:root {
  --main-donald-color: #ffffff;
  --blush-donald-color: #ff9ea2;
  --peak-donald-color: #f4cd00;
  --dark-donald-color: #000000;
  --hat-donald: #477697;
}
.donald-hat {
    position: absolute;
    height: 32px;
    width: 61px;
    left: 55%;
    top: 30%;
    z-index: 100;
    border-radius: 44%;
    transform: rotate(27deg);
    background: var(--hat-donald);
}
.donald-ribbon {
    position: absolute;
    height: 9px;
    width: 46px;
    left: 13%;
    top: 73%;
    z-index: 100;
    background: var(--dark-donald-color);
    border-radius: 44%;
    transform: rotate(0deg);
}

.donald-ribbon:before, .donald-ribbon:after {
    content: '';
    position: absolute;
    height: 32px;
    width: 9px;
    left: 73%;
    top: 0%;
    z-index: 100;
    border-right: 5px solid var(--dark-donald-color);
    border-radius: 50%;
    transform: rotate(-52deg);
}

.donald-ribbon:after {
    left: 94%;
    top: -81%;
    border-right: 0;
    border-left: 5px solid var(--dark-donald-color);;
}
{{< / highlight >}}

>#### Clases con propiedades iguales {#similar}
{{< highlight css>}}
.donald-ribbon:before, .donald-ribbon:after {
    content: '';
    position: absolute;
    height: 32px;
    width: 9px;
    left: 73%;
    top: 0%;
    z-index: 100;
    border-right: 5px solid var(--dark-donald-color);
    border-radius: 50%;
    transform: rotate(-52deg);
}
.donald-ribbon:after {
    left: 94%;
    top: -81%;
    border-right: 0;
    border-left: 5px solid var(--dark-donald-color);;
}
{{< / highlight >}}
>
> ¿Te ha llamado la atención? En esta parte del código añado las mismas propiedades a dos clases a la vez. Cuando tenemos un ejemplo como el anterior donde necesitamos dos clases pero estas tienen propiedades iguales las declaramos juntas y nos ahorramos tener el mismo código dos veces. Si tienen alguna propiedad distinta volvemos a declararla debajo y le añadimos los valores necesarios.

## Paso 6: La pajarita de Donald.

Lo único que nos queda para acabar es crear una pajarita para Donald.

![La cara de Donald](/daisy_donald/bowtiedonald.png)

### donald.html
Añadiremos los divs entre <b> donald-head </b> y <b> donald-hand</b>
{{< highlight html >}}
    <div class="donald-bowtie">
        <div class="donald-petal">
        </div>
        <div class="donald-knot"></div>
        <div class="donald-petal right">
        </div>
    </div>
{{< / highlight >}}

### donald.css
{{< highlight css >}}
:root {
  --main-donald-color: #ffffff;
  --blush-donald-color: #ff9ea2;
  --peak-donald-color: #f4cd00;
  --dark-donald-color: #000000;
  --hat-donald: #477697;
  --bowtie-donald: #ff4253;
  --dark-bowtie-donald: #931131;
}

.donald-bowtie {
    position: absolute;
    height: 61px;
    width: 57px;
    left: 50%;
    top: 79%;
    background: none;
    z-index: 1;
    transform: translateX(-50%);
}

.donald-petal {
    content: '';
    position: absolute;
    height: 20px;
    width: 31px;
    left: 5px;
    top: 33%;
    transform: rotate(-24deg);
    border-radius: 50%;
    background: var(--bowtie-donald);
    border-bottom: 1px solid var(--dark-bowtie-donald);
}

.donald-petal.right {
    left: inherit;
    right: 8%;
    -webkit-transform: rotate(24deg);
    -ms-transform: rotate(24deg);
    transform: rotate(24deg);
}

.donald-knot {
    position: absolute;
    height: 18px;
    width: 14px;
    left: 37%;
    top: 34%;
    z-index: 100;
    border-radius: 50%;
    background: var(--bowtie-donald);
    border: 2px solid var(--dark-bowtie-donald);
}
{{< / highlight >}}

>#### Vendors {#vendors}
{{< highlight css >}}
.donald-petal.right {
    left: inherit;
    right: 8%;
    -webkit-transform: rotate(24deg);
    -ms-transform: rotate(24deg);
    transform: rotate(24deg);
}
{{< / highlight >}}
>
> En el código anterior se repiten propiedades con prefijos (vendors). Cada navegador tiene sus especificaciones y particularidades, sobretodo cuando queremos dar compatibilidad a navegadores con versiones jurásicas.
>
> Si utilizas Visual Studio Code puedes instalar la extensión css-auto-prefix, detecta las propiedades que necesitan vendors y se las añade. Para este proyecto lo he estado probando y funciona muy bien siempre que no uses preprocesadores, entonces se vuelve un poco loco.
>
> ¿Cómo sé que propiedades necesitan prefijo? yo cuando tengo dudas con alguna propiedad o me da problemas en un navegador suelo mirar en las siguientes páginas: <a href="https://caniuse.com/" target="_blank">caniuse.com</a> y <a href="http://shouldiprefix.com/" target="_blank">shouldiprefix.com</a>

## Paso 6: Intenta mejorar Daisy & Donald
Ahora sí, ya tenemos a Daisy y Donald aunque siempre se pueden mejorar. ¿Lo intentas? aquí te dejo un par de enlaces en Codepen para que veas mis Tsums finales. Juega un rato, mejora y enséñame el resultado.

<a href="https://codepen.io/neusaguera/pen/zYYWWVB" target="_blank"> Codepen Daisy </a> - <a href="https://codepen.io/neusaguera/pen/QWWmVdL" target="_blank"> Codepen Donald </a>

Nos leemos en el próximo nivel.

