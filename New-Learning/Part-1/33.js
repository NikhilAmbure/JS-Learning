// lexical scope - in function

// Global scope
const myvar = "Value1";
function myapp() {
    // Lexical environment
    // const myvar = "Value1";

    function myfunc(){
        // const myvar = "Value59";
        console.log("Inside myfunc : ", myvar);
        // This func's lexical environment is myapp() so it checks for the myvar variable there and prints
        const myfunc2 = ()=> {
            console.log("Inside myfunc2 :", myvar);
        }
        myfunc2();
    }


    console.log(myvar);
    myfunc();

}

myapp();