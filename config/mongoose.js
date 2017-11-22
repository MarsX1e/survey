let mongoose=require("mongoose");
let fs=require("fs");
let path=require("path");
let mp=path.join(__dirname,"./../models");

mongoose.connect("mongodb://localhost/survey");

fs.readdirSync(mp).forEach(function(file){
    if(file.indexOf(".js")>0){
        require(mp+"/"+file);
    }
})