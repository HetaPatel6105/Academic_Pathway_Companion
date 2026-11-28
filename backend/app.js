import express from "express";
import routes from "./routes/index.js";

const app = express();

app.use(express.json());

// backend endpoints start with /api.
app.use("/api", routes);

// if no endpoint matched
app.use((req, res) => {
  res.status(404).json({
    error: "Endpoint not found",
  });
});

// handle errors
app.use((err, req, res, next) => {
  const status = err.status === 400 ? 400 : 500;

  console.error(err.message);

  res.status(status).json({
    error: status === 400 ? "Invalid request" : "Internal server error",
  });
});

export default app;