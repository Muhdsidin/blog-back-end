const express = require("express")
const cors = require("cors")
const app = express()
const dotenv = require("dotenv")
const connectDatabase = require("./config/Connection")
const PORT = process.env.PORT || 7777

app.use(express.json())
app.use(cors)
dotenv.config()

connectDatabase()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
        process.exit(1); 
  });


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})
