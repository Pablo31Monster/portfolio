import React from 'react';
import NavBar from './components/NavBar.jsx';
import NavItem from './components/NavItem.jsx';
import GithubSVG from './components/GithubSVG.jsx';
import CvSVG from './components/CvSVG.jsx';
import LinkedinSVG from './components/LinkedinSVG.jsx';
import ImagenPrincipal from './img/imagen.jpg';

const MainPage = () => {
    return (
        <>
            <NavBar id="navbar">
                <NavItem href='#inicio' name='Inicio' />
                <NavItem href='#sobre-mi' name='Sobre mi' />
                <NavItem href='#proyectos' name='Proyectos' />
                <NavItem href='' name='Contacto' />
            </NavBar>
            <header className='w-full flex justify-center' id='inicio'>
                <div className='container h-screen flex justify-center flex-col w-3/5 mx-8'>
                    <h1 className='text-7xl font-bold mb-2 text-slate-100 typing-effect'>Pablo Gálvez Ortuño</h1>
                    <h2 className='text-2xl font-medium w-full text-slate-400 mb-2'>Estudiante de <span className='text-yellow-200/[.8]'>Ingeniería Informatica</span>, amante de la programación y el desarrollo.</h2>
                    <div className='flex text-slate-400'>
                        <a className='mr-4 transition duration-200 hover:text-indigo-700' target="_blank" href='https://github.com/Pablo31Monster'>
                            <GithubSVG width="45px" height="45px"/>
                        </a>
                        <a className='mr-4 transition duration-200 hover:text-blue-500' target="_blank" href='https://www.linkedin.com/in/pablogalvezort'>
                            <LinkedinSVG width="45px" height="45px"/>
                        </a>
                        <a className='mr-4 transition duration-200 hover:text-red-400' target="_blank" href='/src/res/CV.pdf'>
                            <CvSVG width="45px" height="45px"/>
                        </a>
                    </div>
                </div>
                <div className='w-1/4 flex flex-col justify-center align-middle'>
                    <img className='mb-4 rounded-full h-auto' src={ImagenPrincipal} alt='Pablo Gálvez Ortuño' />
                </div>
            </header>
            <main className='w-full justify-center'>
                <div id='sobre-mi' className='w-full mt-24 pt-10 h-[60vh] container flex justify-around m-auto'>


                    <div className='w-1/2 p-12 m-4 border border-slate-700 bg-slate-950 rounded-xl'>
                        <h3 className='text-3xl w-full text-slate-300 pb-1 mb-4 uppercase font-medium text-center'>Sobre mi</h3>
                        <p className='text-slate-400'>Tengo 20 años y soy estudiante 3º de la Universidad de Murcia en el Grado de Ingenieria Informatica. Me apasiona aprender nuevas tecnologías y emprender nuevos proyectos y estoy desenado unirme a un equipo donde pueda contribuir y crecer profesionalmente.</p>
                        <p className='text-slate-400'></p>
                    </div>


                    <div className='w-1/2 p-6 px-24 m-4 border border-slate-700 bg-slate-950 rounded-xl'>
                        <h3 className='text-3xl w-full text-slate-300 pb-1 mb-2 uppercase font-medium text-center'>Habilidades</h3>
                    </div>
                </div>
                <div id='proyectos' className='w-full justify-center'>
                    <div className='h-screen container flex justify-center mx-8'>
                        
                    </div>
                </div>
            </main>
        </>
    );
};

export default MainPage;
