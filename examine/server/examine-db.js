const mongodb = require('mongodb');  // 映入 mongodb 官方依赖模块   npm install mongodb --save
const MongoClient = mongodb.MongoClient;  // 返回 mongodb 客户端对象
const DB_URL = 'mongodb://localhost:27017';   // mongodb 数据库连接字符串

let examineDB;  // 设置一个 客户端连接 缓存对象
function getExamineDB() {
    return new Promise(function (resolve, reject) {
        if (examineDB) { // 如果缓存对象 有效 直接返回
            resolve(examineDB);
            return;
        }
        MongoClient.connect(DB_URL, { useNewUrlParser: true,  useUnifiedTopology: true }, function (err, client) {  // client 表示连接成功后的客户端对象
            if (err) {
                console.log(err);
                reject(err);
                return;
            }
            console.log('一个连接客户端建立');
            const examineDB = client.db('examine');
            resolve(examineDB);
        });
    });
}

async function getuser(username) {
    const db = await getExamineDB();
    return new Promise(function (resolve, reject) {
        db.collection('user').findOne({username}, function (err, userDoc) {
            if (err) {
                return reject(err)
            }
            resolve(userDoc);
        })
    });
}

async function login(username, password) {
    const db = await getExamineDB();
    return new Promise(function (resolve, reject) {
        db.collection('user').findOne({username, password}, function (err, userDoc) {
            if (err) {
                return reject(err)
            }
            resolve(userDoc);
        })
    });
}

async function register(username, password) {
    const db = await getExamineDB();
    return new Promise(function (resolve, reject) {
        db.collection('user').insertOne({username, password}, function (err, result) {
            if (err) {
                return reject(err);
            }
            resolve({
                ok: !!result.insertedId,
                user_id: result.insertedId
            });
        })
    });
}

module.exports = {
    login, register, getuser
};
