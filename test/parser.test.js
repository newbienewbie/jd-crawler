const assert=require('assert');
const parser=require('../lib/parser');

describe('test the parser',function(){

    it('test case',function(){
        const html=`
            <p><br /><img src="http://img30.360buyimg.com/popWareDetail/jfs/t3121/64/3288600128/69316/6b70cfe9/57ee91d5N0a9fde80.jpg" alt="" id="7c58166a9b004b5990d238baa303d929
            " /><br /><img src="http://img30.360buyimg.com/popWareDetail/jfs/t3304/88/3317711145/86029/fa79509b/57ee91d7Neae92889.jpg" alt="" id="a557bed23cab43bfad4a46d47c41ea3c
            " /><br /><img src="http://img30.360buyimg.com/popWareDetail/jfs/t3052/354/3246537768/83078/8e887643/57ee91d8N3b7628f3.jpg" alt="" id="ce8a7f3dbf7048d3a5a25e83af82ebf0
            " /><br /><img src="http://img30.360buyimg.com/popWaterMark/jfs/t3127/222/3300739408/79295/e44f0dfe/57ee91d9N9aec77e0.jpg" alt="" id="94615a4fb6a34985a82ccd1581c52556
            " /><br /><img src="http://img30.360buyimg.com/popWareDetail/jfs/t3109/244/3280249885/49246/dfe635b8/57ee91daNaa175eef.jpg" alt="" id="ef91b5585af74532a4db0cabf94ea336
            " /><br /><img src="http://img30.360buyimg.com/popWaterMark/jfs/t3091/192/3179145827/88807/c89560de/57ee91dcNb6e72deb.jpg" alt="" id="87766d81e25c4d2c9803e5a23f26f0eb
            " /><br /><img src="http://img30.360buyimg.com/popWaterMark/jfs/t3049/327/3279157172/83650/e07678c/57ee91ddN119249be.jpg" alt="" id="4ce31a60785f4f7bbe04eb98309759fc
            " /><br /><img src="http://img30.360buyimg.com/popWareDetail/jfs/t3253/331/3263818983/76349/978556a3/57ee91deNbaf89531.jpg" alt="" id="a48ad5cccc614b158f36c918c6ea639e
            " /><br /><img src="http://img30.360buyimg.com/popWareDetail/jfs/t3217/217/3270608269/64513/f60db73f/57ee91e0Ndcc6e369.jpg" alt="" id="cbe7fe92cd5d4c8f8fdf78f666dc0f94
            " /><br /><img src="http://img30.360buyimg.com/popWareDetail/jfs/t3091/218/3217415307/57429/f485d6b7/57ee91e1N2f1af8a8.jpg" alt="" id="b9151d4cefee45d990bb8e128298f428
            " /><br /><img src="http://img30.360buyimg.com/popWareDetail/jfs/t3118/14/3239554614/54040/ac87ce0/57ee91e1Nab79fd59.jpg" alt="" id="27dd8005838741749a01bd1f663e64ef
            " /><br /><img src="http://img30.360buyimg.com/popWareDetail/jfs/t3202/191/3349879563/56733/1ac7c0fd/57ee91e3N18785b34.jpg" alt="" id="467335065e174c65a22a5ecec3c1aa28
            " /><br /></p>
        `;
        const srcs=parser.parse(html);
        assert.equal(srcs.length,12,"图片列表长度应为12");
        const regexHttp=/http/;
        srcs.forEach(i=>{
            assert.ok(regexHttp.test(i),'必然都含有http');
        });
        const regexImg=/img/;
        srcs.forEach(i=>{
            assert.ok(regexImg.test(i),'必然都含有img');
        });
    });

    
    it('test case',function(){
        const html=`<div>
             <table width="640" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td>
             <img src="http://img14.360buyimg.com/cms/jfs/t2299/57/1531383843/160705/143178f0/56c6e201N351ef906.jpg" width="640" height="476" border="0" alt="" />
             </td></tr></tbody></table>
             <img src="http://img10.360buyimg.com/imgzone/jfs/t1288/164/1233326696/53370/4791e819/55f8e296N2403152c.jpg" />
             <img src="http://img10.360buyimg.com/imgzone/jfs/t1339/325/1308506478/23599/5c9f62bf/55f8e296N977070b0.jpg" /><img src="http://img10.360buyimg.com/imgzone/jfs/t1807/141/1551334405/15457/6bca7a85/55f8e296N7b109c80.jpg" /> 
             </div>
             `;
        const srcs=parser.parse(html);
        assert.equal(srcs.length,4,"图片列表长度应为4");
        const regexHttp=/http/;
        srcs.forEach(i=>{
            assert.ok(regexHttp.test(i),'必然都含有http');
        });
        const regexImg=/img/;
        srcs.forEach(i=>{
            assert.ok(regexImg.test(i),'必然都含有img');
        });
    });
});