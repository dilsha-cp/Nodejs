function mymiddleware(req,res,next){
    console.log('custom midware')
    next()
}
module.exports=mymiddleware
