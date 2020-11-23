const express = require('express')
const app = express()
const path = require("path");
const port = 3000

app.use("/static", express.static(path.resolve(__dirname, "src", "static")));

app.get('/*', (req, res) => {
  // Indispensable to make the routing work!
  res.sendFile(path.resolve(__dirname, "src", "index.html"));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})