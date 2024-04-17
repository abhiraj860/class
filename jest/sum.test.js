const myFunction = require('./sum');


test('throws on invlid input', ()=>{
    expect(()=>{
        myFunction("3");
    }).toThrow();
})