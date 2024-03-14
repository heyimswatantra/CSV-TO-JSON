import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js"

dotenv.config({
  path: './env'
})

connectDB()
.then(() => {
    app.listen(process.env.SERVER_PORT || 5432, () => {
        console.log(`Server Listening on port ${process.env.SERVER_PORT}`);
    })
})
.catch((error) => {
    console.log("PostgresDB connection failed !!! ", error);
})