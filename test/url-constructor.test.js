const assert=require('assert');
const {construct}=require('../lib/url-constructor');


describe('test url constructor',function(){
    it('test #construct',function(){
        const wareUrl=`https://item.m.jd.com/product/10579857774.html`;
        const info=construct(wareUrl);
        assert.equal(info.id,'10579857774','商品ID错误！');
        assert.equal(info.url,`https://item.m.jd.com/ware/detail.json?wareId=10579857774`,'详情地址错误！');
    });
});