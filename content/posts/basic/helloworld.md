---
layout: post
title: HelloWorld
img: helloworld/introduction.png
tags: ["Elemental"]
date: "2019-03-08"
weight: 299
categories: ["Basic"]
---

¿Quieres aprender las primeras nociones de HTML & CSS? Sigue leyendo e intentaré ayudarte.
Primero empezaremos con una breve descripción de ambos conceptos.

#### Definición de HTML según wikipedia
>_HTML, siglas en inglés de HyperText Markup Language (lenguaje de marcas de hipertexto), hace referencia al lenguaje de marcado para la elaboración de páginas web._
>
><a href="https://es.wikipedia.org/wiki/HTML" target="_blank">Leer más en wikipedia</a>

#### Definición de CSS según wikipedia
>_CSS (siglas en inglés de Cascading Style Sheets), en español «Hojas de estilo en cascada», es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado._
>
><a href="https://es.wikipedia.org/wiki/CSS" target="_blank">Leer más en wikipedia</a>.

Con las definiciones que nos proporciona wikipedia podríamos decir que HTML y CSS son los mejores amigos entre si. Con HTML creamos de manera estática, la estructura y el contenido de la web. Con CSS le daremos forma y color para que el contenido tenga sentido.

Sin enrollarme más que siempre me ha parecido que las partes teóricas son muy aburridas vamos a crear nuestro primer 'Hello World' en HTML & CSS.

### Paso 1: ¿Qué necesitamos para empezar a crear webs estáticas?

Si vamos a lo más rudimentario podemos decir que solo necesitas un bloc de notas para crear tu primer hello world, pero te aconsejo que utilices un editor de código que te ayude a ver el código con colores y estructurado. Yo utilizo Visual studio Code, es una herramienta gratuita y fácil de utilizar, también hay otros como notepad++, sublime... Escoge el que más te guste, ábrelo y empecemos.

### Paso 2: Estructura mínima HTML

Crea un archivo nuevo y guardalo como helloworld.html. Copia el siguiente código, guarda y abre el fichero desde tu navegador y WoW ya tenemos nuestro primer Hello World!

{{< highlight HTML>}}
<!DOCTYPE html>
<html>
    <head>
        <title>Título Helo World</title>
    </head>
    <body>
        Hello world!
    </body>
</html>
{{< /highlight >}}

>#### Notas
> 1. <strong>&lt;!Doctype html&gt;</strong> Estará siempre en la primera linea, sirve para que el navegador conozca que tipo de documento está recibiendo.
> 2. <strong>&lt;html&gt;&lt;/html&gt;</strong> Estos tags son el inicio y cierre de nuestro código, el resto de código debe estar entre estos dos tags.
> 3. <strong>&lt;head&gt;&lt;/head&gt;</strong>  Engloba los elementos que informan sobre el documento, título, estilos, meta, links, scripts...
> 4. <strong>&lt;title&gt;&lt;/title&gt;</strong> Aquí pondremos el título de la web y es lo que aparecerá en la pastilla del navegador.

> ![Navegador con hello world](/helloworld/helloworld.png)

> 5. <strong>&lt;body&gt;&lt;/body&gt;</strong> Engloba el contenido HTML de toda la web, texto, imagenes, tablas...&lt;

### Paso 3: Añadir CSS

Tenemos tres maneras de añadir CSS:  Inline, Internal, External . Para mi la única manera en que deberías añadir el CSS es de forma externa, pero te voy a mostrar como hacerlo de las tres maneras.

#### CSS Inline

El css inline es aquel que se añade en el atributo style del elemento HTML. Esta manera de añadir CSS no te la recomiendo por los siguientes motivos:
1. Mezclas HTML con CSS y eso complica el seguimiento del código.
2. No es aprovechable, esos estilos solo se aplican al elemento, así que si queremos varios elementos con el mismo estilo deberíamos añadir el atributo style en cada tag.

{{< highlight HTML >}}
<!DOCTYPE html>
<html>
    <head>
        <title>Título Helo World</title>
    </head>
    <body style="background: black; color: white">
        Hello world!
    </body>
</html>
{{< /highlight >}}

>En el tag body he añadido la palabra style y entre comillas le he cambiado el color de fondo a negro y el color de la fuente a blanco.

#### CSS Internal
El CSS internal es aquel que añadimos en el Head dentro del tag Style. ¿Recomendable? No! Como en el caso anterior estamos mezclando el codigo HTML & CSS que siempre dificulta la lectura del código. Ten en cuenta que el CSS tiende a a crecer mucho y nos quedaría un archivo infinito.

{{< highlight HTML >}}
<!DOCTYPE html>
<html>
    <head>
        <title>Título Helo World</title>
        <style>
            body{
                background: black;
                color: white;
            }
        </style>
    </head>
    <body>
        Hello world!
    </body>
</html>
{{< /highlight >}}

#### CSS External

Es la opción más recomendable, fácil de ordenar, clara y sin mezclar ambos mundos. Consiste en tener uno o varios ficheros .css donde tendremos todo el código, el qual referenciaremos en el head.

{{< highlight HTML >}}
//Fichero helloworld.html
<!DOCTYPE html>
<html>
    <head>
        <title>Título Helo World</title>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
        Hello world!
    </body>
</html>
{{< /highlight >}}
{{< highlight CSS >}}
//Fichero style.css
body{
    background: black;
    color: white;
}
{{< /highlight >}}