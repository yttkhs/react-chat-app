import React from 'react';
import {useSelector} from "react-redux";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {blue, grey} from "@material-ui/core/colors";
import {ChatDataLogProperties, RootState, UserDataProperties} from "../../types";

type Props = {
  chatLogData: ChatDataLogProperties[] | undefined
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
      overflow: "auto"
    },
    self: {
      display: "flex",
      justifyContent: "flex-end",
      marginBottom: theme.spacing(1),
      paddingLeft: theme.spacing(4),
      "& > span": {
        backgroundColor: blue["300"],
        borderRadius: theme.spacing(1),
        padding: theme.spacing(1, 2)
      }
    },
    friend: {
      display: "flex",
      justifyContent: "flex-start",
      marginBottom: theme.spacing(1),
      paddingRight: theme.spacing(4),
      "& > span": {
        backgroundColor: grey["300"],
        borderRadius: theme.spacing(1),
        padding: theme.spacing(1, 2)
      }
    },
  })
)

const TheChatLogArea: React.FC<Props> = ({chatLogData}) => {
  const classes = useStyles()
  const userData = useSelector<RootState, UserDataProperties>(({userData}) => userData)

  return (
    <div className={classes.root}>
      {chatLogData && chatLogData.map((item, index) => (
        <div className={item.author === userData.userId ? classes.self : classes.friend} key={index}>
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default TheChatLogArea;
