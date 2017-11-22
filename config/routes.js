let userscontroller=require("./../controllers/users");
let path=require("path");
let pollscontroller=require("./../controllers/polls");
module.exports=function(app){
    console.log("routes");
    app.post("/adduser",(request,response)=>{
        console.log(`routes${request.body}`);
        userscontroller.create(request,response);
    });
    app.post("/addpoll",(request,response)=>{
        console.log(`routes${request.body}`);
        pollscontroller.create(request,response);
    });
    app.get("/getsession",(request,response)=>{
        console.log(`routes${request.session.user}`);
        userscontroller.session(request,response);
    });
    app.get("/getpolls",(request,response)=>{
        console.log(`routes`);
        pollscontroller.getpolls(request,response);
});
    app.get("/getpoll/:id",(request,response)=>{
        console.log(`routes${request.params.id}`);
        pollscontroller.getpoll(request,response);
    });
    app.get("/delete/:id",(request,response)=>{
        console.log(`routes${request.params.id}`);
        pollscontroller.delete(request,response);
});
    app.post("/vote",(request,response)=>{
        console.log(`routes${request.body}`);
        pollscontroller.vote(request,response);
    });
    app.get("/logout",(request,response)=>{
        console.log(`routesclearsession`);
        userscontroller.logout(request,response);
    });
    app.all("*",(request,response,next)=>{
        response.sendFile(path.resolve("./client/dist/index.html"))
    } );
}