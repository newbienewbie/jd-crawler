
// pattern: https://item.m.jd.com/product/10579857774.html
function construct(wareUrl){
    const regex=/https?:\/\/.*\/(\d{1,100})\.html/;
    const res=regex.exec(wareUrl);
    const id=res[1];
    const url=`https://item.m.jd.com/ware/detail.json?wareId=${id}`;
    return {id,url};
}

module.exports={construct};