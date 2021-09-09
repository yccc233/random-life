const express = require('express');
const fs = require('fs');
const sqlite = require('./');

const fileBuffer = fs.readFileSync('../public/resources/db/virtualRoles.sqlite3');

const db = new sqlite.Database(fileBuffer);

const app = express();

const columns = [
    'name',
    'sex',
    'familyPoint',
    'iqPoint',
    'bodyPoint',
    'luckPoint',
];

app.set('port', (process.env.API_PORT || 3005));

app.get('/server/sqlite/addline', (req, res) => {
    const param = req.query.q;

    if (!param) {
        res.json({
            error: 'Missing required parameter `q`',
        });
        return;
    }

    let sql = `insert into ${param.table}(${param.line.join(', ')}) values ('${
        Object.values(line).join("', '")
    }')`;
    console.log(sql)
    // const r = dbSqlite.exec(sql);

    console.log(r)

    res.json([]);
});

app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});

