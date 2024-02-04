import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxLinkedinLogo,
    RxGlobe
} from "react-icons/rx";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">


                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Links Dos Sites</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxGlobe />
                            <a href="#">
                                <span className="text-[15px] ml-[6px]">Coffee</span>
                            </a>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxGlobe />
                            <a href="#">
                                <span className="text-[15px] ml-[6px]">Lexicorm</span>
                            </a>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxGlobe />
                            <a href="#">
                                <span className="text-[15px] ml-[6px]">LeirbaggrShop</span>
                            </a>
                        </p>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Social Media</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxGithubLogo />
                            <a href="https://github.com/gabrielgr200">
                                <span className="text-[15px] ml-[6px]">Github</span>
                            </a>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxLinkedinLogo />
                            <a href="https://www.linkedin.com/in/gabriel-gomes-bba609179/">
                                <span className="text-[15px] ml-[6px]">Linkedin</span>
                            </a>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxInstagramLogo />
                            <a href="https://www.instagram.com/gabrielgomesrd/">
                                <span className="text-[15px] ml-[6px]">Instagram</span>
                            </a>
                        </p>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Sobre</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <a href="#projects">
                            <span className="text-[15px] ml-[6px]">Meus Projetos</span>
                            </a>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <a href="#skills">
                            <span className="text-[15px] ml-[6px]">Minhas Habilidades</span>
                            </a>
                        </p>
                        <p className="flex flex-row items-center my-[15px]">
                            <span className="text-[15px] ml-[6px]">gabrielgomesblack70@gmail.com</span>
                        </p>
                    </div>
                </div>

                <div className="mt-[20px] text-[15px] text-center">
                    &copy; PortFólio GGr 2024. All rights reserved
                </div>
            </div>
        </div>
    )
}

export default Footer