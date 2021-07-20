function add(num1: number,num2?: number){
    if(num2){
        console.log(num1+num2);
    }
    else{
        console.log(num1); 
    }
}
add(5,10);