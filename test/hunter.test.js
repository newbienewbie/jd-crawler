const {hunt}=require('../lib/hunter');
const assert=require('assert');



describe('test hunter.js',function(){

    it('test #hunt()',function(){
        const url=`https://item.m.jd.com/ware/detail.json?wareId=891247`;
        return hunt(url)
            .then(info=>{
                const s=`<table width="640" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td><img src="http://img14.360buyimg.com/cms/jfs/t2299/57/1531383843/160705/143178f0/56c6e201N351ef906.jpg" width="640" height="476" border="0" alt="" /></td></tr></tbody></table><img src="http://img10.360buyimg.com/imgzone/jfs/t1288/164/1233326696/53370/4791e819/55f8e296N2403152c.jpg" /><img src="http://img10.360buyimg.com/imgzone/jfs/t1339/325/1308506478/23599/5c9f62bf/55f8e296N977070b0.jpg" /><img src="http://img10.360buyimg.com/imgzone/jfs/t1807/141/1551334405/15457/6bca7a85/55f8e296N7b109c80.jpg" />`;
                assert.equal(info.wdis,s,"返回的理应相等");
            });
    });

    it('test #hunt()',function(){
        const url=`https://item.m.jd.com/ware/detail.json?wareId=544747`;
        return hunt(url)
            .then(info=>{
                const s=`<table id="__01" width="620" height="2874" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td><img src="http://img20.360buyimg.com/vc/jfs/t2305/34/65205889/93875/45cc3b4d/55ebdc77N94df3de0.jpg" width="620" height="434" alt="" /></td></tr><tr><td><img src="http://img20.360buyimg.com/vc/jfs/t2236/72/64323053/28178/c4ae5d0b/55ebdc77N9de45b10.jpg" width="620" height="163" alt="" /></td></tr><tr><td><img src="http://img20.360buyimg.com/vc/jfs/t2443/185/57622315/8197/62b0cd9b/55ebb664N0cd6c989.jpg" width="620" height="37" alt="" /></td></tr><tr><td><img src="http://img20.360buyimg.com/vc/jfs/t1714/317/1445503358/76550/1a55bc4f/55ebc3acNb39435b1.jpg" width="620" height="274" alt="" /></td></tr><tr><td><img src="http://img20.360buyimg.com/vc/jfs/t2428/186/71941983/8567/9d1a43d4/55ebb665N92f58301.jpg" width="620" height="43" alt="" /></td></tr><tr><td><img src="http://img20.360buyimg.com/vc/jfs/t2296/311/1933029234/161760/e474b90d/56e77158Nbb14186d.jpg" width="620" height="305" alt="" /></td></tr><tr><td><img src="http://img20.360buyimg.com/vc/jfs/t2479/38/74611795/82768/c2c68692/55ebdc78N8102c629.jpg" width="620" height="484" alt="" /></td></tr><tr><td><img src="http://img20.360buyimg.com/vc/jfs/t2272/187/59696412/9214/5d556bf5/55ebb666N8cf2b0cc.jpg" width="620" height="55" alt="" /></td></tr><tr><td><img src="http://img20.360buyimg.com/vc/jfs/t2368/329/62933901/189524/8cf27677/55ebdc78N62986f1c.jpg" width="620" height="481" alt="" /></td></tr><tr><td><img src="http://img20.360buyimg.com/vc/jfs/t1933/187/69800479/11138/76b347d7/55ebb667N209f1a29.jpg" width="620" height="54" alt="" /></td></tr><tr><td><img src="http://img20.360buyimg.com/vc/jfs/t2314/191/62166384/95426/63e82c6e/55ebb66fN06ca34e2.jpg" width="620" height="299" alt="" /></td></tr><tr><td><img src="http://img20.360buyimg.com/vc/jfs/t2428/193/62570311/51366/3a065537/55ebb66fNb84f9fbb.jpg" width="620" height="245" alt="" /></td></tr></tbody></table>`;
                assert.equal(info.wdis,s,"返回的理应相等");
                console.log(info.images);
            });
    });
});

