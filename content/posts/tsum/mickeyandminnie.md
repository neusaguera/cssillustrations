---
layout: post
title: Nivel 1. Mickey & Minnie en Css
img: imageHtml.png
tags: ["tsum", "illustration", "css"]
date: "2019-08-28"
---
![Pasos de Minnie](/mickey_minnie/stepsMinnie.png)

En este primer nivel vamos a crear los Tsums de Mickey y Minnie en seis sencillos pasos. No importa tu nivel de CSS, si estás empezando encontrarás explicaciones de las propiedades durante todo el curso, ¿Qué veremos con Mickey y Minnie?

- <a href="#absolutePosition">Centrar elementos en posición absoluta.</a>
- <a href="#twoClasses">Comportamiento de dos clases en un mismo elemento</a>
- <a href="#classBehavior">¿Qué clase prevalece?</a>
- <a href="#inheritClass">Clases heredadas</a>
- <a href="#rotate">Rotación de elementos sobre su eje</a>
- <a href="#zindex">Z-orden (z-index)</a>

Aunque parezcan muchas cosas no te preocupes y vamos a ponernos con el código. Let's go!

(Si por el contrario eres un/a máster del CSS te invito a seguir el curso y quizá puedas a portar mejores ideas )

## Paso 1: Las formas básicas.

Antes de empezar con el HTML, estudio la imagen que quiero crear y la desgloso en mi mente. Para que te sea más fácil, te aconsejo que cojas papel y lápiz, dibuja la forma más básica del Tsum, en este caso la forma de Mickey. No hace falta que seas un gran dibujante solo son las formas. Algo parecido a esto:

![formas básicas Mickey](/mickey_minnie/basicmickey.png)

Una vez tenemos el dibujo, crearemos dos ficheros  mickey.html   y  mickey.css

Nos han salido 5 círculos (orejas, manos y cabeza). En el fichero  mickey.html    cada círculo lo convertiremos en un  div   y le añadiremos una clase con un nombre fácil de identificar. Hemos de pensar en nuestro yo del futuro o en el posible compañero que luego tenga que modificar el código. Por experiencia, mirar tu código y que no lo entiendas, da mucha rabia.

Imagina que para este código utilizáramos las siguientes clases:

{{< highlight HTML>}}
<div class="rdn-uno"></div>
<div class="rdn-dos"></div>
<div class="rdn-tres"></div>
<div class="rdn-cuatro"></div>
<div class="rdn-cinco"></div>
{{< /highlight >}}

Posiblemente hoy te acuerdes de cada  rdn   a que pertenece, pero guarda el código y ábrelo dentro de un mes, imposible acordarse a que parte del Tsum pertenecía cada  div  , ¿verdad?.

Con las pautas que te he dado te toca crear el HTML, abajo te dejo una posible solución.

### mickey.html
{{< highlight HTML >}}
<div class="character">
    <div class="mickey-head"></div>
    <div class="mickey-ear"></div>
    <div class="mickey-ear right"></div>
    <div class="mickey-hand"></div>
    <div class="mickey-hand right"></div>
</div>
{{< /highlight >}}

>#### Notas
> Como puedes ver he englobado los 5  divs   que comenté anteriormente dentro de otro llamado  character  . Esta clase la utilizaremos para todos los Tsums que crearemos en este curso.

Ahora vamos a por el CSS. La solución del CSS la he dividido en dos partes, en la primera nos centraremos en posicionar los elementos y en la segunda le daremos forma y color. Intenta hacer algo parecido a esto:

![mickey simple body](/mickey_minnie/mickeybody.png)

### mickey.css
Como hemos comentado en esta primera parte solo vamos a centranos en el posicionamiento de los elementos. El resultado de este código serán unos cuadrados de colores centrados.

{{< highlight css >}}
.character {
    display: block;
    height: 200px;
    width: 200px;
    position: relative;
    overflow: hidden;
    margin: 0 auto 32px auto;
}

.mickey-head {
    width: 140px;
    height: 130px;
    position: absolute;
    left: 50%;
    bottom: 4%;
    transform: translateX(-50%);

    background: #f2f;
}

.mickey-ear {
   height: 70px;
   width: 70px;
   position: absolute;
   left: 0%;
   top: 14%;

   background: #ff2;
}

.mickey-ear.right {
   left: inherit;
   right: 0%;
}

.mickey-hand {
   height: 20px;
   width: 20px;
   position: absolute;
   left: 30%;
   bottom: 0%;
    z-index: -1;
   background: #2ff;
}

