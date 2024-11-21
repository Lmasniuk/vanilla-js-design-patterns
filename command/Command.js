class Command {
    constructor(execute) {
        this.execute = execute;
    }
}

function PlaceOrderCommand(order, id) {
    return new Command((orders) => {
        orders.push(id);
        console.log(`You have successfully ordered ${order} (${id})`);
    });
}

function CancelOrderCommand(id) {
    return new Command((orders) => {
        orders = orders.filter((order) => order.id !== id);
        console.log(`You have canceled your order ${id}`);
    });
}

function TrackOrderCommand(id) {
    return new Command(() =>
        console.log(`Your order ${id} will arrive in 20 minutes.`)
    );
}

export { Command, PlaceOrderCommand, CancelOrderCommand, TrackOrderCommand };
