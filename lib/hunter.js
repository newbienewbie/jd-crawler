const fetch=require('node-fetch');




function hunt(url){
    return fetch(url)
        .then(info=>info.json())
        .then(info=>info.wdis)
}


module.exports={hunt};