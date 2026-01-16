import React from 'react';
import { NavLink } from 'react-router';

const DashMenu = ({label, icon: Icon, to}) => {
    return (
        <li>
            <NavLink
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right hover:bg-primary/10 hover:text-info mt-2"
                to={to}
                data-tip={label}>
                <Icon className='my-1.5 inline-block size-4' />
                <span className="is-drawer-close:hidden">{label}</span>
            </NavLink>
        </li>
    );
};

export default DashMenu;