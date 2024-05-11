// Object destructuring

const band = {
    bandName: "Abs",
    famousSong: "ggs",
    year: 1564,
    another: "ops",
};

// const bandName = band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName, famousSong);

// Using destructuring now
// const {bandName, famousSong} = band;
// Stores the value into var1 variable
let {bandName:var1, famousSong:var2, ...restEle} = band;
console.log(var1, var2);
console.log(restEle);