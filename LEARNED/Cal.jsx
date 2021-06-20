function add(a,b){
    return a+b;
}
function mul(a,b){
    return a*b;
}

function div(a,b){
    var jew= a/b;
    jew = jew.toFixed(2);
    return jew;
}
function sub(a,b){
    return a-b;
}
export {add,mul,div,sub};