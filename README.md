# daw-express-authenticating-ldap

Ejemplo básico de login en framework ExpressJS contra un repositorio LDAP

Este proyecto consta de 4 paths:

/ -> GET redirige a la página principal

/login -> GET redirige a la página del login

/login/auth -> POST autenticación con los datos del formulario de login

/users -> GET página de ejemplo generada por express generator

# Prerequisitos

Nodejs

## Generación del proyecto

Este proyecto ha sido generado usando el generador de express siguiendo los siguientes pasos

1 - Instalar la dependencia

`npm install -g express-generator`

2 - Comando de generación con las siguientes opciones

`express --view=ejs daw-express-authenticating-ldap`

Donde --view=ejs es el sistema de templates y daw-express-authenticating-ldap es el nombre del proyecto.

# Dependencias necesarias

Body Parser
`npm install body-parser`

Libería de autenticación sobre LDAP
`npm install ldapauth-fork`

# Cambios realizados a la estructura inicial para el login

1 - Crear un template login.ejs para el login en el directorio views

2 - Añadir un link en index.ejs para acceder al login

3 - Incluir las dependencias requeridas en app.js

`const bodyParser = require('body-parser'); // middleware`

4 - Configurar el body-parser

```
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
```

5 - Añadir las dependencias al router del login

```
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
````

6 - Añadir el router login.js correspondiente a las opciones de login en el directorio routes

7 - En el router.post del login.js se realizan las configuraciones necesarias especificadas por la librería ldapauth-fork para la encontrar el usuario. Siguiendo los pasos de la [documentación] (https://www.npmjs.com/package/ldapauth-fork)

8 - Una vez hecha la validación contra LDAP. Si no encuentra al usuario vuelve a la página de login, si lo encuentra muestra datos relativos al usuario.
