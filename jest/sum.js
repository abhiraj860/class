
function myFunction(input) {
    if(typeof input !== 'number') {
        throw new Error('Invalid');
    }
}


module.exports = myFunction;