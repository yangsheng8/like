var thumb = require('../../app/main.js');

describe('thumb传入值是否相等', function(){
    it('#count', function(){
        var result = new thumb(10);
        expect(result.count).to.eql(10);
    });
});