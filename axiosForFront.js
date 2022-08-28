const axios = require("axios");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const {logger} = require("./logs/config/winston")
const key = "secret"
const IP = "192.168.219.101"
const PORT = "8000"

const bodyLogin = {
    username : "hello@gmail.com",
    password : "3039398"
}

const bodySignup = {
    // name : "leesockwon3",
    username : "", 
    password : "abcd0000", 
    // birth : "1990-01-10", 
    // contact : "119-003-555-1234", 
    // address : "seoul gangnam"
}

/* ------------------------------------------------------- */

const instance = axios.create({
    baseURL : `http://${IP}:${PORT}/`,
    headers: {'Content-Type' : 'application/json'}
})

const healthCheck = async ()=>{
    return await instance.get("ping");
}

const signup = async ()=>{
    try{
        await instance.post("users/signup", bodySignup)
        logger.lnfo(`POST / signup: ${bodySignup !== undefined}`)

    }catch(err){
        logger.error(`POST / signup: ${err.statusCode}`)
        console.log(err);
    }
}

const login = async ()=>{
    return await instance.post("users/login", {
        username : "hello48@gmail.com",
        password : "abcd0000"
    })
}

const init = async ()=>{
    const check = await healthCheck();
    const userCreate = await signup();
    console.log(check.data.message, userCreate.data.message)
}

const userLogin = async ()=>{
    try{
        const llog = await login();
        const token = llog.data.token;
        const payLoad = jwt.verify(token, key);
        const {name, username} = payLoad;
        const data = `IP & PORT : ${IP}:${PORT}, username : ${username}, token : ${token}`
        return logger.info(`POST / login: ${token !== undefined}, ${data}`)
        
    }catch(err){
        logger.error(`POST / login: 패스워드 입력값=>${err.data}, 헤더=>${err.headers}`)
        throw err
    }
    // fs.appendFileSync('./tokenList.txt',data);
}

const doIt =async ()=>{
    // await init();
    await userLogin();
}
doIt();