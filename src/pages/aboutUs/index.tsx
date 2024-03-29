import React, { useState, useEffect } from "react";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Earth from "../../components/earth/Earth";
import EarthMobile from "../../components/earthMobile/EarthMobile";
import { useNavigate } from 'react-router-dom';


const AboutDashPage: React.FC = () => {

    const [isMobile, setIsMobile] = useState(false);
    const [enterEarth, setEnterEarth] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        setEnterEarth(true);
        setIsMobile(false)
        document.body.style.overflowX = "hidden";
        return () => { document.body.style.overflow = "auto" };
    }, []);

    return (
        <div className="w-full">
            <div className="w-full h-[100vh] bg-[#10213f] bg-introearn-starsstart bg-contain bg-left bg-no-repeat overflow-hidden">
                {!isMobile && (<div className="md:h-[35vh]"></div>)}
                <div className="relative flex justify-start ml-[8%] md:ml-[15%] md:text-[250px] md:leading-[298px] md:font-[600]">
                    {!isMobile && (
                        <CSSTransition
                            in={enterEarth}
                            timeout={1000}
                            classNames={{
                                enter: "top-[-350px] right-[-250px]",
                                enterActive: "top-[0px] right-[350px] ds-5",
                                enterDone: "top-[0px] right-[50px] ds-20"
                            }}
                        >
                            <Earth className="absolute transition-all d-1" />
                        </CSSTransition>
                    )}
                    <TransitionGroup>
                        {isMobile && (
                            <CSSTransition
                                in={enterEarth}
                                timeout={1000}
                                classNames={{
                                    enter: "top-[000px] right-[-10vw] scale-[0.3] duaration-[1000ms]",
                                    enterActive: "top-[000px] right-[-5vw] scale-[0.5] duration-[1000ms]",
                                    enterDone: "top-[000px] right-[-25vw] scale-[1.5] duration-[3000ms]"
                                }}
                            >
                                <EarthMobile className="absolute scale-[0.3] right-[-10vw] top-[35vh] transition-all duration-[1000ms]" />
                            </CSSTransition>
                        )}
                    </TransitionGroup>
                    {!isMobile && (
                        <CSSTransition
                            in={enterEarth}
                            timeout={1000}
                            classNames={{
                                enter: "md:text-[24px] md:leading-[29px]",
                                enterActive: "md:text-[24px] md:leading-[29px] ds-5",
                                enterDone: "md:text-[250px] md:leading-[280px] d-1",
                            }}
                        >
                            <span className="text-transparent text-[52px] md:text-[24px] leading-[76px] md:leading-[29px] font-[600] md:bg-introearn-title-gradient md:bg-clip-text transition-all">SOTRU</span>
                        </CSSTransition>
                    )}

                    <TransitionGroup>
                        {isMobile && (
                            <CSSTransition
                                in={enterEarth}
                                timeout={1000}
                                classNames={{
                                    enter: "text-[4px] md:leading-[29px]",
                                    enterActive: "text-[24px] md:leading-[29px]",
                                    enterDone: "text-[60px] top-[45vh] md:leading-[280px]",
                                }}
                            >
                                <span className="relative text-white text-[4px] top-[10vh] leading-[76px] md:leading-[29px] font-[600] md:bg-introearn-title-gradient md:bg-clip-text transition-all duration-[2000ms]">SOTRU</span>
                            </CSSTransition>
                        )}
                    </TransitionGroup>
                </div>
                {!isMobile && (
                    <div
                        className="absolute left-[18%] top-[calc(35vh+290px)] opacity-0 w-[128px] md:w-[200px] h-[54px] md:h-[61px] flex items-center justify-center text-[#FFF] text-[20px] md:text-[30px] leading-[24px] md:leading-[36px] font-[600] md:font-[500] border-[1px] border-[#FFF] cursor-pointer md:animate-display1"
                        onClick={() => navigate('/about/intro')}
                    >
                        ABOUT
                        <div className="bg-introearn-down-arrow bg-cover bg-center md:w-[44.17px] md:h-[44.17px] md:ml-[10px]"></div>
                    </div>
                )}
                {isMobile && (
                    <div
                        className="absolute left-[11%] top-[57vh] opacity-0 w-[128px] md:w-[200px] h-[54px] md:h-[61px] flex items-center justify-center text-[#FFF] text-[20px] md:text-[30px] leading-[24px] md:leading-[36px] font-[600] md:font-[500] border-[1px] border-[#FFF] cursor-pointer animate-display1"
                        onClick={() => navigate('/about/intro')}
                    >
                        ABOUT
                        <div className="bg-introearn-down-arrow bg-cover bg-center md:w-[44.17px] md:h-[44.17px] md:ml-[10px]"></div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AboutDashPage;
