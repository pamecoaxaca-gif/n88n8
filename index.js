js
express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;
const USERNAME = process.env.USERNAME || "adm";
const PASSWORD = process.env.PASSWORD || "admn8";
const DATA_DIR = "/data";

app.use(express.urlencoded({ extended: true}));

// Asegura que la ruta exista
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR);
}

app.get("/", (req, res) => {
  res.send(`
    <h2>n88n8 Login</h2>
    <form method="POST" action="/login">
      <input name="username" placeholder="Usuario"><br/>
      <input name="password" type="password" placeholder="Contraseña"><br/>
      <button>Entrar</button>
    </form>
  `);
});

app.post("/login", (req, res) => {
  if (req.body.username === USERNAME && req.body.password === PASSWORD) {
    const filePath = path.join(DATA_DIR, "access.log");
    fs.writeFileSync(filePath, "Login exitoso ✅\n", { flag: "a"});
    res.send(`✅ Bienvenido ${USERNAME}. Registro en <code>access.log</code> guardado.`);
} else {
    res.send("❌ Usuario o contraseña incorrectos.");
}
});

app.listen(PORT, () => {
  console.log(`n88n8 corriendo en puerto ${PORT}`);
});
