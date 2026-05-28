# Programación y Plataformas Web

# Evaluación Técnica – Angular, Servicios, Señales, Navegación y Consumo de APIs

**Pablo Torres**
Docente – Carrera de Computación

**Universidad Politécnica Salesiana**

---

# Evaluación Técnica: Aplicación Angular

## 1. Introducción

Desarrollo de una aplicación funcional que consuma información desde una API externa, presente los datos mediante componentes visuales reutilizables y permita navegar hacia una página de detalle, aplicando buenas prácticas de organización, rendimiento, estructura semántica y experiencia de usuario.

El repositorio entregado debe poder clonarse, instalarse y ejecutarse directamente sin errores.

---

## 2. Objetivos de la Evaluación

* Implementar una aplicación Angular organizada por páginas, componentes, servicios e interfaces.
* Consumir datos desde una API externa mediante un servicio reutilizable.
* Definir interfaces TypeScript para mapear correctamente las respuestas del API.
* Utilizar señales para manejar estados visibles de la interfaz.
* Implementar navegación mediante rutas dinámicas hacia una página de detalle.
* Diseñar componentes reutilizables para mostrar información en formato de tarjeta.
* Aplicar almacenamiento local para guardar registros consultados individualmente.
* Incorporar estados de carga mediante un spinner o indicador visual.
* Aplicar estilos responsivos con TailwindCSS y DaisyUI.
* Mantener una estructura de proyecto clara, semántica y técnicamente correcta.

---

## 3. Indicaciones Generales

La aplicación deberá consumir información desde una API pública asignada durante la evaluación. La API proporcionará un listado de registros y un endpoint de consulta individual por identificador.

Se deberá crear una solución general, organizada y reutilizable, evitando depender de datos quemados para mostrar la información principal.

La aplicación debe contener como mínimo:

* Un servicio Angular para consumir la API.
* Dos métodos principales en el servicio:

  * Un método para obtener el listado de registros.
  * Un método para obtener el detalle de un registro por identificador.
* Interfaces TypeScript para representar la respuesta del listado y el detalle.
* Una página principal para mostrar los registros.
* Una página de detalle para mostrar información ampliada.
* Un componente reutilizable tipo card.
* Un componente header.
* Un componente footer.
* Layout de la pagina no debe redibujar header ni footer.
* Manejo de loading antes de mostrar la información.
* Almacenamiento en `localStorage` de cada registro consultado en la página de detalle.

---

## 4. Requerimientos Técnicos Globales

El proyecto deberá cumplir los siguientes requerimientos:

* Angular versión 20 o superior.
* Componentes standalone.
* Uso de routing.
* Uso de `HttpClient`.
* Uso obligatorio de servicios.
* Uso obligatorio de interfaces TypeScript.
* Uso obligatorio de señales para manejar al menos:

  * Total de elementos mostrados.
  * Estado de carga o estado visual relacionado.
* Uso de directivas modernas:
* Uso de TailwindCSS.
* Uso de DaisyUI.
* Estructura semántica html
* Diseño responsivo.
* Código organizado por carpetas.

---

## 5. Estructura Mínima del Proyecto

La estructura puede variar según el criterio técnico de cada uno, pero debe mantener separación clara de responsabilidades y una arquitectur modular segun la especificación.

Puede usar otra organización, siempre que se evidencie una arquitectura limpia, modular y coherente.

---

## 6. Header de la Aplicación

La aplicación deberá incluir un componente `HeaderComponent`.

Este componente debe mostrar como mínimo:

* Nombre de la asignatura.
* Nombre de la evaluación.
* Nombre completo.
* Carrera.
* Enlace al repositorio de GitHub (funcional).

Requerimientos visuales mínimos:

* Debe tener estilos aplicados con TailwindCSS y/o DaisyUI.
* Debe diferenciarse visualmente del contenido principal.
* Debe mantener buen contraste.
* Debe ser responsivo.
* Debe incluir espaciado adecuado.
* Un componente (boton/div/p) que haga navegación hacia la página principal.

---

## 7. Hero de la Aplicación

La aplicación deberá incluir un componente tipo `HeroComponent`.

El hero debe ubicarse en un lugar estratégico de la estructura general para evitar repetirlo innecesariamente en cada página.

El hero debe mostrar como mínimo:

* Título principal de la aplicación (titulo del listado del API). Ejm listado de personajes de los Simpsons
* Total de elementos mostrados actualmente en la página principal. Ejm. Total de personajes 16
* Estado visual relacionado con la carga de datos o la información disponible.

El total de elementos mostrados debe actualizarse mediante una señal cuando los datos sean cargados correctamente.

