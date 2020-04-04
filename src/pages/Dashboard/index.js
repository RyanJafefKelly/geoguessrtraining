import React from 'react';
import Burger from '../../components/Burger';
import Menu from '../../components/Menu';
import { useOnClickOutside } from '../../utils/useOnClickOutside';

function Dashboard() {
    const [open, setOpen] = React.useState(false);
    const node = React.useRef(); 
    useOnClickOutside(node, () => setOpen(false));
    
    return(
        <>
            <div ref={node}>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
            <div>dashboard</div>
        </>
    )
}

export default Dashboard;