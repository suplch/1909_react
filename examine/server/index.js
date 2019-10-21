const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const { login, register, getuser } = require('./examine-db');

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

app.get('/test', function (req, res) {
    res.send({ok: true});
});

app.post('/user/login', async function (req, res) {
    const {username, password} = req.body;
    const user = await login(username, password);
    console.log(user);
    if (user) {
        const token = jwt.sign({ userId: user._id, userName: user.username }, 'shhhhh');
        console.log('token', token);
        res.cookie('token', token);
        res.send({
            status: 10000,
            msg: 'ok',
            data: {
                user: {
                    user_id: user._id,
                    user_name: user.username
                }
            }
        })
    } else {
        res.send({
            status: 10001,
            msg: '用户名密码错误'
        })
    }
});

app.post('/user/register', async function (req, res) {
    const {username, password} = req.body;

    const user = await getuser(username);

    if (user) {
        res.send({
            status: 10002,
            msg: '用户名已经存在'
        });
        return;
    }

    const ret = await register(username, password);

    res.send({
        status: ret.ok ? 10000 : 10001,
        msg: 'ok',
        data: {
            user_id: ret.user_id
        }
    })
});

const port = 8000;
app.listen(port, function (err) {
    if (err){
        return console.error(err);
    }

    console.log(`服务启动 监听 ${port} 端口!`)
});
