import React from 'react';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      color: theme.palette.primary.main,
      boxShadow:
        '0px 10px 13px -6px rgba(0,0,0,0.05), 0px 20px 31px 3px rgba(0,0,0,0.04), 0px 8px 38px 7px rgba(0,0,0,0.03);',
      '& .MuiIconButton-root': {
        color: theme.palette.text.secondary
      }
    },
    toolbar: {
      color: 'red',
      padding: 0,
      '& > .MuiBox-root': {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 20,
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        '& > .MuiBox-root': {
          display: 'flex',
          alignItems: 'center'
        }
      }
    }
  }));

function Topbar() {
    const classes = useStyles();
    return (
        <Toolbar className={classes.toolbar}>
            <Box>
            <Box ml={1}>
                <div>Toolbar</div>
            </Box>
            <Box>
                <div>more tool.</div>
            </Box>
            <Box>
              <Box mr={1}>
                  <div>more Toolbar</div>
              </Box>
            </Box>
          </Box>
        </Toolbar>
    );
}

export default Topbar;