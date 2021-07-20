class Employee{
    employeeName: string;
    constructor(name:string){
        this.employeeName=name;
    }
    greet(){
        console.log(`Good Morning ${this.employeeName}`);
    }
}
let emp1=new Employee("Charu");
console.log(emp1.employeeName);
emp1.greet();
class Manager extends Employee{
    constructor(managerName:string){
        super(managerName);
    }
    delegatework(){
        console.log(`Manager delegating Tasks`);

    }
}
let m1=new Manager('Bruce');
m1.delegatework();
m1.greet();
console.log(m1.employeeName);