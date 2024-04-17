function fetchPromise() {
    return new Promise((res, rej)=>{
        setTimeout(()=>res('peanut butter'), 1000);
    });
}

module.exports = fetchPromise;