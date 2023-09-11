import axios from 'axios'

const localhost = "https://tourbackend-gwtk.onrender.com"

export const log =async(email,password)=>{

const response =await axios.post(localhost+'/login',{email,password}, {
    headers:{"Content-Type":"application/json"},
    withCredentials:true
  
    })
    if(response){

        console.log(response.status)
        localStorage.setItem("user",response.data)
        console.log(response.status)
        return response.status;
    }
    



}

export const reg =async(name,email,password,mobile)=>{
    console.log(name,email,password,mobile,"enterd in register");
 try{
  const res=  await axios.post(localhost+'/register',{name,email,password,mobile},{
        headers:{"Content-Type":"application/json"},
        withCredentials:true
      
        })
      
       return res.status;
       


 }catch(error){
    console.log(error)
 }

}

export const travels =async(location,checkin,checkout,travellers,user)=>{
    try{
      const travel= await axios.post(localhost+'/travels',{location,checkin,checkout,travellers,user},{
           headers:{"Content-Type":"application/json"},
           withCredentials:true
         

           })

           return  travel.status;
     
   
    }catch(error){
       console.log(error)
       return error.response.status
    }
   
   }


   export const Bookings = async(user)=>{
try{
    const details = await axios.post(localhost+'/book',{user},{
        headers:{"Content-Type":"application/json"},
        withCredentials:true
      

        })
        console.log(details)
         return details;

}catch(err){
    console.error(err)
}
   }