import React from 'react';
import NavBar from './components/NavBar.jsx';
import NavItem from './components/NavItem.jsx';
import SkillItem from './components/SkillItem.jsx';
import Github from './components/icons/Github.jsx';
import Cv from './components/icons/Cv.jsx';
import Linkedin from './components/icons/Linkedin.jsx';

import Html from './components/icons/Html.jsx';
import Css from './components/icons/Css.jsx';
import JavaScript from './components/icons/JavaScriptz.jsx';
import ReactI from './components/icons/ReactI.jsx';
import TailwindCSS from './components/icons/TailwindCSS.jsx';
import Vite from './components/icons/Vite.jsx';
import NodeJS from './components/icons/NodeJS.jsx';
import ExpressJS from './components/icons/ExpressJS.jsx';
import MySQL from './components/icons/MySQL.jsx';
import Java from './components/icons/Java.jsx';
import Php from './components/icons/Php.jsx';
import Git from './components/icons/Git.jsx';


const MainPage = () => {
    return (
        <>
            <NavBar id="navbar">
                <NavItem href='#inicio' name='Inicio' />
                <NavItem href='#proyectos' name='Proyectos' />
                <NavItem href='' name='Contacto' />
                <NavItem href='#sobre-mi' name='Sobre mi' />
            </NavBar>
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
            <main className='w-full justify-center'>
                <div id='sobre-mi' className='w-full mt-24 pt-10 container flex justify-around m-auto'>
                    <div className='w-1/2 p-12 m-4 border border-slate-800 bg-slate-950 rounded-xl'>
                        <h3 className='text-3xl w-full text-slate-300 pb-1 mb-4 uppercase font-medium text-center'>Sobre mi</h3>
                        <p className='text-slate-400 font-semibold'>Tengo 20 años y soy estudiante de 3º en la Universidad de Murcia, España. Me apasiona aprender nuevas tecnologías y emprender nuevos proyectos y estoy desenado unirme a un equipo donde pueda contribuir y crecer profesionalmente.</p>
                    </div>
                    <div className='w-1/2 p-12 m-4 border border-slate-800 bg-slate-950 rounded-xl'>
                        <h3 className='text-3xl w-full text-slate-300 pb-1 mb-4 uppercase font-medium text-center'>Habilidades</h3>
                        <div className='grid grid-cols-4 gap-4'>
                            <SkillItem>
                                <Html width='64px' height='64px' style='m-auto p-1 fill-yellow-200'/>
                            </SkillItem>
                            <SkillItem>
                                <Css width='64px' height='64px' style='m-auto p-1 fill-yellow-200'/>
                            </SkillItem>
                            <SkillItem>
                                <JavaScript width='64px' height='64px' style='m-auto p-1 fill-yellow-200'/>
                            </SkillItem>
                            <SkillItem>
                                <ReactI width='64px' height='64px' style='m-auto p-1 fill-yellow-200'/>
                            </SkillItem>
                            <SkillItem>
                                <Vite width='64px' height='64px' style='m-auto p-1 fill-yellow-200'/>
                            </SkillItem>
                            <SkillItem>
                                <TailwindCSS width='64px' height='64px' style='m-auto p-1 fill-yellow-200'/>
                            </SkillItem>
                            <SkillItem>
                                <NodeJS width='64px' height='64px' style='m-auto p-1 fill-yellow-200'/>
                            </SkillItem>
                            <SkillItem>
                                <ExpressJS width='64px' height='64px' style='m-auto p-1 fill-yellow-200'/>
                            </SkillItem>
                            <SkillItem>
                                <Php width='64px' height='64px' style='m-auto p-1 fill-yellow-200'/>
                            </SkillItem>
                            <SkillItem>
                                <Java width='64px' height='64px' style='m-auto p-1 fill-yellow-200'/>
                            </SkillItem>
                            <SkillItem>
                                <Git width='64px' height='64px' style='m-auto p-1 fill-yellow-200'/>
                            </SkillItem>
                            <SkillItem>
                                <MySQL width='64px' height='64px' style='m-auto p-1 fill-yellow-200'/>
                            </SkillItem>
                        </div>
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
