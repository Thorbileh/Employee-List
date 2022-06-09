const express = require('express');
const mongoose = require('mongoose');
const app =express();
const cors =require('cors')


PORT=3001;
const RegisterModel = require("./register");
const AddModel = require("./Add");

app.use(express.json());
app.use(cors())

mongoose.connect('mongodb://localhost:27017/Traveler',{
    useNewUrlParser:true,
    useUnifiedtopology:true
});

/* const storage =multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null, "./Client/src/Components/images/Uploads/")
    },
    filename:(req,file,callback) =>{
        callback(null, file.originalname);
    } 
})

const upload =multer({storage:storage});
 */

app.post("/insert"/* ,upload.single("EmployeeImage") */, async(req,res)=>{

    const FirstName =req.body.FirstName
    const Surname =req.body.Surname
    const Email = req.body.Email
    const Gender =req.body.Gender
    const StartDate=req.body.StartDate
    const ContractType = req.body.ContractType
    const Position =req.body.Position
    /* const EmployeeImage=req.File.originalname; */

    const add =new AddModel({FirstName:FirstName,Surname:Surname,Email:Email,Gender:Gender,StartDate:StartDate,ContractType:ContractType,Position:Position,/* EmployeeImage:EmployeeImage */
    })
   
    try {
         await add.save();
        res.send("data sent")
    } catch (err) {
        console.log(err)
        
    }
});
app.post('/Add',async(req,res)=>{

    const FirstName =req.body.FirstName;
    const Surname =req.body.Surname;
    const Email = req.body.Email;
    const Password =req.body.Password;
    
    const register =new RegisterModel({FirstName:FirstName,Surname:Surname,Email:Email,Password:Password })
   
    try {
        await register.save();
        res.send("data sent")
    } catch (err) {
    console.log(err)
        
    }
});  
app.get("/read",async(req,res)=>{
   AddModel.find({},(err,result)=>{
      if(err)
      {
          res.send(err)
      } 
      res.send  (result);
   })
    
}); 
app.get("/view/:id",async(req,res)=>{
    AddModel.findById({_id:req.params.id},(err,result)=>{
       if(err)
       {
           res.send(err)
       } 
       res.send  (result);
    })
     
 }); 
 app.put("/update/:id",async(req,res)=>{
   const newFirstName = req.body.newFirstName;
    const newSurname =req.body.newSurname;
   const newEmail = req.body.newEmail;
 const newGender =req.body.newGender;
    const newStartDate=req.body.newStartDate;
    const newContractType = req.body.newContractType;
    const newPosition =req.body.newPosition; 
    const id = req.body.id;
   
       try {
       const updateEmployee = await AddModel.updateMany({_id:req.params.id},{
        $set:{
        FirstName:newFirstName,
        Surname:newSurname,
        Email:newEmail,
        Gender:newGender,
        StartDate:newStartDate,
        ContractType:newContractType,
        Position:newPosition
        }})
        res.json({updateEmployee, message:"updated"})
    } catch (err) {
        console.log(err);
   }
  }); 
  app.delete("/delete/:id",async(req,res)=>{
    const id =req.params.id;
    await AddModel.findByIdAndRemove(id).exec();
    res.send('deleted')
     
 });
 
app.listen(PORT,()=>{
    console.log('Server running on port '+PORT);
})