const axios = require("axios");

const config = {
    URL:"http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice",
    // KEY:"key=f5eef3421c602c6cb7ea224104795888"
}

const instance = axios.create({
    baseURL : config.URL,
    headers : {"Content-Type" : "application/json"}
})

const dailyBoxOfficeList = async (day)=>{
    const boxOffice = await instance.get("/searchDailyBoxOfficeList.json",{
        params : {key:"f5eef3421c602c6cb7ea224104795888",targetDt: `${day}`}
    });
    return boxOffice.data.boxOfficeResult.dailyBoxOfficeList;
}

const start = async ()=>{
    const data = await dailyBoxOfficeList("20220828");
    const info = [];
    for(let i of data){
        const element = {
            "제목" : i.movieNm,
            "매출액": i.salesAcc,
            "관객수": i.audiAcc
            }       
        info.push(element);
        }
    console.log(info) 
    }
start();
// 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20220827'