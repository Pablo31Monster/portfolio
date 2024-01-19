import React from "react";

const NavItem = ({ href, name }) => {
    return (
        <li className='sm:px-4 px-2 sm:my-2 my-1'>
            <a className='md:text-base text-sm text-slate-500 hover:text-slate-100 font-medium transition duration-300' href={href}>{name}</a>
        </li>
    );
};

export default NavItem;