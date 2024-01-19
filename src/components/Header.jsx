import React from 'react';
import Github from './icons/Github.jsx';
import Cv from './icons/Cv.jsx';
import Linkedin from './icons/Linkedin.jsx';

const Header = () => {
    return (
        <header className='w-full h-svh flex md:flex-row flex-col justify-center items-center relative' id='inicio'>
            <div className='container md:h-screen flex justify-center flex-col md:w-3/5 md:mx-8 md:order-first order-last md:px-0 px-8'>
                <h1 className='xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl md:text-left text-center font-bold mb-2 text-slate-100 md:typing-effect'>Pablo Gálvez Ortuño</h1>
                <h2 className='xl:text-2xl lg:text-xl md:text-lg sm:text-base  md:text-left text-center font-medium w-full text-slate-400 mb-3'>Estudiante de <span className='text-yellow-200/[.8]'>Ingeniería Informatica</span>, amante de la programación y el desarrollo.</h2>
                <div className='flex md:justify-start justify-center text-slate-400'>
                    <a className='md:mr-4 mx-2 transition duration-200 hover:text-indigo-700' target="_blank" href='https://github.com/Pablo31Monster'>
                        <Github width="45px" height="45px" style="md:w-11 w-8 md:h-11 h-8"/>
                    </a>
                    <a className='md:mr-4 mx-2 transition duration-200 hover:text-blue-500' target="_blank" href='https://www.linkedin.com/in/pablogalvezort'>
                        <Linkedin width="45px" height="45px" style="md:w-11 w-8 md:h-11 h-8"/>
                    </a>
                    <a className='md:mr-4 mx-2 transition duration-200 hover:text-red-400' target="_blank" href="/CV.pdf">
                        <Cv width="45px" height="45px" style="md:w-11 w-8 md:h-11 h-8"/>
                    </a>
                </div>
            </div>
            <div className='md:w-1/4 w-3/5 md:mb-0 mb-4 flex flex-col justify-center align-middle'>
                <img className='mb-4 rounded-full h-auto' src="/imagen.jpg" alt='Pablo Gálvez Ortuño' />
            </div>
        </header>
    )
};

export default Header;