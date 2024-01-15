import React from 'react';
import NavBar from './components/NavBar.jsx';
import IconButton from './components/IconButton.jsx';
import NavItem from './components/NavItem.jsx';

const MainPage = () => {
    return (
        <>
            <NavBar id="navbar">
                <NavItem href='' name='Inicio' />
                <NavItem href='' name='Sobre mi' />
                <NavItem href='' name='Proyectos' />
                <NavItem href='' name='Contact' />
            </NavBar>
            <header className='w-full flex justify-center' id='incio'>
                <div className='container h-screen flex justify-center flex-col w-full mx-8'>
                    <h1 className='text-7xl font-bold mb-2 text-slate-100 typing-effect'>Pablo Gálvez Ortuño</h1>
                    <h2 className='text-2xl w-full text-slate-400'>Estudiante de Ingeniería Informatica, amante de la programación y el desarrollo.</h2>
                    <div className='flex mt-4'>
                        <IconButton id="icon-button-1" img_src="" text="GitHub" href="https://github.com/Pablo31Monster" />
                        <IconButton id="icon-button-3" img_src="" text="LinkedIn" href="" />
                        <IconButton id="icon-button-2" img_src="" text="CV" href="" />
                    </div>
                </div>
            </header>
        </>
    );
};

export default MainPage;
