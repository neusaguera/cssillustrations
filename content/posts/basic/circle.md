---
layout: post
title: Formas circulares
img: /geometric/circle.png
tags: ["Elemental"]
date: "2019-11-10"
weight: 297
categories: ["Basic"]
draft: true
---

## Circulo y sus variantes

En esta entrada aprenderemos a crear circulos y algunas de sus variantes (óvalo, huevo y gota).

![formas geometricas circulo, ovalo, huego y gota](/geometric/circle-steps.png)
### Circulo
Para crear un circulo seguimos los mismos pasos que para crear un cuadrado. Una vez lo tenemos le añadiremos la propiedad <b>border-radius</b> para que tenga la forma circular. Esta propiedad define el radio que tiene cada esquina (arriba-izquierda, arriba-derecha, abajo-derecha, abajo-izquierda).

{{< twocodes >}}
{{< highlight HTML>}}
<div class="circle">
</div>
{{< /highlight >}}
{{< highlight CSS>}}
.circle{
  width: 275px;
  height: 275px;
  background: #F9FFAD;
  border-radius: 50%;
}
{{< /highlight >}}
{{</ twocodes >}}


### Óvalo

Una vez tenemos el circulo crear el óvalo es tan fácil como crear el rectangulo depués del cuadrado, cambiale el alto o ancho y ya lo tienes.

{{< twocodes >}}
{{< highlight HTML>}}
<div class="oval">
</div>
{{< /highlight >}}
{{< highlight CSS>}}
.oval{
  width: 320px;
  height: 250px;
  background: #FAF65F;
  border-radius: 50%;
}
{{< /highlight >}}
{{</ twocodes >}}

### Huevo

Para reproducir la forma de huevo la altura debe ser aproximadamente un 25% mayor que el ancho. Una vez tenemos este rectángulo vamos a aplicar la propiedad <b>border-radius</b> en dos pasos. Primero le aplicamos un 50% para que se nos convierta en un óvalo, ahora le aplicaremos un segundo valor separado por <b>/</b>. En el segundo valor queremos que los bordes de arriba sean más cerrados así que le aplicaremos un 60% a cada uno y a los de abajo que los queremos más anchos un 40%.

{{< twocodes >}}
{{< highlight HTML>}}
<div class="egg">
</div>
{{< /highlight >}}
{{< highlight CSS>}}
.egg{
  width: 150px;
  height: 200px;
  background: #F4E013;
  border-radius: 50% / 60% 60% 40% 40%;
}
{{< /highlight >}}
{{</ twocodes >}}

#### Gota

Para la gota partiremos del circulo, le aplicaremos 50% a todas las esquinas menos a la arriba-izquierda que le aplicaremos un 0%. Ya tenemos la forma de la gota pero para que quede mejor la haremos rotar 45 grados.

{{< twocodes >}}
{{< highlight HTML>}}
<div class="drop">
</div>
{{< /highlight >}}
{{< highlight CSS>}}
.drop{
  width: 150px;
  height: 150px;
  background: #C6AD0A;
  border-radius: 0 50% 50% 50%;
  transform: rotate(45deg);
  transform-origin: left;
}
{{< /highlight >}}
{{</ twocodes >}}