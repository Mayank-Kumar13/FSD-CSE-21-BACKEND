const everntemit=require("events");
const event=new everntemit();
event.on("greet",()=>{
    console.log("this is event emit")
})
event.emit("greet")
