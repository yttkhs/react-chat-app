import React, {useState, useEffect} from 'react';
import {match} from 'react-router'
import firebase from '../../lib/firebase'
import Loading from '../organisms/Loading';
import TheChatForm from "../organisms/TheChatForm";
import TheChatLogArea from "../organisms/TheChatLogArea";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Divider} from "@material-ui/core";
import {ChatDataProperties, ChatDataLogProperties} from '../../types';

type Props = {
  match: match<{ roomId: string }>
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      height: 'calc(100vh - 64px)'
    },
    talk: {
      flexGrow: 1,
    }
  })
)

const Chat: React.FC<Props> = ({match}) => {
  const roomId = match.params.roomId
  const classes = useStyles()
  const [chatData, setChatData] = useState<ChatDataProperties | undefined>(undefined)
  const [chatLogData, setChatLogData] = useState<ChatDataLogProperties[] | undefined>(undefined)

  useEffect(() => {
    firebase.database()
      .ref('chat/' + roomId)
      .on('value', (snapshot) => {
        const data: ChatDataProperties = snapshot.val()

        setChatData(data)

        if(data.log) {
          const chatLogArray = Object.entries(data.log).map(value => value[1])

          setChatLogData(chatLogArray)
        }
      })

    return (() => {
      // Stop listening for updates to firebase database data
      firebase.database().ref('chat/' + roomId).off()
    })
  }, [roomId])

  return chatData
    ? (
      <div className={classes.root}>
        <TheChatLogArea chatLogData={chatLogData} />
        <Divider />
        <TheChatForm roomId={roomId} chatData={chatData} />
      </div>
    )
    : <Loading />
};

export default Chat;
