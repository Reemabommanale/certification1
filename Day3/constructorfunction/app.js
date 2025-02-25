// function Details(){
//     this.name="reema";
//     this.age=20;
//     this.address="Sadalga"
// }

// let user = new Details();
// console.log(user);

//custom constructor fuction
function Details(nam,umar){
    this.name=nam;
    this.age=umar;
    this.description=function(){
        return (`my name is ${this.name}, my age is ${this.age}`)
    }
   
}

let user = new Details("reema",20);
let user1 = new Details("reena",20);
//console.log(user);
console.log(user.description());
//console.log(user1);
console.log(user1.description());