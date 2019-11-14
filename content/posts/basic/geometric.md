---
layout: post
title: Otras formas
img: geometric/geometric.png
tags: ["Elemental"]
date: "2019-11-13"
weight: 214
categories: ["Basic"]
draft: true
---

Las ilustraciones que encontrarás en este site todas están hechas con formas geométricas, si aún no estás familiarizada con CSS, este post te ayudará a crear las formas que más utilizo. Si no quieres crear los ficheros CSS y HTML puedes utilizar webs como <a href="https://codepen.io/"> Codepen </a> o <a href="https://jsfiddle.net/"> jsfiddle </a> que permiten escribir el código en el navegador y ver los mientras lo estás construyendo.

## Cuadrado y sus variantes

Vamos a empezar por la forma más básica, el cuadrado y sus variantes  (rectángulo, rombo y paralelogramo).

![formas geometricas cuadrado, rectángulo, rombo y paralelogramo](/geometric/square-steps.png)
### Cuadrado
Para crear un cuadrado sólo necesitamos tener un <b>div</b> al que le pondremos como nombre de clase <b>square</b>. Las propiedades minimas que debe tener este div són <b>height</b> y <b>width</b> con valores iguales, para darle color y que lo veamos le añadiremos <b>background</b> , <b>border</b> o ambas tú decides.

{{< twocodes >}}
{{< highlight HTML>}}
<div class="square">
</div>
{{< /highlight >}}
{{< highlight CSS>}}
.square{
    width: 275px;
    height: 275px;
    background: #62DCF2;
}
{{< /highlight >}}
{{</ twocodes >}}


### Rectángulo

Una vez tenemos el cuadrado crear un rectágunlo es muy fácil cambiale el alto o ancho ¡ya lo tienes!

{{< twocodes >}}
{{< highlight HTML>}}
<div class="rectangle">
</div>
{{< /highlight >}}
{{< highlight CSS>}}
.rectangle {
  width: 350px;
  height: 225px;
  background: #0AB7D6;
}
{{< /highlight >}}
{{</ twocodes >}}

### Rombo

Volvemos a las medidas del cuadrado y aplicaremos la propiedad <b>transform</b> y su valor <b>rotate()</b> esto hará que el elemento rote sobre su eje los grados que le indiquemos, en este caso 45.

{{< twocodes >}}
{{< highlight HTML>}}
<div class="rhomb">
</div>
{{< /highlight >}}
{{< highlight CSS>}}
.rhomb {
  width: 120px;
  height: 120px;
  background: #1DCDED;
  transform: rotate(45deg);
}
{{< /highlight >}}
{{</ twocodes >}}

>#### transform-origin:
>Esta propiedad permite cambiar la posición del elemento transformado.
{{< highlight CSS>}}
.rhomb {
  width: 120px;
  height: 120px;
  background: #1DCDED;
  transform: rotate(45deg);
  transform-origin: 100% 50%;
}
{{< /highlight >}}

#### Paralelogramo

Para crear un paralelogramo partimos de la base del rectángulo y jugaremos con la propiedad <b>transform</b> pero esta vez con su valor <b>skew</b> que transforma la inclinación de los ejes. Con un valor aplica a ambos ejes, si añadimos dos valores afectara a <b>x</b> e <b>y</b> en este orden.

{{< twocodes >}}
{{< highlight HTML>}}
<div class="parallelogram">
</div>
{{< /highlight >}}
{{< highlight CSS>}}
.parallelogram {
  width: 350px;
  height: 225px;
  background: #117B9B;
  transform: skew(-30deg);
}
{{< /highlight >}}
{{</ twocodes >}}