let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
let copyPassportWithAddress = {...passportWithAddress, address: {...passportWithAddress.address, city :"Bobryisk"}}
console.log(passportWithAddress)
console.log(copyPassportWithAddress)
