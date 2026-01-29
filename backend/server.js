const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Smart-IDE backend running 🚀");
});

app.post("/webhook", (req, res) => {
  console.log("GitHub webhook received");
  res.sendStatus(200);
});

app.listen(PORT, () =>
  console.log("Backend listening on port", PORT)
);
