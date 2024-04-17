const fetchPromise = require('./sum');


test('this data is peanut butter', ()=>{
    return  expect(fetchPromise()).resolves.toBe('peanut butter');
});

test('the test fails with error', ()=>{
    return expect(fetchPromise().rejects.toThrow('error'));
})