const path=require('path');
const xlsx2json=require('xlsx2json');


const defaultFilePath=path.join(__dirname,"..","goods.xls");


/**
 * Promise接口，返回 [{id,name,wareUrl}]
 * 截取的范围是[start,end)，zero-based
 */
function parse(filePath=defaultFilePath,start=1,end=undefined){
    return xlsx2json(filePath).then(list=>list[0])
      .then(list=>list.map(i=>{
          return { 
              id:i.A, name:i.B, wareUrl:i.C          };
      }))
      .then(list=>list.slice(start,end));
}


module.exports={parse};
