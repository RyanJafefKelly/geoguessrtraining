// Menu.js
import React from 'react';
import { StyledMenu } from './Menu.styled';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';  
import { useHistory } from 'react-router-dom';

const Menu = ({open}) => {
  const history = useHistory();
  return (
    <StyledMenu open={open}>

      {/* roads ... left vs right, miles vs km, road pics */} 
      {/* Australia */}
      <Typography>
        <Link onClick={() => history.push('/roads')}>
          Roads
        </Link>
      </Typography>
    </StyledMenu>
  )
}
export default Menu;