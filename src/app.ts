import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get(["/", "/api"], async (req, res) => {
  return res.status(200).json({
    message: "Hello World!!!!",
  });
});

app.all("/*", async (req, res) => {
  return res.status(404).json({
    message: "A rota solicitada não foi encontrada ou implementada.",
  });
});

export default app;
