const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const morgan = require("morgan")

app.use(cors, morgan("dev"), bodyParser);

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
const apiRouter = express.Router();

// Path: envelopes.js

