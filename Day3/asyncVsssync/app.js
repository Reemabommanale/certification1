
//sync

// console.log("first");
// console.log("second");
// console.log("third");

//async
// console.log("first");
// setTimeout(function(){
//     console.log("it will after 2sec");
// },2000)

// setTimeout(function(){
//     console.log("it will after 5sec");
// },4000)
// console.log("third");

// setTimeout(function(){
//     console.log("it will after 2sec");
// },2000)

// setTimeout(function(){
//     console.log("it will after 0sec");
// },0)
// console.log("third");

// setinterval()
// setInterval(function(){
//     console.log("it will run after 2 sec");
//  },2000)

let count=0;
let intervalId=setInterval(function(){
    count++;
    console.log(`my count is: ${count}`);

    if(count==5){
        clearInterval(intervalId);
        console.log('task completed');
    }
},1000)

