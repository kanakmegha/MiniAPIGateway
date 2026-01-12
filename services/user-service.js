import express from "express";

const app = express();

app.get("/:id", (req, res) => {
  res.json({
    service: "user-service",
    userId: req.params.id,
    name: "Kanak",
  });
});


app.listen(4001, () => {
  console.log("User Service running on 4001");
});
