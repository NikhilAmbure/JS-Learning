// function returning function

function my(){
    // function hello() {
    //     return "hello world";
    // }
    // return hello;

    return function(){
        return "hello world";
    }
}

const ans = my();
console.log(ans());
// console.log(ans);