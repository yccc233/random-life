const express = require('express');
const fs = require('fs');
const sqlite = require('sql.js');

//由根目录下的node触发，路径从根目录起
const fileBuffer = fs.readFileSync('Resources/db/virtualRoles.sqlite3');

const db = new sqlite.Database(fileBuffer);

const app = express();

app.set('port', (process.env.API_PORT || 3005));

app.post('/server/sqlite/addline', (req, res) => {
    console.log("query", req)

    const param = req.query.q;

    if (!param) {
        res.end(JSON.stringify({
            code: 1,
            message: 'Missing required parameter `q`'
        }));
        return;
    }

    let sql = `insert into ${param.table}(${param.line.join(', ')}) values ('${
        Object.values(line).join("', '")
    }')`;
    console.log("sql", sql)
    // const r = dbSqlite.exec(sql);

    console.log(r)

    res.end(JSON.stringify({
        code: 0,
        message: '',
        data: 'no data now'
    }));
});

app.listen(app.get('port'), () => {
    console.log(`start the server at: http://localhost:${app.get('port')}/`);
});

