import React from "react";
import SkillItem from './SkillItem.jsx';
import Html from './icons/Html.jsx';
import Css from './icons/Css.jsx';
import JavaScript from './icons/JavaScript.jsx';
import ReactI from './icons/ReactI.jsx';
import TailwindCSS from './icons/TailwindCSS.jsx';
import Vite from './icons/Vite.jsx';
import NodeJS from './icons/NodeJS.jsx';
import ExpressJS from './icons/ExpressJS.jsx';
import MySQL from './icons/MySQL.jsx';
import Java from './icons/Java.jsx';
import Php from './icons/Php.jsx';
import Git from './icons/Git.jsx';

const About = () => {
    return (
        <div id='sobre-mi' className='w-full mt-24 pt-10 container flex lg:flex-row flex-col lg:items-normal items-center justify-around m-auto'>
            <div className='lg:w-1/2 w-3/4 p-12 m-4 border border-slate-800 bg-slate-950 rounded-xl'>
                <h3 className='text-3xl w-full text-slate-300 pb-1 mb-4 uppercase font-semibold text-center'>Sobre mi</h3>
                <p className='text-slate-400 font-semibold'>Tengo 20 años y todo el mundo me conoce como Gálvez. Estudio el tercer año del grado en la Universidad de Murcia, España. Empecé a programar en una placa Arduino y he ido evolucionando hasta crear mis propios proyectos personales.</p>
                <p className='text-slate-400 font-semibold'></p>
            </div>
            <div className='lg:w-1/2 w-3/4 p-12 m-4 border border-slate-800 bg-slate-950 rounded-xl'>
                <h3 className='text-3xl w-full text-slate-300 pb-1 mb-4 uppercase font-semibold text-center'>Habilidades</h3>
                <div className='grid xl:grid-cols-4 grid-cols-3 gap-4'>
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
    )
};

export default About;