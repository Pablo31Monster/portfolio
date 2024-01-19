import React from 'react';
import NavBar from './components/NavBar.jsx';
import NavItem from './components/NavItem.jsx';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';

const MainPage = () => {
    return (
        <>
            <NavBar id="navbar">
                <NavItem href='#inicio' name='Inicio' />
                <NavItem href='#proyectos' name='Proyectos' />
                <NavItem href='#sobre-mi' name='Sobre mi' />
                <NavItem href='#contacto' name='Contacto' />
            </NavBar>
            <Header />
            <main className='w-full justify-center'>
                <About />
                <div id='proyectos' className='w-full justify-center'>
                    <div className='h-screen container flex justify-center'>
                        
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default MainPage;
