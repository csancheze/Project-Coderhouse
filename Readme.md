#API RESTful ![MIT](https://img.shields.io/apm/l/vim-mode?style=plastic)

  ## Description
  
  API RESTful con endpoints y formulario

  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#license)
  - [Tests](#license)
  - [Questions](#license)
  
  ## Installation
  
  
Descargar repositorio y correr servidor. Usar postman con las siguientes rutas y  visita el url del formulario:
 [Formulario](https://gabby-quilt-dugout.glitch.me/static/index.html)
 - GET https://gabby-quilt-dugout.glitch.me/api/productos/
 - GET https://gabby-quilt-dugout.glitch.me/api/productos/:id
 - POST https://gabby-quilt-dugout.glitch.me/api/productos/
    - Request Body
  ```
  {
  "title":"Nombre del producto" //<string>
  "precio" : 123 //<int>
  "thumbnail" "http://url.com/thumbnail.png" //<string>
  }
  ```
 - PUT https://gabby-quilt-dugout.glitch.me/api/productos/:id
    - Request Body
   
  ```
  {
  "title":"Nombre del producto" //<string>
  "precio" : 123 //<int>
  "thumbnail" "http://url.com/thumbnail.png" //<string>
  }
  ```
 - DELETE https://gabby-quilt-dugout.glitch.me/api/productos/:id
 

  
  ## Usage
  
  
Seguir instrucciones de instalación y probar los endpoints

  
  
  ## License
  
  
Copyright (c) 2022, Cesar Fernando Sanchez All rights reserved.
Licensed under the MIT license. 

  
  
[License](./MIT_license.txt)

  
  ## How to Contribute
  
Añadir rutas

  
  ## Questions
  
  If you have any question feel free to check my Github 
  
Username:csancheze
  
[Github](https://github.com/csancheze)

  or send me and email
  
<cesanchezesc@gmail.com>

