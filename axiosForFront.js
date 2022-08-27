const axios = require("axios");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const key = "secret"
const IP = "192.168.219.101"
const PORT = "8000"

const instance = axios.create({
    baseURL : `http://${IP}:${PORT}/`,
    headers: {'Content-Type' : 'application/json'}
})

const healthCheck = async ()=>{
    return await instance.get("ping");
}

const signup = async ()=>{
    try{
        return await instance.post("users/signup", {
        name : "leesockwon3",
        username : "foobar6@gmail.com", 
        password : "abcd0000", 
        birth : "1990-01-10", 
        contact : "119-003-555-1234", 
        address : "seoul gangnam"
    })
    }catch(err){
        console.log(err);
    }
}

const login = async ()=>{
    try{
        return await instance.post("users/login", {
            username : "foobar1@gmail.com",
            password : "abcd1111"
        })
    }catch(err){
        console.log(err)
    }
}

const init = async ()=>{
    const check = await healthCheck();
    const userCreate = await signup();
    console.log(check.data.message, userCreate.data.message)
}

const userLogin = async ()=>{
    const llog = await login();
    console.log(llog.data)
    const token = llog.data.token;
    const payLoad = jwt.verify(token, key);
    const {name, username} = payLoad;
    console.log(name, username)
    const data = `username : ${username}, token : ${token}\n`
    fs.appendFileSync('tokenList.txt',data);
}

const doIt =async ()=>{
    // await init();
    await userLogin();
}
doIt();