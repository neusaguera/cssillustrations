---
layout: post
tags: ["Tsum", "Ilustraciones"]
img: daisy_donald/facedaisy.png
title: "Nivel 2. Daisy & Donald"
date: "2019-09-02"
weight: 100

categories: ["Tsum"]
---

![Pasos de Minnie](/stepsMinnie.png)

¿Qué te pareció el primer nivel con Mickey y Minnie? Fácil, ¿verdad?. En este segundo nivel crearemos los Tsums de Daisy y Donald.

## Paso 1: Las formas básicas.

Esta vez empezaremos con Daisy, como en el primer nivel antes de empezar a crear nuestro HTML, nos fijaremos en el tsum de Daisy y dibujaremos su forma básica, ya sea en papel, photoshop o en tu mente, ¿Lo tienes?

![formas básicas Daisy](/daisy_donald/basicdaisy.png)

Ahora que tenemos el dibujo creamos dos ficheros   daisy-html.html   y   daisy-css.css  .

Nos han salido 3 círculos (manos y cabeza). Cada círculo la convertiremos en un   div   y le añadiremos una clase, recuerda que los nombres de las clases deben ser claros para que sea más fácil trabajar con el código.


¿Creas el HTML y CSS de la forma básica? Debajo te dejo mi solución.

![cuerpo Daisy](/daisy_donald/bodydaisy.png)

### daisy-html.html
{{< highlight HTML >}}
<div class="character">
    <div class="daisy-head"></div>
    <div class="daisy-hand"></div>
    <div class="daisy-hand right"></div>
</div>
{{< /highlight >}}

### daisy-css.css

