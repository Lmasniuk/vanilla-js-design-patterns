/*
Factory Pattern

Purpose: 

"We can use factory functions in order to create new objects. A function is a factory function when it returns a new object without the use of the new keyword!""


Pros
- The factory pattern is useful when we have to create multiple smaller objects that share the same properties. A factory function can easily return a custom object depending on the current environment, or user-specific configuration.

Cons
- In JavaScript, the factory pattern isn’t much more than a function that returns an object without using the new keyword. ES6 arrow functions allow us to create small factory functions that implicitly return an object each time.



Notes:
- Different than classes because it doesn't use the new keyword.
- Different than classes because it doesn't set up a prototype chain. (inheritance is done manually)
- Less efficient than classes because methods are redefined for every instance unless reused explicitly.
- Factory functions allow you to dynamically assemble objects with different structures at runtime, which may not be as straightforward with classes.
- More functional way of doing things
*/

const createUser = ({ firstName, lastName, email }) => ({
    firstName,
    lastName,
    email,
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
});

const user1 = createUser({
    firstName: "John",
    lastName: "Doe",
    email: "john@doe.com",
});

const user2 = createUser({
    firstName: "Jane",
    lastName: "Doe",
    email: "jane@doe.com",
});

console.log(user1);
console.log(user2.fullName());

const createObjectFromArray = ([key, value]) => ({
    [key]: value,
});

// "With the factory pattern, we can easily create new objects that contain the custom keys and values!"
createObjectFromArray(["name", "John"]);
