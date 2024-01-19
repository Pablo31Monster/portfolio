import React from 'react';
import Github from './icons/Github.jsx';
import Cv from './icons/Cv.jsx';
import Linkedin from './icons/Linkedin.jsx';

const Footer = () => {
    return (
        <footer className='p-10'>
            <div className='flex justify-between'>
                <div className='flex'>
                    <p className='text-yellow-200 text-sm'>© 2024 Pablo Gálvez Ortuño. Todos los derechos reservados</p>
                </div>
                <div className='flex text-slate-400'>
                    <a className='mr-4 transition duration-200 hover:text-yellow-200' target="_blank" href='https://github.com/Pablo31Monster'>
                            <Github width="32px" height="32px"/>
                    </a>
                    <a className='mr-4 transition duration-200 hover:text-yellow-200' target="_blank" href='https://www.linkedin.com/in/pablogalvezort'>
                        <Linkedin width="32px" height="32px"/>
                    </a>
                    <a className='mr-4 transition duration-200 hover:text-yellow-200' target="_blank" href="/CV.pdf">
                        <Cv width="32px" height="32px"/>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
