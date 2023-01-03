const express = require('express');

const app = express();
const port = 2002;


app.get('/', (req, res) => {
    res.send("기본")
});

app.get('/home', (req, res) => {
    res.send("홈")
});

app.get('/login', (req, res) => {
    res.send("로그인")
});

app.get('/profile', (req, res) => {
    res.send("프로필")
});

app.listen(port, () =>{
    console.log(port, "서버열림");
});