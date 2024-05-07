const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Mi Página Web Sencilla</title>
      </head>
      <body style="background-color:powderblue;">
        <h1 style="color:chocolate;">Esta es mi pagina web con Nodejs</h1>
        <p style="color:lightsalmon;">Me llamo Dafne, y este es mi tarea libre</p>
        <h2>La clase es: </h2>
        <p style="color:darkgreen;">Programación para internet</p>
        <h3 style="color:red;">Se imparte los días:</h3>
        <p style="color:purple;">Martes y jueves</p>
      </body>
    </html>
  `);
});


app.listen(port, () => {
  console.log(`Servidor web en ejecución en http://localhost:${port}`);
});