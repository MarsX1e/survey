let mongoose=require("mongoose");
let Schema=mongoose.Schema;
let UserSchema=new Schema({
    name:String,
    polls:[{type: Schema.Types.ObjectId, ref: 'poll'}]
},{timestamps:true});
mongoose.model("user",UserSchema);