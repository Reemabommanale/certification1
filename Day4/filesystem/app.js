let fs = require('fs');

//perform CRUD operation

// let data = "hi today's weather is cool";

// task-1 create file and write data into it
//way1
// fs.writeFile('demo.txt',data,{
//     encoding:'utf-8'
// },(err)=>{
//     if(err)throw err;
//     console.log("file is create sucessfully");
// })

// way2
// fs.writeFileSync('demo.txt',data,
//     (err)=>{
//         if(err)throw err;
//         console.log("file is create sucessfully");
// });

// read file
// let fileread = fs.readFileSync('demo.txt');
// console.log(fileread.toString());

// to delete previous data from file
// fs.truncateSync('demo.txt');

// update file
// fs.appendFileSync('demo.txt','\n i hope weather will be same for next day');

// //delete file
// fs.unlinkSync('demo.txt');

fs.writeFileSync('demo.txt',Data,
    (err)=>{
        if(err)throw err;
        console.log("file is created sucessfully");
    
});

// read file
let fileread = fs.readFileSync('demo.txt');
console.log(fileread.toString());



