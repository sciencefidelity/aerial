import * as dotenv from "dotenv"
import express from "express"
import "module-alias/register"

dotenv.config({ path: ".env" })

const app = express()
const port = process.env.PORT || 3000

app.get("/", (_req, res) => {
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
