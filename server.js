const express = require("express");
const path = require("path");
const api = require("./netlify/functions/api");
const app = express();
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.use("/api", async (req, res) => {
  const event = {
    path: req.path,
    httpMethod: req.method,
    headers: req.headers,
    body: req.body && Object.keys(req.body).length ? JSON.stringify(req.body) : null,
    queryStringParameters: req.query,
  };
  try {
    const result = await api.handler(event);
    res.status(result.statusCode || 200);
    for (const [key, value] of Object.entries(result.headers || {})) res.set(key, value);
    return res.send(result.body || "");
  } catch (error) {
    console.error("Falha na API:", error);
    return res.status(500).json({ error: "Erro interno no servidor." });
  }
});
app.use(express.static(path.join(__dirname, "frontend")));
app.get("*", (_req, res) => res.sendFile(path.join(__dirname, "frontend", "index.html")));
const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => console.log(`Educa Play rodando na porta ${port}`));
