/*
Command Pattern

Purpose: We can use this pattern to decouple the execution of a method on an object

"With the Command Pattern, we can decouple objects that execute a certain task from the object that calls the method."
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
