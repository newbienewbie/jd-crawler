const hunter=require('./hunter');
const parser=require('./parser');
const {construct}=require('./url-constructor');
const {persist}=require('./persist');
const excelDataSourceParser=require('./excel-data-source-parser');

/**
 * Promise timeout
 */
function timeout(time){
    return new Promise(function(resolve,reject){
        setTimeout(function() {
            resolve();
        }, time);
    });
}

function guessPictureUrl(url){
    const m=url.replace(/http:\/\/m\.360buyimg\.com\/n4/gi,`http://m.360buyimg.com/n1`);
    return m;
}

function fetchDetailImages(url){
    console.log(`[+]即将开始对${url}页面进行抓取`);
    return hunter.hunt(url)
        .then(info=>{
            const list=parser.parse(info.wdis)
            if(list.length<1){
                const array=info.images.map(i=>{
                    return `<img src="${guessPictureUrl(i)}"/>`;
                });
                console.log(array);
                return array;
            }else{
                return list;
            }
        });
}


function fetchAll(list=[],sqlFile,time=3000){
    const item=list.shift();
    if(item){
        return fetchDetailImages(item.detail.url)
        .then(imgs=>{ 
            console.log(`[+]捕获到详情页面：${imgs}\r\n`);
            const html=imgs.join(' ');
            return persist(sqlFile,item.id,item.name,html);
        })
        .then(info=>{
            console.log(`[+]接口传递数据成功`);
            console.log(`[-]即将开始沉睡...${time}\r\n`);
            return timeout(time);
        })
        .then(info=>{
            return fetchAll(list,sqlFile,time);
        });
    }else{
        console.log(`[!]已经无有效列表项，抓取结束`);
    }
}


module.exports={
    fetchDetailImages,
    fetchAll,
    construct,
    guessPictureUrl,
    retrieveDataSource:excelDataSourceParser.parse
};