{{< highlight css "linenos=table, linenostart=2"  >}}
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
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    background: -moz-radial-gradient(center, ellipse cover, white 65%, #404040 100%);
    background: -webkit-gradient(center, ellipse cover, white 65%, #404040 100%);
    background: -webkit-radial-gradient(center, ellipse cover, white 65%, #404040 100%);
    background: -o-radial-gradient(center, ellipse cover, white 65%, #404040 100%);
    background: -ms-radial-gradient(center, ellipse cover, white 65%, #404040 100%);
    background: radial-gradient(center, ellipse cover, white 65%, #404040 100%);
}

.daisy-hand {
    position: absolute;
    left: 30%;
    bottom: 0%;
    width: 20px;
    height: 20px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    background: -moz-radial-gradient(center, ellipse cover, white 50%, #404040 100%);
    background: -webkit-gradient(center, ellipse cover, white 50%, #404040 100%);
    background: -webkit-radial-gradient(center, ellipse cover, white 50%, #404040 100%);
    background: -o-radial-gradient(center, ellipse cover, white 50%, #404040 100%);
    background: -ms-radial-gradient(center, ellipse cover, white 50%, #404040 100%);
    background: radial-gradient(center, ellipse cover, white 50%, #404040 100%);
}

.daisy-hand.right {
   left: 60%;
}

{{< /highlight >}}

>#### Vendors
> En el código anterior entre las lineas 18 y  29 se repiten propiedas pero con prefijos diferentes, a estos prefijos los llamamos vendors. Cada navegador tiene sus especifícaciones y particularidades, sobretodo cuando queremos dar compatibilidad a navegadores con versiones antiguas. En algunas propiedades del CSS necesitaremos añadir el vendor del navegador para que este lea propiedad y la procese. Si utilizas visual studio code, tiene una propiedad muy interesante que se llama css-auto-prefix, esta extensión de visual studio te añade los prefijos necesarios.

(añadir video)
>#### Colores
> En css hay diferentes maneras de escribir los colores entre las más usadas están: RGB, RGBA, HEX o por nombre. Aquí te dejo un ejemplo del color fucsia escrito de diferentes formas.
>
{{< highlight css >}}
Fuchsia hex: FF00FF;
Fuchsia hex abreviado: F0F;
Fuchsia rgb: rgb(255,0,255);
Fuchsia rgba: rgba(255,0,255,0);
Fuchsia name: fuchsia:

{{< /highlight  >}}
> En rgba el último dígito va de 0 a 1 y define la opacidad del color.
>
> Una vez vistas las maneras de escribir los colores te aconsejo que en tú código solo haya una para mantener una coherencia. Corrige el código con el que prefieras.

## Paso 2: Cara .

Ya tenemos la forma básica de Daisy, ahora vamos a por la cara, ojos, pico y coloretes. Intenta crear el HTML y CSS necesario para tener algo parecido a esto:

![Creando la cara de Daisy](/daisy_donald/facedaisy.png)

### daisy.html

Añade dentro de   daisy-head   estos divs

{{< highlight HTML>}}
    ...
    <div class="daisy-head">
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
    </div>
    ...
{{< /highlight >}}

### daisy.css

{{< highlight css >}}

{{< /highlight >}}

Recuerda que no hay una única solución, intenta hacerlo a tu manera y si tienes alguna duda escríbeme e intentaré ayudarte.

## Paso 3: Ojos y nariz.

Ahora tenemos algo parecido a una cara de Mickey, añádele ojos y nariz.

![Mickey con ojos y nariz](/mickeyeyes.png)

### HTML

{{< highlight HTML "linenos=table, linenostart=2" >}}
...
<div class="mickey-face">
    <div class="mickey-eye"></div>
</div>
<div class="mickey-face right">
    <div class="mickey-eye"></div>
</div>
<div class="mickey-snout">
    <div class="mickey-nose"></div>
</div>
...
{{< /highlight >}}

> #### Notas

> Podemos hacer lo mismo sin utilizar más divs, con los atributos de CSS   :before :after  , pero eso lo veremos en los siguientes niveles del curso.


### CSS

{{< highlight css "linenos=table, linenostart=1" >}}
.mickey-eye {
    position: absolute;
    left: 35%;
    top: 44%;
    width: 12px;
    height: 16px;
    background: #010101;
    z-index: 10;
    border-radius: 50%;
}
.right .mickey-eye {
    left: 41%;
}

.mickey-nose {
    position: absolute;
    left: 50%;
    top: 33%;
    width: 18px;
    height: 12px;
    background: #010101;
    border-radius: 50%;
    transform: translateX(-50%);
}
{{< /highlight >}}

> #### Notas
> Para especificar la posición del ojo derecho heredamos la clase   .right   del div padre. Necesitamos poner un espacio entre las clases para crear la jerarquía padre / hijo. El padre siempre debe estar en la izquierda.
>
{{< highlight css "linenos=table, linenostart=1" >}}
//hereda del padre
.right .mickey-eye {
    left: 41%;
}

//están en el mismo nivel
.right.mickey-eye{
    left: 41%
}
{{< /highlight >}}

WoW, Ya tenemos a Mickey! Vamos a por Minnie

## Paso 4: de Mickey a Minnie

El siguiente paso es transformar a Mickey en Minnie. Para que tengas a los dos por separado, copia en un nuevo fichero el código que tienes de Mickey y cambia todas las palabras 'mickey' por 'minnie' (más adelante veremos como aprovechar código). ¿Tienes los ficheros creados? Vamos a añadirle pestañas y coloretes. ¿Lo intentas tú primero?

![Minnie con pestañas y coloretes](/minnieblushers.png)

### HTML Solution
{{< highlight HTML "linenos=table, linenostart=1" >}}
...
<div class="minnie-head">
    <div class="minnie-face">
        <div class="minnie-eye">
            <div class="minnie-lash"></div>
            <div class="minnie-lash two"></div>
            <div class="minnie-lash three"></div>
        </div>
    </div>
    <div class="minnie-face right">
        <div class="minnie-eye right">
            <div class="minnie-lash"></div>
            <div class="minnie-lash two"></div>
            <div class="minnie-lash three"></div>
        </div>
    </div>
    <div class="minnie-snout">
        <div class="minnie-nose"></div>
        <div class="minnie-blush"></div>
        <div class="minnie-blush right"></div>
    </div>
</div>
...
{{< /highlight >}}

### CSS Solution
{{< highlight css "linenos=table, linenostart=1" >}}
// CSS blushers
.minnie-blush {
    position: absolute;
    left: 9%;
    top: 36%;
    width: 20px;
    height: 12px;
    border-radius: 50%;
    background: #ff9ea2;
}
.minnie-blush.right {
    left: 73%;
}

//CSS eyelashes
.minnie-lash {
    position: absolute;
    left: -1px;
    top: -3px;
    width: 0px;
    height: 7px;
    background: none;
    border-left: 2px solid #010101;
    transform: rotate(-45deg);
}
.minnie-lash.two {
    left: 1px;
    top: -5px;
}
.minnie-lash.three {
    left: 5px;
    top: -6px;
    height: 9px;
}
.right .minnie-lash {
    left: 4px;
    height: 9px;
    top: -5px;
    transform: rotate(45deg);
}
.right .minnie-lash.two {
    left: 8px;
    top: -5px;
}
.right .minnie-lash.three {
    left: 12px;
}
{{< /highlight >}}

> #### Notas
> En pasos anteriores usamos la propiedad   transform   para trasladar y centrar el div, ahora lo usaremos para rotar sobre su eje.
>
{{< highlight css "linenos=table, linenostart=1" >}}
// Trasladar, mover, centrar.
transform: translate(-50%, 20%); //(X,Y)
transform: translateX(-50%);
transform: translateY(-20%);

// Rotar (grados)
transform: rotate(45deg);
{{< /highlight >}}

## Paso 5: El lazo de Minnie.
Ya tenemos algo que se parece a Minnie, pero... ¿alguna vez la has visto sin su lazo?, ella lo necesita así que vamos a crearlo. Venga utiliza la imaginación ¡tú puedes!


![lazo de Minnie](/minniebow.png)

### HTML
{{< highlight HTML "linenos=table, linenostart=22" >}}
...
<div class="minnie-bow">
    <div class="minnie-petal">
        <div class="minnie-mole"></div>
        <div class="minnie-mole two"></div>
        <div class="minnie-mole three"></div>
    </div>
    <div class="minnie-petal down"></div>
    <div class="minnie-knot"></div>
    <div class="minnie-petal right">
            <div class="minnie-mole"></div>
            <div class="minnie-mole two"></div>
            <div class="minnie-mole three"></div>
    </div>
    <div class="minnie-petal down right"></div>
</div>
...
{{< /highlight >}}

### CSS
{{< highlight css "linenos=table, linenostart=1" >}}
.minnie-bow {
    position: absolute;
    height: 61px;
    width: 87px;
    left: 50%;
    top: 19%;
    z-index: 100;
    transform: translateX(-50%);
}
.minnie-petal {
    position: absolute;
    height: 22px;
    width: 53px;
    left: 0;
    top: 17%;
    z-index: 10;
    border-radius: 50%;
    transform: rotate(44deg);
    background: #fa0000;
}
.minnie-petal.down {
    top: 33%;
    z-index: 1;
    transform: rotate(-24deg);
}
.minnie-petal.right {
    left: 37%;
    transform: rotate(-44deg);
}
.minnie-petal.right.down {
    left: 40%;
    transform: rotate(24deg);
}
.minnie-mole {
    position: absolute;
    height: 9px;
    width: 9px;
    left: 7px;
    top: 6px;
    background: white;
    z-index: 100;
    border-radius: 50%;
}
.minnie-mole.two {
    left: 24px;
    top: 10px;
}
.minnie-mole.three {
    left: 23px;
    top: 26px;
}
.right .minnie-mole {
    left: 37px;
    top: 6px;
}
.right .minnie-mole.two {
    top: 31px;
    left: 23px;
}
.right .minnie-mole.three {
    left: 20px;
    top: 10px;
}
.minnie-knot {
    position: absolute;
    height: 30px;
    width: 22px;
    left: 37%;
    top: 22%;
    z-index: 100;
    border-radius: 50%;
    background: #b20000;
}
{{< /highlight >}}

> #### Nota
> Recuerda que en este nivel no estamos usando   :before :after  , pero si quieres utilizarlo adelante, posiblemente el código te quede más limpio.
>
> ¿Te has fijado que he utilizado las clases   .two   y   .three  ? Recuerda la parte de utilizar palabras fáciles de identificar, esto no sería una buena práctica. ¿Qué se te ocurre?

## Paso 6: Vamos a mejorar a Minnie
Ahora si, tu dibujo te recuerda a Minnie ¿verdad?, pero siempre podemos mejorarla con degradados, bordes, etc... Esta es mi Minnie final, estoy segura de que puedes mejorarla. Juega un rato con tu código y enséñame el resultado.


![last minnie](/lastminnie.png)

En este enlace de github puedes ver el código final. Hasta aquí el primer Nivel del curso Tsum, recuerda que  puedes comentar o escribirme para cualquier duda o sugerencia. Nos leemos en el siguiente Nivel con Daisy & Donald.