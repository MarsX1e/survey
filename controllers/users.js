let mongoose=require("mongoose");
let User=mongoose.model("user");
module.exports={
    create:(request,response)=>{
        console.log(`controller${request.body}`);
        User.find(request.body,(error,users)=>{
            let result={error:false,user:null};
            if(error){
                result.error=true;
                console.log("find database causes problem")
            }
            else{
                if(!users.length){
                    User.create(request.body,(error,user)=>{
                        console.log(user);
                        if (error){
                            result.error=true;
                            console.log("create user causes problem")
                        }
                        else{
                            request.session.user=user;
                            request.session.save();
                            console.log(`session${request.session.user}`);
                            result.user=user;
                            console.log(result.user);
                            console.log(result);
                            
                            response.json(result);
                        }
                        
    
                    })
                }
                else{
                    request.session.user=users[0];
                    request.session.save();
                    console.log(`session${request.session.user}`);
                    result.user=users[0];
                    console.log(result.user);
                    console.log(result);
                    
                    response.json(result);
                }
            }
        });
    },
    session:(request,response)=>{
        let result={user:null};
        console.log("controllers");
        if(request.session.user){
            result.user=request.session.user;
        };
        return response.json(result);
    },
    logout:(request,response)=>{
        let result={error:null};
        console.log("controllerslogout");
        request.session.destroy();
        console.log(request.session);
        return response.json(result);
    }
}

