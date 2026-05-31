"use server"

import { dbConnect } from "@/lib/Database";

import bcrypt from "bcryptjs";
 
export const postUser=async(payLoad)=>{
     console.log(payLoad);

     //1.check user exist or not

     const userCollection=await dbConnect("users");

      const isExist=await userCollection.findOne({email:payLoad.email});

      if(isExist){
          return {
                success:false,
                message:"User is already exist"
          }
      }
     //2.create new user
      
          const hashPassword=await bcrypt.hash(payLoad.password,10);
         

      const userDetail={
          ...payLoad,
          created_At:new Date().toISOString(),
          role:"user",
          password:hashPassword
      }
          console.log(userDetail);
     //3.send user data to database

     const result=await userCollection.insertOne(userDetail)

     if(result.acknowledged){
           return{
                 success:true,
                 message:`user data posted ${result.insertedId.toString()}`
           }
     }
}