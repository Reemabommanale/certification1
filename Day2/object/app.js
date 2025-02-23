//object
// let person = {
//     name:'reema',
//     age:20,
//     favColor:'red',
// }

// //console.log(person);
// //console.log(person.name);
// //console.log(person[1]);
// //console.log(person['age']);

// //change properties in object

// //update
// //person.name = 'rema bommanale';
// //console.log(person);

// //adding new property


// //delete property
// delete person.favColor;
//console.log(person);
let person={
    name:'reema',
    age:20,
    favColor:'red',
    fun:function print(){
        return(`my name is ${this.name} and my age is ${this.age}`);
    },
    newObj:{
        gender:"female",
        address:"ambedkar nagar sadlga",
    }
}
//console.log(person.print());
//console.log(person.fun());
console.log(person.newObj.address);