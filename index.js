const path=require('path');
var fs = require('fs');
require('./lib/console.js');
const {retrieveDataSource,construct,fetchAll}=require('./lib');


const sqlFile=fs.createWriteStream(__dirname + '/sql.txt', {flags : 'w'});;
const defaultFilePath=path.join(__dirname,"goods.xls")

// 截取Excel第273行~1200行
retrieveDataSource(defaultFilePath,272,1199)
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
