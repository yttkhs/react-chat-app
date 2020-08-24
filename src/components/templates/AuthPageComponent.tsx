import React from 'react';
import TheHeader from "../organisms/TheHeader";
import TheSidebar from "../organisms/TheSidebar";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

type Props = {
  children: any
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap"
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
)

const AuthPageComponent: React.FC<Props> = ({children}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <TheHeader />
      <TheSidebar />
      <main className={classes.content}>
        {children}
      </main>
    </div>
  );
};

export default AuthPageComponent;
