require("../src/db/mongoose")
const User = require('../src/models/user')

//5cacb76f73245d25fcd136d0

// User.findByIdAndUpdate('5cadf95c7e534527c02b3ca9', {age:1}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age:1})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const updateAgeAndCount= async (id,age) => {
    const user = await User.findByIdAndUpdate(id,{age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('5cadf95c7e534527c02b3ca9',1).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})