import * as React from 'react';
import { useHistory } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Button } from 'semantic-ui-react';
import { Toolbar } from '@mui/material';

const MenuBar = () =>  {
  let history = useHistory()

  return (
    <Box className="appbar" >
      <AppBar position="relative" color="transparent">
        <Toolbar className="appbar-toolbar">
          <Button basic inverted color='orange' onClick={() => history.push("/")}>Home</Button>
          <Button basic inverted color='orange' onClick={() => history.push("/projects")}>Projects</Button>
          <Button basic inverted color='orange' onClick={() => history.push("/about")}>About</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MenuBar