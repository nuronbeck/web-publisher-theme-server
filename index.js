import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

// Themes
import theme1 from "./themes/1.json";
import theme2 from "./themes/2.json";
const defaultTheme = 2;

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());


app.get('/api/theme/default', (req, res) => {
  res.status(200).send(eval(`theme${defaultTheme}`));
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
  console.log(`http://localhost:${port}`)
})