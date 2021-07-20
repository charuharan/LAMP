interface Person{
    firstname:string;
    lastname:string;
}
function fullName(person:Person){
    console.log(`${person.firstname}${person.lastname}`);
}
let p={
    firstname:'Charumathi';
    lastname:'Hariharan';
};
fullName(p);