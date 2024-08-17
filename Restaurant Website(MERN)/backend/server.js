import app from "./app.js";

app.listen(process.env.PORT, ()=>{
    console.log(`SERVER STARTED AT PORT ${process.env.PORT}`);
})
