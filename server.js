express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const morgan = require("morgan")

app.use(cors, morgan("dev"), bodyParser);