import express from "express";
import cors from "cors";
import formVisionRoute from "../routes/formVisionRoute";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/thirdeye/api/v1", formVisionRoute);
app.use("/", (req, res) => {
  res.send("Hello World!");
});

const startServer = () => {
  try {
    app.listen(3000, () => {
      console.log("we up");
    });
  } catch (error) {
    console.log("error");
  }
};
startServer();
