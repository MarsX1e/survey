let mongoose=require("mongoose");
let User=mongoose.model("user");
let Poll=mongoose.model("poll");
module.exports={
    create:(request,response)=>{
        console.log(`controller${request.body}`);
        let id=request.session.user._id;
        console.log(`id`);
        User.findOne({_id:id},(error,user)=>{
            console.log(user.name);
            let poll= new Poll({question:request.body.question,option1:{text:request.body.option1,vote:0},option2:{text:request.body.option2,vote:0},option3:{text:request.body.option3,vote:0},option4:{text:request.body.option4,vote:0}});
            poll._post=user._id;
            console.log(`poll${poll}`);
            
            poll.save((error)=>{
                user.polls.push(poll);
                user.save((error)=>{
                    let result={error:true};
                    if(error){
                        console.log("poll create went wrong");
                        result.error=true;
                    }
                    return response.json(result);
                })
                
            })
        })
    },
    getpolls:(request,response)=>{
        console.log(`controller`);
        Poll.find({}).populate("_post").exec((error,polls)=>{
            // console.log(`polls ${polls[0]._post}`)
            let result={error:false,polls:null};
            if(error){
                result.error=true;
            }
            else{
                result.polls=polls;
            };
            return response.json(result);
        })
    },
    getpoll:(request,response)=>{
        console.log(`controller${request.params.id}`);
        Poll.findOne({_id:request.params.id},(error,poll)=>{
            // console.log(`polls ${polls[0]._post}`)
            
            let result={error:false,poll:null};
            if(error){
                result.error=true;
            }
            else{
                result.poll=poll;
            };
            console.log(result)
            return response.json(result);
        })
    },
    vote:(request,response)=>{
        console.log(`controller${request.body}`);
        let poll=request.body;
        Poll.update({_id:poll._id},poll,(error)=>{
            let result={error:false};
            if(error){
                result.error=true;
            }
            return response.json(result);
        })
    },
    delete:(request,response)=>{
        console.log(`controller${request.params.id}`);
        Poll.remove({_id:request.params.id},(error)=>{
            if(error){
                console.log("remove went wrong")
            }
            else{
                let id=request.session.user._id;
                User.findOne({_id:id},(error,user)=>{
                    console.log(user);
                    let result={error:false};
                    if(error){
                        result.error=true;
                    }
                    else{
                        for(let indx=0;indx<user.polls.length;indx++){
                            if(user.polls[indx]==request.params.id){
    
                                user.polls[indx]=user.polls[user.polls.length-1];
                                user.polls.pop();
    
                            }
                        }
                    }
                    return response.json(result);
                })
            }
        })
    }
}