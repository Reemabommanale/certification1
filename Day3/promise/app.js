let promise=new Promise(function(resolve,reject){
    console.log("wait for promise");
    setTimeout(function(){
        let data ="promise is resolved, data is available";
        let err ='promise is rejected, mai paisa nhi dunga';
        resolve(data);
        reject(err);
    },2000)

})

promise.then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
})
// console.log(promise);