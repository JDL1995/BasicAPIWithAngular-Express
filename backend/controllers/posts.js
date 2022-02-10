exports.process = (req,res,next)=>{
    let data=req.body.data;
    
    if(!data){
        res.status(201).json({oldData:'Error no data',newData:'Error: no data'})
    }
    else{
let newData="Processed: "+data;
 res.status(200).json({oldData:data,newData:newData})
    }
   

}