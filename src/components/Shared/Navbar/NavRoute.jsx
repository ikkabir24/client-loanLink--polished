import React from 'react';

const NavRoute = ({children}) => {
    return (
        <div className='hover:text-info text-lg font-semibold'>
            {children}
        </div>
    );
};

export default NavRoute;