En la página principal `/` o `home`, el `HeroComponent` deberá mostrar el total de registros obtenidos desde la API. Este valor debe calcularse a partir de la cantidad de elementos presentes en el listado cargado, usando la propiedad `length` del arreglo correspondiente.

Ejemplo:

```ts
totalItems = items.length;
```

En la página de detalle, el `HeroComponent` deberá mostrar el valor recibido mediante parámetro de consulta en la URL.

Ejemplo de URL válida:

```txt
/detalle?id=6&total=10
```

En este caso, el hero deberá mostrar:

```txt
Total de registros: 10
```

El valor `total` debe provenir de la navegación realizada desde la página principal.

Ejemplo de URL incompleta:

```txt
/detalle?id=6
```

Si la página de detalle se abre directamente desde el navegador y no existe el parámetro `total`, el hero deberá mostrar el siguiente mensaje:

```txt
ERROR EN TOTAL
```

Recibir parametro:
```ts
total = input.required<number>();
```


Requerimientos visuales mínimos:

* Debe tener una composición clara.
* Debe usar estilos de TailwindCSS y/o DaisyUI.
* Debe adaptarse correctamente a pantallas pequeñas y grandes.
* Debe mantener coherencia visual con el resto de la aplicación.

---

## 8. Servicio para Consumo de API

Deberá crear un servicio Angular encargado de consumir la API asignada.

El servicio debe contener al menos dos métodos:

```ts
getItems()
```

Método encargado de obtener el listado general de registros.

```ts
getItemById(id: number | string)
```

Método encargado de obtener un registro específico mediante su identificador.

Requerimientos del servicio:

* Confirgurar URL en variable de entorno
* Debe centralizar la URL base o endpoints utilizados.


---

## 9. Interfaces TypeScript

Deberá crear interfaces para representar la estructura de los datos consumidos desde la API.

Como mínimo deberá existir:

* Una interfaz para la respuesta del listado.
* Una interfaz para el registro individual.
* Interfaces adicionales si la respuesta contiene objetos internos o propiedades anidadas.

No se aceptará el uso generalizado de `any` para evitar el tipado de la respuesta.

---

## 10. Página Principal

La página principal deberá consumir el listado de registros desde el servicio creado.

Funcionalidades requeridas:

* Obtener los registros desde la API.
* Mostrar componente Hero
* Mostrar un estado de carga antes de renderizar las tarjetas.
* Simular un retardo mínimo de 2 segundos antes de mostrar los datos.
* Actualizar mediante una señal el total de elementos mostrados.
* Mostrar los registros en una grilla responsiva.
* Usar el componente card para cada registro.
* Manejar visualmente el caso de error o ausencia de datos.

Requerimientos de presentación:


* El listado debe estar dentro de una sección semántica.
* La grilla debe adaptarse a diferentes tamaños de pantalla.
* En pantallas amplias pueden mostrarse varias tarjetas por fila.
* En pantallas pequeñas las tarjetas deben reorganizarse automáticamente.

---

## 11. Componente Card

El componente card deberá ser reutilizable y recibirá la información de un registro mediante `input`.

Cada card debe mostrar como mínimo:

* Imagen del registro.
* Atributo principal del registro.
* Dos o más datos complementarios.
* Acción de navegación hacia el detalle.


Requerimientos funcionales:

* El clic de navegación debe estar únicamente en la imagen y en el atributo principal.
* No se debe navegar al hacer clic sobre toda la tarjeta.
* Debe recibir los datos desde la página principal.
* No debe consumir directamente el servicio HTTP.
* Debe ser reutilizable también en la página de detalle.

Requerimientos visuales mínimos:

* Debe tener fondo diferenciado.
* Debe tener bordes o sombra.
* Debe tener efecto hover.
* Debe tener espaciado interno adecuado.
* Debe mostrar correctamente la imagen.
* Debe mantener proporciones visuales correctas.
* Debe adaptarse a distintos tamaños de pantalla.
* Debe usar clases de TailwindCSS y/o DaisyUI.


Manera de recibir parametros en el componenete:

```ts
item = input.required<Item>();
total = input.required<number>();
```

El item es el modelo interface del api

---

## 12. Navegación hacia Detalle

Al hacer clic sobre la imagen o el atributo principal del componente card, la aplicación deberá navegar hacia la página de detalle del registro seleccionado.

La navegación deberá enviar:

* El identificador del registro seleccionado como parámetro de ruta.
* El total de registros mostrados actualmente como parámetro de consulta.

Ruta esperada:

```txt
/details/6?total=10
```

En este ejemplo:

* `6` corresponde al identificador del registro seleccionado.
* `total=10` corresponde al total de registros mostrados actualmente en la página principal.

