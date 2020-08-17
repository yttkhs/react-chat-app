import firebase from '../lib/firebase'

export class ChatData {
  constructor(readonly roomId: string) {
  }

  createChatData() {
    const initData = {
      initial: {
        timestamp: Date.now(),
        text: "Start a chat.",
        author: "none"
      }
    }

    firebase.database()
      .ref('chat/' + this.roomId)
      .set(initData)
      .catch(e => console.log(e))
  }

  addChatLog(text: string, author: string) {
    const randomKey = firebase.database().ref().child('chat').push().key!;

    const updateData = {
      [randomKey]: {
        timestamp: Date.now(),
        text: text,
        author: author
      }
    }

    firebase.database()
      .ref('chat/' + this.roomId)
      .update(updateData)
      .catch(e => console.log(e))
  }
}
