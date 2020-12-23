const NeDB = require('nedb');
const path = require('path');
const express = require('express');

// db 접속
const db = new NeDB({
    filename: path.join(__dirname, 'body.db'),
    autoload: true
});

// 서버 실행
const app = express();
const portNo = 3030;
app.listen(portNo, () => {
    console.log('Server Is Ready:', `http://localhost:${portNo}`);
})

// API 정의
// public 디렉터리의 내용을 자동으로 응답
app.use('/public', express.static('./public'))

// 최상위 페이지에 접속하면 /public으로 리다이렉트
app.get('/', (req, res) => {
  res.redirect(302, '/public')
})

app.get('/api/getItems', (req, res) =>{
    // 데이터 베이스에 저장된 데이터를 시간 순서로 정렬해서 응답한다
    db.find({}).sort({stime: 1}).exec((err, data) => {
        // error 발생시
        if (err) {
            sendJSON(res, false, {logs: [], msg: err});
            return
        }

        console.log(data);
        sendJSON(res, true, {logs: data})
    })
})

app.get('/api/write', (req, res)=> {
    const q = req.query;
    db.insert({
        name: q.name,
        body: q.body,
        stime: (new Date()).getTime()
    }, (err, doc) => {
        if (err) {
            console.error(err);
            sendJSON(res, false, {msg: err})
            return
        }
        sendJSON(res, true, {id: doc._id})
    })
}) 

function sendJSON (res, result, obj){
    obj['result'] = result;
    res.json(obj);
}
