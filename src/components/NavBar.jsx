import React from 'react';

const NavBar = ({ children }) => {
    return (
        <nav className='mt-6 flex justify-center fixed top-0 left-0 right-0'>
            <ul className='container flex justify-center max-w-lg border rounded-full border-slate-700 bg-slate-950'>
                {children}
            </ul>
        </nav>
    );
};

export default NavBar;