import React from "react";

const NavItem = ({ href, name }) => {
    return (
        <li className='px-4 my-2'>
            <a className='text-slate-500 hover:text-slate-100 transition duration-300' href={href}>{name}</a>
        </li>
    );
};

export default NavItem;