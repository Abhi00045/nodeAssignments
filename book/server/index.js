import express from "express"; // import express
import mongoose from "mongoose"; // import mongoose
import "dotenv/config" // import dotenv
import cors from "cors"; // import cors

const app = express(); // create an instance of express
const port = process.env.PORT; // create a port number

// error handling try-catch block is used to catch errors that may occur during the execution of the code.
try{
await mongoose.connect(process.env.MONGO_URL); // connect to the database returns a promise
app.listen(port, () => console.log("Server is running on port"+ port)); //it contains two things a port-number(between 1 to 65535) and a callback function
}catch(error){
    console.log("Error"+error);
}