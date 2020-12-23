const NeDB = require('nedb');
const path = require('path');
const express = require('express');

// db 설정
const db = new NeDB({
    filename: path.join(__dirname, 'note.db'),
    autoload: true
});

// 서버 실행
const app = express();
const portNo = 3000;
app.listen(portNo, () => {
    console.log('Server Is Ready:', `http://localhost:${portNo}`);
})

// API 정의
app.get('/api/getItems', (req, res) =>{
    // 데이터 베이스에 저장된 데이터를 시간 순서로 정렬해서 응답한다
    db.find({}).sort({stime: 1}).exec((err, data) => {
        // error 발생시
        if (err) {
            sendJSON(res, false, {log: [], msg: err});
            return
        }

        console.log(data);
        sendJSON(res, true, {logs: data})
    })
})

app.get('/api/write', (req, res)=> {
    const q = req.query;
    db.insert({
        book: q.book,
        note: q.note,
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
