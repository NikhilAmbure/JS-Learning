// functions inside function

const app = ()=> {
    const myfunc = () => {
        console.log("Hello");
    }
    

    const addtwo = (num1, num2)=> num1+num2;
    
    const mult = (num1, num2)=> num1*num2;

    console.log("App");
    myfunc();
    console.log(addtwo(2, 4));
    console.log(mult(2, 4));
}
app();