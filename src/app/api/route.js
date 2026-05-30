
 export async function GET(){

     try{
         return Response.json({
                message:"Api is running"
           }) 
     }
    catch(error){
            return Response.json({
               message: error instanceof Error ? error.message : "Something went wrong",
            })
    }  
 }