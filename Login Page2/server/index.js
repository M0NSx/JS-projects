const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UsersModel = require("./models/Users")

const app = express()
app.use(express.json())
app.use(cors())
