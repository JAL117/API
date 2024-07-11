const express = require('express');
const cors = require("cors");
const app = express();
const Usuario = require("./routers/Usuario.routes")

app.use(cors());
app.use(express.json());

app.use("/usuario", Usuario);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});