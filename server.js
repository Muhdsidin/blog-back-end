const express = require("express")
const cors = require("cors")
const app = express()
const dotenv = require("dotenv")
const connectDatabase = require("./config/Connection")
const userRoute = require("./routes/user")
const PORT = process.env.PORT || 7777
dotenv.config()


connectDatabase()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
   
    process.exit(1);
  });

app.use(cors());
app.use(express.json());


app.use("/", userRoute);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
