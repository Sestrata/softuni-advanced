class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;

        // or: Object.assign(this, {
        //     firstName,
        //     lastName,
        //     age,
        //     email
        // })
    }
    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}
const guy = new Person('John', 'Smith', 30, 'john@smith.com');
console.log(`${guy}`);
