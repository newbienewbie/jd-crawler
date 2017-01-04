const {fetchDetailImages,guessPictureUrl}=require('../lib/index');
const assert=require('assert');



describe('test index.js',function(){
    it('test #fetchDetailImages',function(){
        const url=`https://item.m.jd.com/ware/detail.json?wareId=891247`;
        return fetchDetailImages(url)
            .then(info=>{
                console.log(info);
            })
    });

    it('test #guessPictureUrl',function(){
        const s=guessPictureUrl('http://m.360buyimg.com/n4/jfs/t3058/299/2431500058/416377/96c32b2b/57e0bcc7N0da8c59d.jpg!q70.jpg');
        console.log(s);
    });
});


