const doWork = async () =>{
    return 'Andrew'
    
}
doWork().then((result)=>{
    console.log('result',result)
}).catch((e)=>{
    console.log('e',e)
})