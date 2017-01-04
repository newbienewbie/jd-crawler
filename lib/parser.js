const cheerio=require('cheerio');



function parse(html){
    const $=cheerio(`<div>${html}</div>`);
    const imgs= $.find("img");
    const list=[];
    imgs.each((i,e)=>{
        list.push(cheerio(e).attr('src'));
    });
    return list.map(i=>{
        return `<img src="${i}"/>`;
    });
}


module.exports={parse};