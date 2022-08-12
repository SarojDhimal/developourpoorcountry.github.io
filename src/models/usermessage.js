// // /This is the part use in the case of adding mongodb.
//  const mongoose=require("mongoose");
//  const validator=require("validator");
//  const { default: isEmail } = require("validator/lib/isEmail");
//  const userSchema=mongoose.Schema({
//  name:{
     
//      required:true,
//   minlenght:5,



// },
// email:{
    
//     required:true,
//     validate(value){
//         if(!validator.isEmail(value)){
//             throw new Error("Invalid email is ,please enter the another one !")

//        }
//    }
//  },
//  number:{  required:true,  
//          min:10,

//  },
// message:{minlength:5,
    


// }
// ,date:{

//     type:Date,
//    default:Date.now,

// }


// })






const User=mongoose.model("User",userSchema);
 module.exports=User;
