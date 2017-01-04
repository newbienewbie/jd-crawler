const {fetchDetailImages}=require('../lib/index');
const assert=require('assert');



describe('test index.js',function(){
    it('test #fetchDetailImages',function(){
        const url=`https://item.m.jd.com/ware/detail.json?wareId=891247`;
        return fetchDetailImages(url)
            .then(info=>{
                console.log(info);
            })
    });
});


