"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/outline';

const SkillText = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center'>
            <motion.div className='Welcome-box py-[8px] px-[7px] border border-[#42e3f88b] opacity-[0.9]' variants={slideInFromTop}>
                <SparklesIcon className='text-[#9be8ff] mr-[10px] h-5 w-5' />
                <h1 className='Welcome-text text-[13px] font-semibold'>Portfólio Feito com Next js</h1>
            </motion.div>

            <motion.div
                variants={slideInFromLeft(0.5)}
                className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
            >
                Minhas Habilidades
            </motion.div>

            <motion.div
                variants={slideInFromRight(0.5)}
                className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
            >
                O que desenvolvi quando estudei no Senac Minas.
            </motion.div>
        </div>
    )
}

export default SkillText