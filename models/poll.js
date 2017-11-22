let mongoose=require("mongoose");
let Schema=mongoose.Schema;
let PollSchema=new Schema({
    _post:{type: Schema.Types.ObjectId, ref: 'user'},
    question:String,
    option1:{text:String,vote:0},
    option2:{text:String,vote:0},
    option3:{text:String,vote:0},
    option4:{text:String,vote:0}
},{timestamps:true});
mongoose.model("poll",PollSchema);