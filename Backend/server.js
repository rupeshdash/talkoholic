const express = require("express");
const app = express();
const port = 4000;

app.get("/chats", (req, res) => {
  res.send("Hello the server is sending a sample response");
});

app.listen(port, () => {
  console.log(`The server is listening to the post ${port}`);
});