```ts
 router.navigate(['/page', 6], {
      queryParams: {
        total: 10,
      },
    });
```

cambiar los números por los valores correctos.


Requerimientos:

* La ruta debe estar declarada correctamente en `app.routes.ts`.
* La navegación desde el card debe generar una URL con el formato `/details/:id?total=valor`.
* La página de detalle debe obtener el identificador desde el parámetro de ruta.
* La página de detalle debe obtener el valor `total` desde los parámetros de consulta.
* El parámetro `total` debe provenir de la navegación realizada desde la página principal.
* La consulta del detalle debe realizarse usando el servicio.
* No se debe pasar todo el objeto por la URL.

---

## 13. Página de Detalle

La página de detalle deberá consumir el registro individual desde el servicio usando el identificador recibido por la URL.

La ruta de detalle debe seguir el siguiente formato:

```txt
/details/:id?total=valor
```

Ejemplo de URL válida:

```txt
/details/6?total=10
```

En este caso:

* El identificador del registro es `6`.
* El total de registros mostrados en la página principal es `10`.

El `HeroComponent` deberá mantenerse visible en la página de detalle y mostrar:

```txt
Total de registros: 10
```

Si la página de detalle se abre directamente sin el parámetro `total`, por ejemplo:

```txt
/details/6
```

el `HeroComponent` deberá mostrar:

```txt
ERROR EN TOTAL
```

La página de detalle debe mostrar como mínimo:

* Hero
* Card componente
* Botón o enlace para regresar a la página principal.

La pagina de debe consumir SOLO el servicio ItemService no LocalStora. `ItemService` es el que se encarga de ver si existe en Local, si no consume del api y guarda. 




## 14. Caché Local con localStorage

Al ingresar a la página de detalle, el registro consultado deberá guardarse en `localStorage`.

Cada registro debe almacenarse en una clave independiente.

Ejemplo de estructura esperada:

```txt
item-cache-1
item-cache-2
item-cache-3
```

Cada clave deberá contener la información del registro correspondiente en formato JSON.

Deberá crear un servicio de caché local, por ejemplo:

```ts
ItemCacheService
```

Este servicio debe contener como mínimo:

- metodo Guardar
- metodo getbyId


Requerimientos:

* No se debe guardar todo el mapa de registros en una sola clave.
* Cada registro consultado debe tener su propia clave.
* El servicio debe manejar errores básicos de lectura o conversión JSON.
* El almacenamiento debe ejecutarse desde el servicio asociado, no desde el componente card ni page.

---

## 15. Loading y Retardo Simulado

La página principal deberá mostrar un indicador de carga antes de presentar los registros.

Requerimientos:

* El loading debe mostrarse al iniciar la consulta.
* Debe existir un retardo simulado mínimo de 2 segundos.
* Mientras se carga, no deben mostrarse tarjetas incompletas.
* Puede usarse un spinner de DaisyUI o una implementación propia con TailwindCSS.
* Al finalizar la carga, deben mostrarse las tarjetas.
* El total de elementos debe actualizarse cuando los datos ya estén disponibles.

También se requeire aplicar loading en la página de detalle.

---

## 16. Estilos y Responsividad

La aplicación debe usar TailwindCSS y DaisyUI para mejorar la presentación visual.

Requerimientos mínimos de estilo:

* Header con diseño diferenciado.
* Hero visualmente destacado.
* Cards con fondo, sombra o borde.
* Efectos hover en elementos interactivos.
* Botones o enlaces con estilos claros.
* Espaciado coherente entre secciones.
* Tipografía legible.
* Contraste adecuado.
* Diseño responsivo.
* Grilla adaptable para el listado de cards.
* Imágenes correctamente ajustadas sin deformarse.

No se evaluará únicamente que el proyecto funcione. También se evaluará la calidad visual, la claridad de la interfaz y el uso correcto de componentes reutilizables.

---

## 17. Consideraciones de Rendimiento y Buenas Prácticas

Se valorará que se aplique buenas prácticas como:

* Separar páginas, servicios, interfaces y componentes.
* Evitar duplicación de código.
* Reutilizar componentes correctamente.
* Evitar consumo HTTP dentro de componentes puramente visuales.
* Usar señales para estados simples de interfaz.
* Evitar redibujar componentes comunes de forma innecesaria.
* Mantener rutas limpias.
* Usar nombres claros para archivos, clases, métodos e interfaces.
* Evitar lógica compleja dentro del HTML.
* Controlar estados de carga, error y datos vacíos.

---

## 18. Entregables

Deberá entregar en AVAC:

* Enlace al repositorio de GitHub.
* Commit final realizado dentro del tiempo establecido para la evaluación con e capturas en README.

README:

