class Message {
    constructor(sender, time, message) {
        this.sender = sender
        this.time = time;
        this.message = message;
    }
    toString() {
        return this.time + ' ' + this.sender + ': ' + this.message;
    }
}
let messageArray = []
class Messenger {
    send(name, message) {
        const time = new Date()
        const sendTime = time.getHours() + ":" + time.getMinutes();
        const messageToSend = new Message(name, sendTime, message)
        const result = messageToSend.toString()
    
        messageArray.push(result);
    }
    show_history() {
        messageArray.forEach((item) => {
            console.log(item);
        })
    }
}

let messenger = new Messenger();
messenger.send('agha', 'necesen?');
messenger.send('kimse', 'yaxshi sen ?');
messenger.send('agha', 'yaxshiyam chox saghol!');
messenger.show_history();