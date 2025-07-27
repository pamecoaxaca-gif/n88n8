js
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const USERNAME = process.env.USERNAME || "adm";
const PASSWORD = process.env.PASSWORD || "admn8";
const DATA_DIR = "/data";

app.use(express.urlencoded({ extended: true}));

app.get("/", (req, res) => {
  res.send(`
    <h1>n88n8 Login</h1>
    <form method="POST" action="/login">
      <input name="username" placeholder="Usuario"/><br/>
      <input name="password" type="password" placeholder="Contraseña"/><br/>
      <button>Ingresar</button>
    </form>
  `);
});

app.post("/login", (req, res) => {
  if (req.body.username === USERNAME && req.body.password === PASSWORD) {
    const filePath = path.join(DATA_DIR, "mensaje.txt");
    fs.writeFileSync(filePath, "Acceso autorizado ✅");
    res.send(`Bienvenido ${USERNAME}. Se ha creado: mensaje.txt`);
} else {
    res.send("❌ Usuario o contraseña incorrectos.");
}
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en puerto ${PORT}`);
});