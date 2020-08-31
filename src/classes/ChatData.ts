import firebase from '../lib/firebase'
import {ChatDataAuthorsProperties, ChatDataLog, ChatDataProperties} from '../types'

export class ChatData {
  constructor(readonly roomId: string) {
  }

  createChatData(firstAuthor: string, secondAuthor: string) {
    const authorsData: ChatDataAuthorsProperties = {
      firstAuthor: firstAuthor,
      secondAuthor: secondAuthor
    }

    firebase.database()
      .ref('chat/' + this.roomId + '/authors/')
      .set(authorsData)
      .catch(e => console.log(e))
  }

  fetchLastChatLog() {
    return firebase.database()
      .ref('chat/' + this.roomId)
      .once('value')
      .then((snapshot) => {
        const value: ChatDataProperties | undefined = snapshot.val()
        return value?.log
          ? Object.entries(value.log).map(value => value[1]).slice(-1)[0]
          : undefined;
      })
  }

  addChatLog(text: string, author: string) {
    const randomKey = firebase.database().ref().child('chat').push().key!;

    const logData: ChatDataLog = {
      [randomKey]: {
        timestamp: Date.now(),
        text: text,
        author: author
      }
    }

    firebase.database()
      .ref('chat/' + this.roomId + '/log/')
      .update(logData)
      .catch(e => console.log(e))
  }
}
