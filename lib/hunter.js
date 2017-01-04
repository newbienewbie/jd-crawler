const fetch=require('node-fetch');




function hunt(url){
    return fetch(url)
        .then(info=>info.json())
        .then(info=>{
            const list=info.ware.images.map(i=>{
                return i.newpath;
            })
            return {
                wdis:info.wdis,
                images:list,
            };       
        })
}


module.exports={hunt};