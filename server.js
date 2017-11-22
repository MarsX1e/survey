let express=require("express");
let app=express();
let path=require("path");
let bp=require("body-parser");
let session=require("express-session");
let port=8000;
app.use(express.static(path.join(__dirname,"./client/dist")));
app.use(bp.json());
app.use(session({secret:"fjoief"}));
require("./config/mongoose.js");
require("./config/routes")(app);


app.listen(port,function(){
    console.log(`going to prot ${port}`)
})