function greeter(person: string | string[]) {
    if (typeof person === 'string') {
        return "Hello, " + person;
    } else {
        return "Hello, " + person.join(' ');
    }
}

let user = ["Jane", "Doe"];
console.log(greeter(user)); //This will now correctly greet with the array elements.
let user2 = "John";
console.log(greeter(user2));//This will also greet the string correctly