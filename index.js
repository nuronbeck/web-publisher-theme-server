import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import theme1 from "./themes/1.json"

const app = express();
const port = 443;

app.use(cors());
app.use(bodyParser.json());


app.get('/api/theme/default', (req, res) => {

  res.status(200).send(theme1);
})

app.listen(443, () => {
  console.log(`Listening on port ${port}`)
  console.log(`http://localhost:${port}`)
})