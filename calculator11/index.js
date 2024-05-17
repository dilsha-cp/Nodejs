function add(a,b){
    console.log(a+b)
}
sub=(x,y)=>{
    console.log(x-y)
}
mul=(x,y)=>{
    console.log(x*y)
}
div=(x,y)=>{
    console.log(x/y)
}
module.exports={
    addition:add,
    substraction:sub,
    multiplication:mul,
    division:div
}