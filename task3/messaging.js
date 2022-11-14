class Message {
    constructor(author, sendTime, msg) {
      this.author = author;
      this.sendTime = sendTime;
      this.msg = msg;
    }
  
    toHtml() {
      const messageBox = document.getElementById("messageBox");
      const p = document.createElement("p");
      p.innerHTML = `${this.sendTime} ${this.author}: ${this.msg} </b>`;
      messageBox.append(p);
    }
  }
  
  class Messenger {
    constructor() {
      this.messages = [];
    }
  
    show_history() {
        
        console.log(this.messages.shift().toHtml());
      
    }
  
    send(author, text) {
      this.messages.push(new Message(author, this.gettime(), text));
    }
  
    gettime() {
      let now = new Date();
      return `${now.getHours()}:${now.getMinutes()}`;
    }
  }
  
  let messenger = new Messenger();
  const inputName = document.getElementById("inputName");
  const inputMsg = document.getElementById("inputMsg");
  const sendButton = document.getElementById("sendButton");
  
  sendButton.addEventListener("click", () => {
    messenger.send(inputName.value, inputMsg.value);
    messenger.show_history();
    inputMsg.value = "";
  });