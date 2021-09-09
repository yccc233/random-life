const fs = require('fs');
const sqlite = require('sql.js');

const fileBuffer = fs.readFileSync('./db/virtualRoles.sqlite3');
const dbSqlite = new sqlite.Database(fileBuffer);
const dbTable = "roles";
// eslint-disable-next-line
const columns = [
    'name',
    'sex',
    'familyPoint',
    'iqPoint',
    'bodyPoint',
    'luckPoint',
];

export function addLine(line) {
    let sql = `insert into ${dbTable}(${line.join(', ')}) values ('${
        Object.values(line).join("', '")
    }')`;
    console.log(sql)
    const r = dbSqlite.exec(sql);

    console.log(r)
}

