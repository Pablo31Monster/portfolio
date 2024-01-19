import React from 'react';
import Github from './icons/Github.jsx';
import Cv from './icons/Cv.jsx';
import Linkedin from './icons/Linkedin.jsx';

const Header = () => {
    return (
        <header className='w-full flex justify-center' id='inicio'>
            <div className='container h-screen flex justify-center flex-col w-3/5 mx-8'>
                <h1 className='text-7xl font-bold mb-2 text-slate-100 typing-effect'>Pablo Gálvez Ortuño</h1>
                <h2 className='text-2xl font-medium w-full text-slate-400 mb-2'>Estudiante de <span className='text-yellow-200/[.8]'>Ingeniería Informatica</span>, amante de la programación y el desarrollo.</h2>
                <div className='flex text-slate-400'>
                    <a className='mr-4 transition duration-200 hover:text-indigo-700' target="_blank" href='https://github.com/Pablo31Monster'>
                        <Github width="45px" height="45px"/>
                    </a>
                    <a className='mr-4 transition duration-200 hover:text-blue-500' target="_blank" href='https://www.linkedin.com/in/pablogalvezort'>
                        <Linkedin width="45px" height="45px"/>
                    </a>
                    <a className='mr-4 transition duration-200 hover:text-red-400' target="_blank" href="/CV.pdf">
                        <Cv width="45px" height="45px"/>
                    </a>
                </div>
            </div>
            <div className='w-1/4 flex flex-col justify-center align-middle'>
                <img className='mb-4 rounded-full h-auto' src="/imagen.jpg" alt='Pablo Gálvez Ortuño' />
            </div>
        </header>
    )
};

export default Header;