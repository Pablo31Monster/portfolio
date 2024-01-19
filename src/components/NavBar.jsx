import React from 'react';

const NavBar = ({ children }) => {
    return (
        <nav className='flex justify-center fixed top-5 left-0 right-0 max-w-[100%]'>
            <ul className='container flex justify-center lg:max-w-lg md:max-w-md sm:max-w-sm max-w-[80%] border rounded-full mx-4 border-slate-800 bg-slate-950'>
                {children}
            </ul>
        </nav>
    );
};

export default NavBar;