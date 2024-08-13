const http = require("http");
const express = require("express");
const app = express();
// 파일 입출력
const fs = require("fs");
// 크롤링
const axios = require("axios");
const cheerio = require("cheerio");
// axios 한글 깨짐 해결 하는 모듈
const iconv = require("iconv-lite");

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
app.get("/axios_test2", (req, res) => {
  // Promise - 콜백 헬에 빠지는것을 방지(흐름제어) - 메소드체인.then([콜백])
  // Async - 리스트 형식으로 한다. [콜백, 콜백, 콜백 ...]
  let getUrlVal =
    "https://news.naver.com/main/ranking/popularDay.naver?mid=etc&sid1=111";
  axios
    .get(getUrlVal, { responseType: "arraybuffer" })
    .then(async (response) => {
      const htmlContent = response.data;
      let htmlCMD = iconv.decode(htmlContent, "EUC-KR").toString();
      // cheerio를 이용한 DOM셀렉터
      const $ = cheerio.load(htmlCMD);
      //#main_content > div > div._persist > div:nth-child(1) > div:nth-child(4) > div.cluster_body > ul > li:nth-child(1) > div.cluster_thumb > div > a > img
      //   document.querySelector("#wrap > div.rankingnews._popularWelBase._persist > div.rankingnews_box_wrap._popularRanking > div > div:nth-child(1) > ul > li:nth-child(1) > a > img")
      //   let imgData = $("ul > li > div.cluster_thumb > div > a > img");
      let imgData = $("img");
      console.log(imgData.length);
      for (var i = 0; i < imgData.length; i++) {
        let imgUrl = imgData[i].attribs.src;
        //console.log(imgUrl.split('?')[0]);
        let imgDataUrl = imgUrl.split("?")[0];
        //console.log(imgDataUrl);
        axios
          .get(imgDataUrl, { responseType: "arraybuffer" })
          .then((imgRes) => {
            //console.log(imgRes.data);
            fs.writeFile(`./download/${i}.jpg`, imgRes.data, (err, data1) => {
              console.log(`>>> 다운로드 완료 ${i}`);
            });
          });
        await sleep(100);
      }
    });
  res.end();
});

app.get("/axios", (req, res) => {
  // Promise - 콜백 헬에 빠지는것을 방지(흐름제어) - 메소드체인.then([콜백])
  // Async - 리스트 형식으로 한다. [콜백, 콜백, 콜백 ...]
  let getURLVal =
    "https://news.naver.com/main/ranking/popularDay.naver?mid=etc&sid1=111";
  axios.get(getUrlVal, { responseType: "arraybuffer" }).then((response) => {
    const htmlContent = response.data;
    let htmlCMD = iconv.decode(htmlContent, "EUC-KR").toString();
    // cheerio를 이용한 DOM셀렉터
    const $ = cheerio.load(htmlCMD);
    //div.cluster_text > a
    let h1Data = $("div.cluster_body div.cluster_text a").text();
    console.log(h1Data.trim());
  });
  res.end();
});

app.get("/axios", (req, res) => {
  // Promise - 콜백 헬에 빠지는것을 방지(흐름제어) - 메소드체인.then([콜백])
  // Async - 리스트 형식으로 한다. [콜백, 콜백, 콜백 ...]
  let getURLVal =
    "https://news.naver.com/main/ranking/popularDay.naver?mid=etc&sid1=111";
  axios.get(getUrlVal, { responseType: "arraybuffer" }).then((response) => {
    const htmlContent = response.data;
    let htmlCMD = iconv.decode(htmlContent, "EUC-KR").toString();
    // cheerio를 이용한 DOM셀렉터
    const $ = cheerio.load(htmlCMD);
    //div.cluster_text > a
    let h1Data = $("div.cluster_body div.cluster_text a").text();
    console.log(h1Data.trim());
  });
  res.end();
});

app.get("/readFile", (req, res) => {
  // 파일 읽기
  fs.readFile("./package.json", (err, data) => {
    if (err) throw err;
    res.end(data);
    console.log(data);
    console.log(data.toString());
  });
});

const server = http.createServer(app);
server.listen(3000, () => {
  console.log("run on server - http://localhost:3000");
});
