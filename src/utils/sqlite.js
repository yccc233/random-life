
define([
    'fs',
    'sql.js'
], function (fs, sqlite) {
    const filebuffer = fs.readFileSync('/resources/db/virtualRoles.sqlite3');
    const dbSqlite = new sqlite.Database(filebuffer);
    const columns = [
        'id',
        'name',
        'sex',
        'familyPoint',
        'iqPoint',
        'bodyPoint',
        'luckPoint',
    ];

    function addLine()
});