.mickey-hand.right {
   left: 60%;
}

{{< /highlight >}}

>#### Centrar elementos en posición absoluta. {#absolutePosition}
> Para centrar la cabeza horizontalmente he utilizado el siguiente código:
>
{{< highlight css >}}
.mickey-head {
   position: absolute;
   left: 50%;
   transform: translateX(-50%);
   width: 140px;
   height: 130px;
}
{{< /highlight  >}}
>
> Con la siguiente imagen voy a intentar explicarte el comportamiento de  transform:translateX()   .
>
![transform translate behavior](/transformtranslate.png)
>
>
>No hay una única manera para centrar los elementos y quizá has utilizado la siguiente solución o la has visto aplicar en algún sitio.
>
>
{{< highlight css >}}
.mickey-head {
   position: absolute;
   left: calc(50% - 70px);
   width: 140px;
   height: 130px;
}
{{< /highlight >}}
>
> Al atributo  left   le decimos que calcule el 50% menos la mitad del ancho del elemento. Esta solución es valida pero tenemos que tener en cuenta que si en un futuro hemos de cambiar el ancho también tendremos que acordarnos que cambiar el  left  . Son cosas que intento evitar siempre que puedo.
>

Ya tenemos los cuadrados posicionados vamos a darles forma y color.

### mickey.css

{{< highlight css >}}


.mickey-head {
   border-radius: 50%;
   background: black;
}

.mickey-ear {
   border-radius: 50%;
   background: black;
}

.mickey-hand {
   border: 1px solid black;
   border-radius: 50%;
   background: white;
}

{{< /highlight >}}

> #### ¿Qué clase prevalece? {#classBehavior}
> Cuando el browser se encuentra con propiedades repetidas prevalece la que está debajo, siempre y cuando no haya ningún !important y el número de dependencias sea el mismo. Si una clase tiene más dependencias que la otra, es la que prevalece.  !important   prevalece por delante de todo, solo utilizar si es estrictamente necesario, en mi experiencia pocas veces podemos justificar su uso. Abusar de  !important   puede amargar nuestra existencia en un futuro...
>
>Ahora voy a ponerte unos ejemplos, haz pruebas y comenta en el post de que color será el background en cada uno de los códigos:

>
{{< highlight css >}}

/*Ejercicio 1*/
.mickey-head {
    background: red;
}
.mickey-head {
   background: black;
}

/*Ejercicio 2*/
.mickey-head {
    background: black;
}
.mickey-head {
   background: red;
}

/*Ejercicio 3*/
.mickey-head.black{
    background: black;
}
.mickey-head {
   background: red;
}

/*Ejercicio 4*/
.mickey-head{
    background: white !important;
}
.mickey-head.black {
    background: black;
}
.mickey-head {
   background: red;
}
{{< /highlight >}}
>


## Paso 2: Cara.

Ya tenemos la forma básica de Mickey, ahora vamos a por la cara. Intenta modificar el HTML y CSS necesario para crear algo parecido a esto:

![mickey face](/mickey_minnie/mickeyface.png)

No parece muy difícil, ¿No?. Una pequeña ayuda, he añadido 3 divs.

### mickey.html

{{< highlight HTML >}}
    <div class="mickey-head">
        <div class="mickey-face"></div>
        <div class="mickey-face right"></div>
        <div class="mickey-snout"></div>
    </div>
{{< /highlight >}}

Vamos a darle forma y color.

### mickey.css

{{< highlight css >}}
.mickey-face {
    position: absolute;
    left: 17%;
    top: 24%;
    width: 60px;
    height: 85px;
    background: #ffe1c7;
    border-radius: 50%;
}
.mickey-face.right {
    left: 41%;
}
.mickey-snout {
    position: absolute;
    left: 50%;
    bottom: 1%;
    width: 107px;
    height: 52px;
    background: #ffe1c7;
    border-radius: 50%;
    transform: translateX(-50%);
}
{{< /highlight >}}

Recuerda que no hay una única solución, hazlo a tu manera y si tienes alguna duda escríbeme e intentaré ayudarte.

> #### Comportamiento de dos clases en un mismo elemento {#twoClasses}
> En la cara derecha he añadido la clase  right  . Este divs recibirá las características de la clase principal más las especificas para la parte derecha, como puede ser el cambio de posición. Es importante que la clase  right   en el CSS dependa de la clase principal:
>
>
{{< highlight css >}}
.mickey-hand.right {
   left: 60%;
}
.mickey-ear.right {
   left: inherit;
   right: 0%;
}
{{< /highlight >}}
>
>Si no anidamos la clase right no depende de nadie y afecta a todos los divs que contengan la clase  right  .
>
{{< highlight css >}}
.right {
   left: 60%;
}
{{< /highlight >}}
>

