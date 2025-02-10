import express from "express";
import temperaturaRoutes  from "./routes/temperaturaRoutes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", temperaturaRoutes);

app.listen(8080, () => {
  console.log("🚀 ~ app.listen ~ 8080");
});
