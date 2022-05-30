const dbConn = require("./config/db.conn");
const userRoutes = require("./routes/auth");
const contactRoutes = require("./routes/event");
const logger = require("./middleware/logger");
const cors = require('cors');
const express = require('express');
const app=express();
const corsOption={
    "origin":"*"
}
app.use(cors(corsOption));
app.use(express.json());
dbConn();

app.use(logger);
app.use('/api/auth',userRoutes);
app.use('/api/post',contactRoutes);
const port=process.env.PORT || 3000 ;


app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
});
