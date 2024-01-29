function f2():void {
    console.log("hi there");
}
function f1(f2:()=>void) {
    setTimeout(f2, 1000);
}

f1(f2);
