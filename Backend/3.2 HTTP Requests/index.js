import express from "express";
const app = express();

app.listen(3000, () =>{
    console.log(`You have started a server on port ${3000}`);
})