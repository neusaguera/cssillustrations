---
layout: post
title: Nivel 6. Mike
img: mike/mike.jpg
tags: ["Tsum", "Ilustraciones"]
date: "2020-02-12"
author: "Neus Agüera"
weight: 194
categories: ["Tsum"]
---

Para el número 6 de este curso traigo a Mike de Monstruos S.A, con él seguiremos practicando los background, esta vez aprenderemos a crear un patrón. Para seguir con las buenas prácticas veremos que funciones tienes la organización W3C.

- <a href="#w3c">W3C</a>
- <a href="#pattern">Patrones con degradados </a>

## Paso 1: Las formas básicas.

Como en los anteriores niveles empezaremos por crear dos ficheros <mark>mike.html</mark> y <mark>mike.css</mark>, una vez tenemos los ficheros creamos algo parecido a esto:

{{< image src="/mike/basic.jpg" alt="formas básicas de Mike">}}

### mike.html
{{< highlight HTML >}}
<div class="character">
  <div class="mike-ear"></div>
  <div class="mike-ear right"></div>
  <div class="mike-hand"></div>
  <div class="mike-hand right"></div>
  <div class="mike-head"></div>
</div>
{{< /highlight >}}

### mike.css

{{< highlight css >}}
:root {
  --main-mike: #c6fd81;
}

.character {
  position: relative;
  display: block;
  height: 200px;
  width: 200px;
  margin: 0 auto 32px auto;
  overflow: hidden;
}

.mike-head {
  position: absolute;
  left: 50%;
  bottom: 4%;
  transform: translateX(-50%);
  width: 130px;
  height: 125px;
  border-radius: 50%;
  background-color: var(--main-mike);
  z-index: 10;
}
.mike-hand {
  position: absolute;
  left: 30%;
  bottom: 2%;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: var(--main-mike);
}

.mike-hand.right {
  left: 60%;
}
.mike-ear {
  position: absolute;
  height: 40px;
  width: 35px;
  left: 25%;
  top: 30%;
  border-radius: 100% 0% 100% 0%;
  background: var(--main-mike);
  transform: rotate(-12deg);
}
.mike-ear.right {
  left: 58%;
  border-radius: 0% 100% 0% 100%;
  transform: rotate(12deg);
}
{{< /highlight >}}

## Paso 2: El ojo de Mike

Mike es un Tsum bastante sencillo de crear, ahora que ya tenemos las formas básicas vamos a crear el ojo de Mike y le aplicaremos los degradados circulares que aprendimos en el nivel anterior <a href="https://cssillustrations.com/posts/tsum/walle/#gradient"> degradados circulares</a>.

{{< image src="/mike/eye.jpg" alt="Creando el ojo de mike">}}

### mike.html
{{< highlight HTML>}}
<div class="character">
  <div class="mike-ear"></div>
  <div class="mike-ear right"></div>
  <div class="mike-hand"></div>
  <div class="mike-hand right"></div>
  <div class="mike-head">
    <div class="mike-eye">
      <div class="mike-iris"></div>
    </div>
  </div>
</div>
{{< /highlight >}}

### mike.css
{{< highlight css >}}
:root {
  --dark-mike: #7dbd3c;
  --main-mike: #c6fd81;
  --gray-mike: #aaa;
  --black: #000;
  --white: #fff;
  --iris-mike: #00c2b2;
  --dark-gray: #010101;
}
.character {
  position: relative;
  display: block;
  height: 200px;
  width: 200px;
  margin: 0 auto 32px auto;
  overflow: hidden;
}

.mike-head {
  position: absolute;
  left: 50%;
  bottom: 4%;
  transform: translateX(-50%);
  width: 130px;
  height: 125px;
  border-radius: 50%;
  background-color: var(--dark-mike);
  background: radial-gradient(var(--main-mike) 0%, var(--dark-mike) 100%);
  z-index: 10;
}
.mike-hand {
  position: absolute;
  left: 30%;
  bottom: 2%;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: radial-gradient(var(--dark-mike) 0%, var(--main-mike) 100%);
}
.mike-hand.right {
  left: 60%;
}
.mike-ear {
  position: absolute;
  height: 40px;
  width: 35px;
  left: 25%;
  top: 30%;
  border-radius: 100% 0% 100% 0%;
  background: var(--main-mike);
  background: radial-gradient(var(--dark-mike) 0%, var(--main-mike) 100%);
  transform: rotate(-12deg);
}
.mike-ear.right {
  left: 58%;
  border-radius: 0% 100% 0% 100%;
  transform: rotate(12deg);
}
.mike-eye {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--white);
  background: radial-gradient(var(--white) 60%, var(--dark-mike) 100%);
}
.mike-iris {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--iris-mike);
  background: radial-gradient(var(--iris-mike) 60%, var(--main-mike) 100%);
}

