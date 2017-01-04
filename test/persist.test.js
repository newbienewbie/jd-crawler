const assert=require('assert');
const fs=require('fs');
const {post,persist}=require('../lib/persist');

describe('test the parser',function(){

    it('test #post()',function(){
        // post('9999999','测试',`<img alt='测试' src='/test'>`)
        //     .then(result=>{
        //         console.log(`服务端返回：`,result);
        //     })
    });
    it('test #persist()',function(){
        const sqlFile=fs.createWriteStream(__dirname + '/sql.txt', {flags : 'w'});;
        persist(sqlFile,'24','测试',`<img src="http://www.qq.com/abc.jpg" />`)
            .then(result=>{
                return persist(sqlFile,'25','ss',`<img src="http://www.qq.com/abc.jpg" />`);
            })
    });
});