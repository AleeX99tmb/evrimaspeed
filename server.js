const express = require("express");

const app = express();

const PORT = 3000;

// Servir archivos de la carpeta public
app.use(express.static("public"));

// Arrancar servidor
app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});