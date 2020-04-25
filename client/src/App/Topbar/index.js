import React from 'react';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core';
import Burger from '../../components/Burger';
import Menu from '../../components/Menu';
import { useOnClickOutside } from '../../utils/useOnClickOutside';
import { useHistory, Link } from 'react-router-dom';

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
      color: 'white',
      background: 'black',
      padding: 0,
      '& > .MuiBox-root': {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 0,
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
  const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const node = React.useRef(); 
    const history = useHistory();
    useOnClickOutside(node, () => setOpen(false));
    return (
        <Toolbar className={classes.toolbar}>
            <Box>
            <Box ml={1}>
              <div ref={node} >
                  <Burger open={open} setOpen={setOpen} />
                  <Menu open={open} setOpen={setOpen} />
              </div>
            </Box>
            <Box ml={1}>
            </Box>
            <Box>
                <div>more tool.</div>
            </Box>
            <Box>
              <Box mr={1}>
                  <Link onClick={() => history.push('/profile')}>Profile</Link>
              </Box>
            </Box>
          </Box>
        </Toolbar>
    );
}

export default Topbar;