const express = require('express');
const fs = require('fs');
const cors = require('cors');
const sql = require('sql.js');

//由根目录下的node触发，路径从根目录起
const fileBuffer = fs.readFileSync('Resources/db/roles.db');

const db = new sql.Database(fileBuffer);

const app = express();

//解决CORS跨域请求
app.use(cors());

app.set('port', 3005);

app.get('/server/sqlite/addline', (req, res) => {
    let query = req.query;
    if (!query) {
        res.end(JSON.stringify({
            code: 1,
            message: 'Missing required parameter'
        }));
        return;
    }

    let sql = `insert into ${query.table} (${query.columns.split('&').join(', ')}) values ('${
        query.line.split('&').join("', '")
    }');`;
    console.log("sql:::", sql)
    const r = db.exec(sql);

    console.log("r:::", r, typeof r)
    if (r && r[0]) {
        console.log("r[0]:::", r[0])
    }

    res.end(JSON.stringify({
        code: 0,
        message: '',
        data: 'no data now'
    }));
});

app.listen(app.get('port'), () => {
    console.log(`start the server at: http://localhost:${app.get('port')}/`);
});

