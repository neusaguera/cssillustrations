---
layout: post
title: Formas triangulares
img: geometric/triangle.png
tags: ["Elemental"]
date: "2019-11-15"
weight: 296
categories: ["Basic"]
---

## Triángulo y  variantes

En este post aprenderemos a crear triángulos y algunas variantes como estrellas y flechas.

{{< image src="/geometric/triangle-steps.png" alt="formas geométricas triangulares">}}
### Triángulo
Para crear un triángulo las propiedades más importantes son los bordes, necesitamos jugar con tres de los cuatro. Por ejemplo, si queremos crear un triangulo que señala hacia arriba, le daremos al borde opuesto, en este caso border-bottom, altura y color. A los dos bordes colindantes (izquierda y derecha), les daremos el ancho que queramos con color transparente. El ancho total del triángulo será la suma de los dos. Pruébalo, es mucho más fácil de lo que parece.

#### Arriba
{{< twocodes >}}
{{< highlight HTML>}}
<div class="triangle-top">
</div>
{{< /highlight >}}
{{< highlight CSS>}}
.triangle-top {
  display: block;
  border-right: 50px solid transparent;
  border-left: 50px solid transparent;
  border-bottom: 75px solid #BDE390;
}
{{< /highlight >}}
{{</ twocodes >}}

#### Abajo
{{< twocodes >}}
{{< highlight HTML>}}
<div class="triangle-bottom">
</div>
{{< /highlight >}}
{{< highlight CSS>}}
.triangle-bottom {
  display: block;
  border-right: 50px solid transparent;
  border-left: 50px solid transparent;
  border-top: 75px solid #BDE390;
}
{{< /highlight >}}
{{</ twocodes >}}

#### Derecha
{{< twocodes >}}
{{< highlight HTML>}}
<div class="triangle-right">
</div>
{{< /highlight >}}
{{< highlight CSS>}}
.triangle-right{
  display: block;
  border-bottom: 50px solid transparent;
  border-top: 50px solid transparent;
  border-left: 75px solid #BDE390;
}
{{< /highlight >}}
{{</ twocodes >}}

####  Izquierda
{{< twocodes >}}
{{< highlight HTML>}}
<div class="triangle-left">
</div>
{{< /highlight >}}
{{< highlight CSS>}}
.triangle-left {
  display: block;
  border-bottom: 50px solid transparent;
  border-top: 50px solid transparent;
  border-right: 75px solid #BDE390;
}
{{< /highlight >}}
{{</ twocodes >}}

### Estrella de seis puntas
Una vez hemos aprendido a dibujar un triángulo, crear una estrella es muy sencillo, solo necesitamos crear dos opuestos, por ejemplo cogeremos los verticales. En este caso, al segundo triángulo le daremos posición absoluta y le diremos que su propiedad <b>left</b> tenga el valor negativo del valor que le hemos dado al borde derecho, es decir, si el borde derecho es de 50px, la propiedad left será -50px.

{{< twocodes >}}
{{< highlight HTML>}}
<div class="star-six">
</div>
{{< /highlight >}}
{{< highlight CSS>}}
.star-six{
  position: relative;
  display: block;
  border-right: 50px solid transparent;
  border-left: 50px solid transparent;
  border-bottom: 80px solid #BDE390;
}
.star-six:after {
  content: '';
  display: block;
  position: absolute;
  top: 28px;
  right: -50px;
  border-right: 50px solid transparent;
  border-left: 50px solid transparent;
  border-top: 80px solid #BDE390;
}
{{< /highlight >}}
{{</ twocodes >}}

### Flecha
Para crear esta figura tienes que aplicar los conocimientos aprendidos hasta ahora. Crea un triángulo y un rectángulo, posiciónalos de forma que el resultado sea una flecha, prueba a crearla sin mirar. ¡seguro que lo consigues!

{{< twocodes >}}
{{< highlight HTML>}}
<div class="arrow-left">
</div>
{{< /highlight >}}
{{< highlight CSS>}}
.arrow-left{
  position: relative;
  display: block;
  border-bottom: 30px solid transparent;
  border-top: 30px solid transparent;
  border-right: 40px solid #BDE390;
}
.arrow-left:after{
  content: '';
  position: absolute;
  left: 40px;
  bottom: -15px;
  display: block;
  height: 30px;
  width: 80px;
  background:  #BDE390;
}
{{< /highlight >}}
{{</ twocodes >}}

## Juega
Como ya te he comentado en los anteriores post, juega con estos objetos para ir familiarizándote con las propiedades de CSS. Te dejo el enlace a <a href="https://codepen.io/neusaguera/pen/QWWJWdb" target="_blank"> Codepen </a> donde puedes ver el código.