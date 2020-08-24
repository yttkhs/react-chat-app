import React from 'react';
import {Tab, Tabs} from "@material-ui/core";
import {Chat, Person, PersonAdd} from "@material-ui/icons";
import {createStyles, makeStyles} from "@material-ui/core/styles";

type Props = {
  value: number
  changeEvent: (event: React.ChangeEvent<{}>, newValue: number) => void
}

const useStyles = makeStyles(() =>
  createStyles({
    tab: {
      minWidth: 100 / 3 + "%"
    }
  })
)

const SidebarTabs: React.FC<Props> = ({value, changeEvent}) => {
  const classes = useStyles()

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    changeEvent(event, newValue)
  }

  return (
    <Tabs value={value} onChange={handleChange}>
      <Tab
        aria-label="FRIEND LIST"
        icon={<Person />}
        className={classes.tab}
      />
      <Tab
        aria-label="TALK LIST"
        icon={<Chat />}
        className={classes.tab}
      />
      <Tab
        aria-label="ADD FRIEND"
        icon={<PersonAdd />}
        className={classes.tab}
      />
    </Tabs>
  );
};

export default SidebarTabs;
