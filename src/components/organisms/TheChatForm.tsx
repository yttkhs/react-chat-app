import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {UserData} from "../../classes/UserData";
import {ChatData} from "../../classes/ChatData";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {TextField, Button} from "@material-ui/core";
import {Send} from "@material-ui/icons";
import {ChatDataProperties, RootState, UserDataProperties} from "../../types";

type Props = {
  roomId: string,
  chatData: ChatDataProperties
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      padding: theme.spacing(2),
      backgroundColor: "white"
    },
    textarea: {
      margin: 0
    },
    button: {
      marginLeft: theme.spacing(1)
    }
  })
)

const TheChatForm: React.FC<Props> = ({roomId, chatData}) => {
  const classes = useStyles()
  const userData = useSelector<RootState, UserDataProperties>(({userData}) => userData)
  const [text, setText] = useState<string>("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const firstAuthor = chatData.authors.firstAuthor
    const secondAuthor = chatData.authors.secondAuthor

    const createLastChatLogData = (user: string) => ({
      [`friend.${user}.lastChatLog`]: {
        timestamp: Date.now(),
        text: text,
        author: userData.userId
      }
    })

    new UserData(firstAuthor).updateUserData(createLastChatLogData(secondAuthor))
    new UserData(secondAuthor).updateUserData(createLastChatLogData(firstAuthor))
    new ChatData(roomId).addChatLog(text, userData.userId)

    setText("")
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()

    setText(event.target.value)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={classes.root}
      autoComplete="off"
      noValidate
    >
      <TextField
        onChange={handleChange}
        className={classes.textarea}
        value={text}
        margin="dense"
        variant="outlined"
        fullWidth
      />
      <Button
        className={classes.button}
        endIcon={<Send />}
        variant="contained"
        color="primary"
        type="submit"
      >
        SEND
      </Button>
    </form>
  );
};

export default TheChatForm;
