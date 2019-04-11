require("../src/db/mongoose.js")
const Task = require("../src/models/task")

//5cadfb5252939d284d4d5939
// Task.findByIdAndDelete('5cadfb5252939d284d4d5939').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskAndCount = async(id) =>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})
    return count
}

deleteTaskAndCount('5cae4efb1479142a77d270da').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})