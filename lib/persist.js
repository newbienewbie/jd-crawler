const fetch=require('node-fetch');
const fs = require('fs');
const util = require('util');
const escape = require('escape-html');


const URL=`http://7day.lecanhui.com.cn/back_admin.php/home/testdata/save_goods_details`;
function post(id,name,details){
    console.log(`[+]即将开始向后端传递数据,id：${id}，name：${name}，detail：${details}`);
    const payload=`id=${id}&name=${name}&details=${JSON.stringify(details)}`;
    return fetch(URL,{
        method:'POST',
        body:payload, 
    }).then(resp=>{
        console.log(resp);
        return resp.json() 
    });
}



function persist(sqlfile,id,name,details){
    const d=`UPDATE \`day_goods_admin\` SET content='${escape(details)}' where id=${id};\r\n`;
    return new Promise((resolve,reject)=>{
        sqlfile.write(util.format(d) + '\n');
        resolve();
    });
}



module.exports={post,persist};