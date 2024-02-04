"use client";

import React from 'react'
import { motion } from 'framer-motion';
import Image from "next/image";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';

function HeroContent() {
  return (
    <motion.div id='about-me' initial='hidden' animate='visible' className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'>
      <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
        <motion.div className='Welcome-box py-[8px] px-[7px] border border-[#42e3f88b] opacity-[0.9]' variants={slideInFromTop}>
          <SparklesIcon className='text-[#9be8ff] mr-[10px] h-5 w-5' />
          <h1 className='Welcome-text text-[13px] font-semibold'>Desenvolvedor FullStack</h1>
        </motion.div>

        <motion.div variants={slideInFromLeft(0.5)} className='flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto'>
          Oi,👋🏽
          <span className='text-white'>Eu sou o Gabriel</span>
        </motion.div>

        <motion.p variants={slideInFromLeft(0.8)} className='text-lg text-gray-400 my-5 max-w-[600px]'>
          Estou em busca de uma oportunidade no universo do Front-end, onde posso aprimorar minhas habilidades e
          conhecimentos tanto em desenvolvimento quanto em desing. Possuo uma sólida experiência em ambas as áreas
          e estou ansioso para contribuir de forma significativa em um novo desafio.
        </motion.p>
      </div>

      <motion.div variants={slideInFromRight(0.8)} className='w-full h-full flex justify-center items-center'>
        <Image src='/mainIconsdark.svg' alt='work icons' width={650} height={650} />
      </motion.div>
    </motion.div>
  )
}

export default HeroContent