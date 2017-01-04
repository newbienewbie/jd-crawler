const path=require('path');
const xlsx2json=require('xlsx2json');


const defaultFilePath=path.join(__dirname,"..","goods.xls");


/**
 * Promise接口，返回 [{id,name,wareUrl}]
 */
function parse(filePath=defaultFilePath){
    return xlsx2json(filePath).then(list=>list[0])
      .then(list=>list.map(i=>{
          return { 
              id:i.A, name:i.B, wareUrl:i.C          };
      }))
      .then(list=>list.slice(1));
}


module.exports={parse};
