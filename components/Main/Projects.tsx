import React from 'react'
import ProjectsCard from '../Sub/ProjectsCard'

const Projects = () => {
    return (
        <div id='projects' className='flex flex-col items-center justify-center py-20'>
            <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-300 py-20'>
                Meus Projetos
            </h1>
            <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>

                <ProjectsCard
                    src='/ecommerce.png'
                    title='LeirbaggShop'
                    description='Site de ecommerce, esse foi um projeto feito para uma avaliação no Senac Minas, um ecommerce completo e funcional.'
                />

                <ProjectsCard
                    src='/Lexicorm.png'
                    title='Lexicorm Company'
                    description='A lexicorm foi desenvolvida para simplificar a busca por informações sobre medicamentos, tornando-a mais prática e acessível.'
                />

                <ProjectsCard
                    src='/coffee.png'
                    title='Coffee'
                    description='É um site destinado para a venda de cafés, sua interface é simples, porém não deixa de ser um linda nas cores e destalhes.'
                />

            </div>

            <div className='h-full w-full flex flex-col mt-5 md:flex-row gap-10 px-10'>

                <ProjectsCard
                    src='/mentimeter.png'
                    title='Mentimeter'
                    description='Esse é um projeto desenvolvido nas aulas da Rocketseat. Que tem como objetivo permitir que os usuários criem salas e respondem as perguntas.'
                />

                <ProjectsCard
                    src='/portfolio.png'
                    title='Portfólio - Lexicorm'
                    description='Esse é um projeto da Lexicorm, um simples portfolio para contar um pouco sobre a empresa, sobre a equipe de desenvolvimento.'
                />

                <ProjectsCard
                    src='/controllers.png'
                    title='Controllers'
                    description='Uma landing page para venda de controle de video game, projeto feito no figma, um protótipo para fins de estudos.'
                />

            </div>

            <div className='h-full w-full flex flex-col mt-5 md:flex-row gap-10 px-10'>

                <ProjectsCard
                    src='/github.png'
                    title='Clone do Github'
                    description='Esse projeto é um clone do GitHub na sua versão antiga, um projeto feito para aprimorar minhas habilidades no front-end.'
                />

                <ProjectsCard
                    src='/Details 2.png'
                    title='Lebron'
                    description='Uma landing page para vendas dos tênis da Nike, layout inspirado nos estilos da Nike totalmente otimizado para computadores.'
                />

                <ProjectsCard
                    src='/Details 3.png'
                    title='Lebron Witness 8'
                    description='Uma landing page para vendas dos tênis da Nike, layout inspirado nos estilos da Nike totalmente otimizado para computadores.'
                />

            </div>
        </div>
    )
}

export default Projects