- Captura pagina con listado de componentes
- Captura pagina detalle
- Captura pagina del localStotage del navegador

---

## 19. Revisión del Proyecto

Importante:

La evaluación se revisará únicamente desde el repositorio entregado en AVAC.

El proyecto no debe presentar errores de instalación, compilación o ejecución.

Si el proyecto no puede clonarse, instalarse o ejecutarse, la calificación se verá afectada directamente.

---

# 20. Criterios de Evaluación


| Criterio                                                    |    Puntaje | 0 % No logrado                                                                     | 50 % Parcialmente logrado                                                                                                                           | 100 % Logrado completamente                                                                                                                                                           |
| ----------------------------------------------------------- | ---------: | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Estructura del proyecto, rutas y organización            |    1 pts | Proyecto desordenado, sin rutas funcionales o con errores graves de estructura.    | Estructura parcialmente organizada; rutas básicas funcionan, pero existen problemas de separación, nombres poco claros o carpetas mal distribuidas. | Proyecto organizado por páginas, servicios, interfaces y componentes; rutas limpias, funcionales y correctamente declaradas en `app.routes.ts`.                                       |
| 2. Servicio de consumo de API e interfaces                  |   1 pts | No consume API o usa datos quemados; no existen interfaces; uso excesivo de `any`. | Consume parcialmente; interfaces incompletas; el servicio implementa solo parte de la lógica requerida o mezcla responsabilidades.                  | Servicio completo con método de listado y método de detalle; respuestas tipadas correctamente con interfaces claras y sin uso innecesario de `any`.                                   |
| 3. Página principal con listado, loading y señales          |   1 pts | No muestra listado funcional; no hay loading ni señales.                           | Muestra datos parcialmente; loading incompleto; señal implementada de forma limitada o el total no corresponde al listado real.                     | Página principal funcional; loading con retardo mínimo de 2 segundos; señal actualiza el total usando `length` del listado cargado; uso correcto de `@if` y `@for`.                   |
| 4. HeroComponent en página principal y detalle              |    1.5 pts | No existe hero o solo aparece en una página sin lógica funcional.                  | El hero aparece en ambas páginas, pero muestra información incompleta o no valida correctamente el parámetro `total`.                               | El hero se muestra correctamente en home y detalle; en home presenta el total del listado cargado; en detalle muestra el query param `total`; si no existe, muestra `ERROR EN TOTAL`. |
| 5. Componente card reutilizable                             |    1.5 pts | No existe componente card o está mezclado directamente en la página.               | Card parcialmente reutilizable; muestra datos mínimos; navegación incorrecta o dependiente de toda la tarjeta.                                      | Card reutilizable, recibe datos por `input`, muestra imagen y datos relevantes; la navegación ocurre solo desde la imagen y el atributo principal.                                    |
| 6. Navegación hacia detalle con ruta dinámica y query param |    1.5 pts | No existe navegación funcional hacia detalle o la ruta está mal definida.          | Navega parcialmente, pero no envía correctamente el `id` o no envía el parámetro `total`.                                                           | Navegación correcta con formato `/details/:id?total=valor`; obtiene el `id` desde la ruta y el `total` desde query params.                                                            |
| 7. Página de detalle y consumo por ID                       | 2 pts | No existe detalle funcional o no consume el registro individual desde el servicio. | Detalle parcial; muestra pocos datos, no maneja correctamente loading/error o falla al recargar la ruta.                                            | Detalle completo; consume por ID desde el servicio; muestra imagen, nombre o atributo principal, identificador y al menos cuatro atributos adicionales.                               |
| 8. Caché local con localStorage                             |    2 pts | No guarda información en `localStorage`.                                           | Guarda información, pero en una sola clave global o con estructura incorrecta.                                                                      | Guarda cada registro consultado en una clave independiente; usa un servicio de caché local y maneja lectura/escritura de forma adecuada.                                              |
| 9. Estilos, responsividad y UI                              |    2 pts | Interfaz sin estilos claros; no usa TailwindCSS/DaisyUI; no es responsiva.         | Estilos básicos; responsividad incompleta; componentes visualmente poco consistentes.                                                               | Interfaz clara, responsiva, con header, hero, cards estilizadas, hover, espaciado, contraste y uso adecuado de TailwindCSS/DaisyUI.                                                   |
| 10. Ejecución, repositorio y entrega                        | 0.5 pts | El proyecto no se puede clonar, instalar o ejecutar.                               | El proyecto ejecuta con ajustes manuales o presenta advertencias/errores menores.                                                                   | El proyecto se clona, instala y ejecuta sin errores; README incluye instrucciones básicas de ejecución.                                                                               |

**Total: 15 puntos**

**Conversión a 10 puntos:**
