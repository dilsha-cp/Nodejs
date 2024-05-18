function mymiddleware2(req,res,next){
    console.log("middleware2")
    next()
}
module.exports=mymiddleware2