const express = require("express");
const app = express();
const routes = require("./routes");
const PORT = 3000;

//Parse incoming requests with JSON payloads to new body object
app.use(express.json());
app.use("/", routes);

app.listen(PORT, () => {
  console.log("Gateway has started on PORT", PORT);
});
