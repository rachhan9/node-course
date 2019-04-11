const mongoose = require("mongoose")
const validator = require("validator")

const User = mongoose.model('User',{
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type: String,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                 throw new Error('Email invalid')
            }
        }
    },
    age:{
        type:Number,
        default:0,
        validate(value){
            if(value < 0){
                throw new Error('Age must be positive')
            }
        }
    },
    password:{
        type:String,
        required: true,
        minlength:7,
        trim: true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password cannot contain "password"')
            }
        }
    }
})

// const me = new User({
//     name:'Andrew',
//     age: 'hi'
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log(error)
// })

// const me = new User({
//     name:'   Andy    ',
//     email:'MYEMAIL@mEAD.io    ',
//     password:'phone098'
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log(error)
// })


module.exports = User
