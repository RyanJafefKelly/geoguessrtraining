// Menu.js
import React from 'react';
import { StyledMenu } from './Menu.styled';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';  
import { useHistory } from 'react-router-dom';

const Menu = ({open, setOpen}) => {
  const history = useHistory();
  return (
    <StyledMenu open={open}>

      {/* roads ... left vs right, miles vs km, road pics */} 
      {/* Australia */}
      <Typography>
        <Link onClick={() => { 
          history.push('/basics'); 
          setOpen(false);
        }}>
          Basics
        </Link>
      </Typography>
      <Typography>
        <Link onClick={() => { 
          setOpen(false);
          history.push('/roads');
        }}>
          Roads
        </Link>
      </Typography>
      <Typography>
        <Link onClick={() => {          
          setOpen(false);
          history.push('/signs');
        }}
        >
          Signs
        </Link>
      </Typography>
      <Typography>
        <Link onClick={() => {
          setOpen(false);        
          history.push('/license-plates');
        }}>
          License Plates
        </Link>
      </Typography>
      <Typography>
        <Link onClick={() => {
          setOpen(false);
          history.push('/languages');
          }}>
          Languages
        </Link>
      </Typography>
      <Typography>
        <Link onClick={() => {
          setOpen(false);
          history.push('/regional-differences')
        }}>
          Regional Differences
        </Link>
      </Typography>
      <Typography>
        <Link onClick={() => { 
          setOpen(false);
          history.push('/miscellaneous');
        }}>
          Miscellaneous
        </Link>
      </Typography>
    </StyledMenu>
  )
}
export default Menu;