.mike-iris:before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--dark-gray);
  background: radial-gradient(var(--dark-gray) 60%, var(--dark-mike) 100%);
}
.mike-iris:after {
  content: "";
  position: absolute;
  left: 40%;
  top: 62%;
  width: 8px;
  height: 8px;
  background: var(--white);
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

{{< /highlight >}}

>#### W3C {#w3c}
><a href="https://www.w3.org/" target="_blank"> W3C (World Wide Web Consortium) </a> es el consorcio que se encarga de dirigir el desarrollo de protocolos para la evolución web. En la web podrás ver los últimos desarrollos y en qué se está trabajando para mejorar, también encontrarás todas las explicaciones que necesites sobre web y un apartado que seguro que usarás mucho que son los validadores HTML, CSS, mobile... Puedes analizar tus proyectos para ver si están dentro de los estándares. Vamos hacer una pequeña prueba con el código de Mike. 
>
> Para revisar nuestro <mark>HTML</mark> vamos a dirigirnos a la sección <a href="https://validator.w3.org/" target="_blank">validator</a>, como ves hay tres pestañas, en este momento nos interesa <a href="https://validator.w3.org/#validate_by_input" target="_blank"> validate by input </a>, aquí copiaremos el HTML de Mike. Si solo copiamos el trozo de HTML veremos que nos dan varios errores, añade los tags necesarios hasta que sea válido.
>
>Para revisar <mark>CSS</mark> iremos al siguiente enlace <a href="http://jigsaw.w3.org/css-validator/#validate_by_input" target="_blank">CSS Validator</a>, el validador no está actualizado con las "nuevas" propiedades de CSS3, probablemente si introduces código como variables, saltarán varios errores de <mark> parse error </mark>. Si tienes dudas sobre algún error, puedes acudir a <a href="caniuse.com" target="_blank">CAN I USE</a> como ya hemos comentado en niveles anteriores. 
>
>

## Paso 3: Fondo con patrones

A Mike en solo dos pasos lo hemos tenido listo así que ahora lo acompañaremos con un bonito fondo creado con las propiedades de degrado. Utilizando la imaginación puedes crear miles de patrones para la propiedad background, ahora te mostraré como crear el sencillo patrón que ves en la imagen, después sientete libre de probar mil cosas. 

{{< image src="/mike/mike.jpg" alt="Fondo con patron para Mike">}}

### mike.css
{{< highlight css >}}
:root{
  --main-background: #d2ebd3;
  --dark-background: #93a493;
}

body {
  background:
    linear-gradient(
      var(--dark-background) 1px,
      transparent 2px
    ),
    linear-gradient( 90deg,
      var(--dark-background) 1px,
      transparent 2px
    ),
    linear-gradient(  45deg,
      var(--main-background) 50%,
      transparent 51%
    );
 
  background-size: 20px 20px;
}
{{< /highlight >}}

>#### Patrones con degradados {#pattern}
>¿Te acuerdas que comentamos en el nivel anterior que podíamos añadir más de un degradado dentro de la propiedad <mark> background </mark>? Vamos a ver cómo trabajamos con difrentes degradados. 
>
> 1. El primer <mark> linear-gradient </mark> crea la linea horizontal del patrón, contiene una linea horizontal de 1px y el resto será transparente, como no le hemos dado dirección está linea será pintada en el primer píxel contando desde arriba.
> 2. El siguiente pinta la linea vertical, como puedes ver, lo único que cambia es la rotación de 90º del degradado. En este caso al darle una rotación de 90º nos pinta el primer píxel de la izquierda. Ya tenemos la cuadrícula pintada.
> 3. En el tercero queremos rellenar medio cuadrado en diagonal así que le añadimos una rotación de 45º y el color secundario al 50%. 
> 4. La propiedad <mark> background-size </mark> marca el tamaño del patrón, actualmente es de 20px de alto por 20px de ancho,puedes cambiar y veras como se va transformando.
>
> Te dejo un enlace de codepen donde puedes ver otros <a href="https://codepen.io/collection/AEbwmv">patrones</a>. 

## Paso 4: Mejora tu Mike
Ahora sí, ya tenemos a Mike acompañado de un bonito fondo con patrones, como siempre digo seguro que tú lo puedes mejorar. ¿Lo intentas? Este es el enlace a Codepen para que veas mi Mike final. Juega un rato, mejora y enséñame el resultado.

<a href="https://codepen.io/neusaguera/pen/ExjjJgr" target="_blank"> Codepen Mike </a>

Nos leemos en el próximo nivel.