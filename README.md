### Challenge técnico
```
Proyecto que forma parte de una entrevista técnica.
Se utilizaron las siguientes técnologias para desarrollo: ReactJs v17.0.2, react-router-dom v6.3.0, reduxjs/toolkit v1.8.5, react-redux v8.0.2
Se utilizaron las siguientes técnologias para testing: testing-library/react v12.1.2, testing-library/jest-dom v5.16.2

Se recibió un proyecto previamente iniciado sobre el cual se debian realizar algunas modificaciones sobre lo hecho, con la finalidad de agregar features y que sea escalable. Los requerimientos fueron los siguientes: 

• Para el header se requiere una animación para tener un acceso rápido a las distintas páginas cuando
hacemos scroll. Se quiere que cuando hacemos scroll down, este tiene que desaparecer y cuando hacemos
scroll up tiene que volver a aparecer en la posición de la página dónde te encuentres.

• Desde el header se puede navegar a las distintas páginas, pero por temas de SEO se requiere que esta
navegación se vea reflejada en la url. (Ejemplo: la página de favoritos podría ser /favorites)

• El botón de añadir a favoritos no está funcionando. Implementa la lógica para añadir y quitar de favoritos.

• Implementación de algún test. Puede ser e2e, unitario o funcional. En el proyecto encontrarás algunos test
que el programador que inició el proyecto, empezó a hacer.


Se decidió utilizar react-router-dom para la navegación entre las diferentes pestañas dentro de la aplicación, para trabajar con params y poder obtener el segmento correspondiente en la URL.
Se utilizó un custom hook para el manejo de formulario en la pestaña de añadir meetups.
Se utilizó react-redux y react redux toolkit para el manejo de estado global en la aplicación. Se realizó de forma modular, separando los stores de meetups y favorites para poder mmanejarlos como listados independientes.
Al no requerir utilizar el consumo de alguna API, todas las modificaciones se realizaron sobre dichos stores, tanto para agregar nuevos meetups como para agregar/remover favoritos.

```
# React Meetup App

## Setup del proyecto
```
npm install
```

### Compilar y obtener la funcion de hot-reaload para desarrollo
```
npm start
```

### Compilar para producción
```
npm build
```

### Correr la suit de test
```
npm test
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
