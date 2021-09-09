const sqlite = require('../src/utils/sqlite');
require('require.js')

function testAddLine() {

    let line = {
        name: "嘿嘿",
        sex: "男",
        familyPoint: 12,
        iqPoint: 10,
        bodyPoint: 15,
        luckPoint: 33
    }

    sqlite.addLine(line);
}

testAddLine();