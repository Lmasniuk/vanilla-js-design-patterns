/*
Command Pattern

Purpose: We can use this pattern to decouple the execution of a method on an object

"With the Command Pattern, we can decouple objects that execute a certain task from the object that calls the method."

Pros
- The command pattern allows us to decouple methods from the object that executes the operation. It gives you more control if you’re dealing with commands that have a certain lifespan, or commands that should be queued and executed at specific times.

Cons
- The use cases for the command pattern are quite limited, and often adds unnecessary boilerplate to an application.
*/

import OrderManager from "./OrderManager.js";
import {
    PlaceOrderCommand,
    TrackOrderCommand,
    CancelOrderCommand,
} from "./Command.js";

const test = new OrderManager();

console.log(test);

const manager = new OrderManager();

manager.execute(new PlaceOrderCommand("Pad Thai", "1234"));
manager.execute(new TrackOrderCommand("1234"));
manager.execute(new CancelOrderCommand("1234"));
