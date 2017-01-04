const path=require('path');
var fs = require('fs');
require('./lib/console.js');
const {retrieveDataSource,construct,fetchAll}=require('./lib');


const sqlFile=fs.createWriteStream(__dirname + '/sql.txt', {flags : 'w'});;
retrieveDataSource()
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
    });