## Paso 3: Ojos y nariz.

Nos falta los ojos y nariz para que se parezca al Tsum de Mickey.

![Mickey con ojos y nariz](/mickey_minnie/mickeyeyes.png)

### mickey.html

{{< highlight HTML>}}
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

> Podemos hacer lo mismo sin utilizar más divs, con los atributos de CSS  :before :after  , pero eso lo veremos en los siguientes niveles del curso.


### mickey.css

{{< highlight css >}}
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

> #### Clases heredadas {#inheritClass}
> Para especificar la posición del ojo derecho heredamos la clase  .right   del div padre. Necesitamos poner un espacio entre las clases para crear la jerarquía padre / hijo. El padre siempre debe estar en la izquierda.
>
{{< highlight css >}}
//hereda del padre
.right .mickey-eye {
    left: 41%;
}

//están en el mismo nivel
.right.mickey-eye{
    left: 41%
}
{{< /highlight >}}

## Paso 4: de Mickey a Minnie

WoW, Ya tenemos a Mickey, vamos a por Minnie! El siguiente paso es transformar a Mickey en Minnie. Para que tengas a los dos por separado, crea dos ficheros llamados  minnie.html   y  minnie.css  , copia el código que tienes de Mickey y cambia todas las palabras 'mickey' por 'minnie' (más adelante veremos como aprovechar código). ¿Tienes los ficheros creados? Vamos a añadirle pestañas y coloretes. ¿Lo intentas tú primero?

![Minnie con pestañas y coloretes](/mickey_minnie/minnieblushers.png)

### minnie.html
{{< highlight HTML >}}
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
{{< /highlight >}}

### minnie.css
{{< highlight css >}}
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

> #### Rotación de elementos sobre su eje {#rotate}
> En pasos anteriores usamos la propiedad  transform   para trasladar y centrar el div, ahora lo usaremos para rotar sobre su eje.
>
{{< highlight css >}}
// Trasladar, mover, centrar.
transform: translate(-50%, 20%); //(X,Y)
transform: translateX(-50%);
transform: translateY(-20%);

// Rotar (grados)
transform: rotate(45deg);
{{< /highlight >}}

## Paso 5: El lazo de Minnie.
Ya tenemos algo que se parece a Minnie, una Minnie muy cabreada porque no tiene su lazo... ¿Alguna vez la has visto sin su lazo? ella lo necesita así que vamos a crearlo. Venga utiliza la imaginación ¡tú puedes!

![lazo de Minnie](/mickey_minnie/minniebow.png)

### minnie.html
{{< highlight HTML>}}
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
{{< /highlight >}}

### minnie.css
{{< highlight css >}}
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


> #### Z-orden (z-index) {#zindex}
> z-index indica el z-orden de un elemento y sus descendientes. Cuando varios elementos se superponen, z-index determina que elemento está delante o detrás. Su valor por defecto es auto, pero podemos definirlos con números enteros, el número mayor normalmente se superpone. En mi caso para seguir una regla y que me sea fácil acordarme del z-orden, los determino de la siguiente forma:
>
{{< highlight css >}}
z-index: 1;
z-index: 10;
z-index: 100;
z-index: 1000;
z-index: 10000;
{{< /highlight >}}
>Con esta regla me aseguro de no poner otros numeros y seguir de manera intuitva el z-orden de los elementos.
>

> #### Nota
> Recuerda que en este nivel no estamos usando  :before :after  , pero si quieres utilizarlo adelante, posiblemente el código te quede más limpio.
>
> ¿Te has fijado que he utilizado las clases  .two   y  .three  ? Recuerda utilizar palabras fáciles de identificar, esto no sería una buena práctica, ¿qué se te ocurre?

## Paso 6: Vamos a mejorar a Minnie
Ahora sí, tu dibujo te recuerda a Minnie ¿verdad?. Siempre podemos mejorarla con degradados, bordes, etc... Esta es mi Minnie final, estoy segura de que puedes hacer algo mejor. Juega un rato con tu código y enséñame el resultado.


![last minnie](/mickey_minnie/lastminnie.png)

En este enlace de github puedes ver el código final. Hasta aquí el primer Nivel del curso Tsum, recuerda que  puedes comentar o escribirme para cualquier duda o sugerencia. Nos leemos en el siguiente Nivel con Daisy & Donald.