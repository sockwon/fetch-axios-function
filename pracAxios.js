const axios = require('axios').default;

// 지정된 ID를 가진 유저에 대한 요청
// axios.get('http://127.0.0.1:8000/ping')
//   .then(function (res) {
//     // 성공 핸들링
//     console.log(Object.keys(res), res.data.message);
//   })
//   .catch(function (error) {
//     // 에러 핸들링
//     console.log(error);
//   })
//   .then(function () {
//     // 항상 실행되는 영역
//     console.log("finally")
//   });

// 선택적으로 위의 요청은 다음과 같이 수행될 수 있습니다.
const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/', 
    headers: {'Content-Type' : 'application/json',
     "authorization" : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbGxvNDhAZ21haWwuY29tIiwiaWQiOjUxLCJiaXJ0aCI6IjE5ODktMTItMzFUMTU6MDA6MDAuMDAwWiIsImNvbnRhY3QiOiIwMTAtNTU1NS00NDQ0IiwicG9pbnQiOjEwMDAwMDAwLCJuYW1lIjoia2ZrIiwiaWF0IjoxNjYxNTA3NjIxfQ.NHX7XTJ6JKyVveBu4xY_rMCSEJ3uDrbpKfJOP5HJ2Hk'}
  });

// instance.get('http://127.0.0.1:8000/carts/product/11')
//   .then(function (res) {
//     console.log(Object.keys(res), res.headers, res.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .then(function () {
//     // 항상 실행되는 영역
//     console.log("finally")
//   });  

//   instance.post('http://127.0.0.1:8000/carts/12')
//   .then((res)=>{
//     console.log(res.data)
//   })
//   .catch((err)=>{
//     console.error(err)
//   })
const login = async() =>{
    try{
        return await instance.post('users/login',{
            username : "hello48@gmail.com",
            password: "abcd0000"
  })}catch(err){
    console.log(err);
    }
}

const insertCart = async (productId)=>{
    try{
        return await instance.post(`carts/${productId}`)
    }catch(err){
        console.log(err)
    }
}

const getProduct = async ()=>{
    try{
        return await instance.get(`carts`)
    }catch(err){
        console.log(err);
    }
}

const delCart = async ()=>{
    try{
        return await instance.delete('carts');
    }catch(err){
        console.log(err)
    }
}

Promise.all([insertCart, getProduct(),delCart()])
.then((result)=>{
    result[0](3)
    result[0](4)
    result[0](5)
    console.log(result[1].data)

})

