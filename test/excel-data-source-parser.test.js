const assert=require('assert');
const excelDataSourceParser=require('../lib/excel-data-source-parser');


describe('test excel data source parser',function(){
    it('test #parse()',function(){
        return excelDataSourceParser.parse()
            .then(list=>{
                assert.ok(list.length&&list.length>1,"数据长度大于1");
                list.forEach(i=>{
                    assert.ok(i.id,"id 不得为空");
                    assert.ok(i.name,"name 不得为空");
                    assert.ok(i.wareUrl,"wareUrl 不得为空");
                });
            });
    });
});