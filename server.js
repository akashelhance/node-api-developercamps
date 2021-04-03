const express = require("express");
const dotenv= require("dotenv");
const bootcamp = require('./routes/bootcamps')
const morgan = require("morgan");
const colors = require("colors");
const connectDB= require("./config/db")
const errorHandler = require("./middlewire/error")


dotenv.config({path: './config/config.env'})

//connec to the database:

connectDB();
const app = express()


//Bosy parser- To read the data from the user:

app.use(express.json());


// Dev logging middlewire: 
if(process.env.NODE_ENV==="development"){
    app.use(morgan('dev'));
}
//Mounting Routes creared in the routes folder:
//Routes file:
app.use('/api/v1/bootcamps', bootcamp)

//errror handler always need to be after that the routing calling:

app.use(errorHandler);


// loading the server, Running the server

const PORT = process.env.PORT||5000
const server = app.listen(
    PORT,
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.green.bold
    )
  );
  
  // Handle unhandled promise rejections
  process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    // Close server & exit process
    // server.close(() => process.exit(1));
  });
  