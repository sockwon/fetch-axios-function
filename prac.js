import fetch from "node-fetch"
const token = []
const login = ()=>{
    fetch("http://127.0.0.1:8000/users/login", {
    method : "POST",
    headers: {
        "Content-Type" : "application/json"
    },
    body : JSON.stringify ({
        username : "hello25@gmail.com",
        password : "abcd0000"
    })
})
.then((response)=>response.json())
.then((data)=>token.push(data))
.catch(err=>console.log(err))
}
login();
// fetch("http://127.0.0.1:8000/carts", {
//     headers: {
//         authorization : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbGxvMkBnbWFpbC5jb20iLCJpZCI6MiwiYmlydGgiOiIyMDAwLTA5LTMwVDE1OjAwOjAwLjAwMFoiLCJjb250YWN0IjoiMDEwLTU1NTUtNDQ0NCIsInBvaW50IjoxMDAwMDAwMCwibmFtZSI6ImxlZTIiLCJpYXQiOjE2NjEzODQ1ODh9.x5Muwg15cUZjyBvG7jfnXMH0ZfJM3FuxpuBgfjoVuNo"
//     }
// })
// .then((response)=>response.json())
// .then((data)=>console.log(data));