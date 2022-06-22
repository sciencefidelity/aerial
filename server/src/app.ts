import * as dotenv from "dotenv"
import express from "express"
import "module-alias/register"

dotenv.config({ path: ".env" })

const app = express()
const port = process.env.PORT || 3000

app.get("/", (_req, res) => {
  res.send("Hello World!")
})

app.post("/", (_req, res) => {
  res.send("Got a POST request")
})

app.put("/user", (_req, res) => {
  res.send("Got a PUT request at /user")
})

app.delete("/user", (_req, res) => {
  res.send("Got a DELETE request at /user")
})

app.use(express.static("public"))

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
