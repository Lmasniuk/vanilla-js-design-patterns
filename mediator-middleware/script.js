/*
Purpose:
The mediator pattern makes it possible for components to interact with each other through a central point: the mediator.


Pros
- 

Cons
- 


Notes:
- Used in express when we use middleware. Mediators are middleware and vice versa

*/

class ChatRoom {
    logMessage(user, message) {
        const sender = user.getName();
        console.log(`${new Date().toLocaleString()} [${sender}]: ${message}`);
    }
}

class User {
    constructor(name, chatroom) {
        this.name = name;
        this.chatroom = chatroom;
    }

    getName() {
        return this.name;
    }

    send(message) {
        this.chatroom.logMessage(this, message);
    }
}

const chatroom = new ChatRoom();

const user1 = new User("John Doe", chatroom);
const user2 = new User("Jane Doe", chatroom);

user1.send("Hi there!");
user2.send("Hey!");
