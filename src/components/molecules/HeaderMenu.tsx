import React from 'react';
import {useSelector} from "react-redux";
import {Link} from 'react-router-dom'
import ButtonLogout from "../atoms/ButtonLogout";
import {IconButton, Menu, MenuItem} from "@material-ui/core";
import {AccountCircle} from "@material-ui/icons";
import {RootState, UserDataProperties} from "../../types";

const HeaderMenu: React.FC = () => {
  const userData = useSelector<RootState, UserDataProperties>(({userData}) => userData)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
        keepMounted
      >
        <MenuItem component={Link} to={"/profile/" + userData.userId}>PROFILE</MenuItem>
        <ButtonLogout />
      </Menu>
    </div>
  );
};

export default HeaderMenu;
