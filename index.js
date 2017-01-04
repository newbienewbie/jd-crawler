const path=require('path');
var fs = require('fs');
require('./lib/console.js');
const {retrieveDataSource,construct,fetchAll}=require('./lib');


const sqlFile=fs.createWriteStream(__dirname + '/sql.txt', {flags : 'w'});;
const defaultFilePath=path.join(__dirname,"goods.xls")


// 截取的范围是[start,end)，zero-based
// 截取Excel第2~2421行(第一行是列名称)
retrieveDataSource(defaultFilePath,1,2422)
    .then(list=> list.map(i=>{
        return {
            id:i.id,
            name:i.name,
            wareUrl:i.wareUrl,
            detail:construct(i.wareUrl)
        };
    }))
    .then(list=>{
        fetchAll(list,sqlFile,4000);
    }).catch(e=>{
        console.log(e);
    });
