---
layout: post
title: Formas circulares
img: geometric/circle.png
tags: ["Elemental"]
date: "2019-11-10"
weight: 297
categories: ["Basic"]
---

## círculo y sus variantes

En esta entrada aprenderemos a crear círculos y algunas de sus variantes (óvalo, huevo y gota).

![formas geometricas círculo, ovalo, huego y gota](/geometric/circle-steps.png)
### círculo
Para crear este objeto seguimos los mismos pasos que para crear un cuadrado. Una vez lo tenemos, le añadiremos la propiedad <b>border-radius</b> para que tenga forma circular. Esta propiedad define el radio de cada esquina (arriba izquierda, arriba derecha, abajo derecha, abajo izquierda).

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

Una vez tenemos el círculo crear el óvalo es tan fácil como crear el rectángulo después del cuadrado, cámbiale el alto o ancho y ya lo tienes.

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

Para reproducir la forma de huevo, la altura debe ser aproximadamente un 25% mayor que el ancho. Una vez tenemos este rectángulo aplicamos la propiedad <b>border-radius</b> en dos pasos. Primero le damos un valor de 50% en todas las esquinas para que se nos convierta en un óvalo. Seguidamente añadimos un segundo valor separado por <b>/</b>. Los bordes de arriba deben ser más cerrados así que le aplicaremos un 60% y a los de abajo un 40%.

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

### Gota

Para la gota partiremos del círculo, le aplicamos un 50% de radio a todas las esquinas menos a una, la de arriba izquierda, a esta le aplicaremos un 0%. Ya tenemos la forma de la gota, para que quede mejor la hacemos rotar 45 grados.

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

## Juega
Como en la anterior entrega te he comentado, juega con estos objetos para ir familiarizándote con las propiedades de CSS. Te dejo el enlace a <a href="https://codepen.io/neusaguera/pen/ZEEMMbM" target="_blank"> Codepen </a> donde puedes ver el código.