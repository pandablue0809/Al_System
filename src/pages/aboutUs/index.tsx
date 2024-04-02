import React, { useState, useEffect, useRef } from "react";

import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import Earth from "../../components/earth/Earth";


const AboutDashPage: React.FC = () => {

    const nodeRef = useRef<HTMLDivElement>(null);
    const nodeRefSpan = useRef<HTMLDivElement>(null);

    const [enterEarth, setEnterEarth] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        setEnterEarth(true);
        document.body.style.overflowX = "hidden";
        return () => { document.body.style.overflow = "auto" };
    }, []);

    return (
        <div className="w-full">
            <div className="w-full h-[100vh] bg-[#10213f] bg-introearn-starsstart bg-contain bg-left bg-no-repeat overflow-hidden">
            <div className="md:h-[35vh]"></div>
                <div className="relative flex justify-start ml-[8%] md:ml-[15%] md:text-[250px] md:leading-[298px] md:font-[600]">
                        <CSSTransition
                            in={enterEarth}
                            nodeRef={nodeRef}
                            timeout={1000}
                            classNames={{
                                enter: "top-[-350px] right-[-250px]",
                                enterActive: "top-[0px] right-[350px] ds-5",
                                enterDone: "top-[0px] right-[50px] ds-20"
                            }}
                        >
                            <div ref={nodeRef} className="absolute transition-all d-1">
                                <Earth/>
                            </div>
                        </CSSTransition>
           
                        <CSSTransition
                            in={enterEarth}
                            nodeRef={nodeRefSpan}
                            timeout={1000}
                            classNames={{
                                enter: "md:text-[24px] md:leading-[29px]",
                                enterActive: "md:text-[24px] md:leading-[29px] ds-5",
                                enterDone: "md:text-[250px] md:leading-[280px] d-1",
                            }}
                        >
                            <div ref={nodeRefSpan}className="text-transparent text-[52px] md:text-[24px] leading-[76px] md:leading-[29px] font-[600] md:bg-introearn-title-gradient md:bg-clip-text transition-all" >
                             SOTRU
                            </div>
                        </CSSTransition>

                </div>
                    <div
                        className="absolute left-[18%] top-[calc(35vh+290px)] opacity-0 w-[128px] md:w-[200px] h-[54px] md:h-[61px] flex items-center justify-center text-[#FFF] text-[20px] md:text-[30px] leading-[24px] md:leading-[36px] font-[600] md:font-[500] border-[1px] border-[#FFF] cursor-pointer md:animate-display1"
                        onClick={() => navigate('/about/intro')}>
                        ABOUT
                        <div className="bg-introearn-down-arrow bg-cover bg-center md:w-[44.17px] md:h-[44.17px] md:ml-[10px]"></div>
                    </div>
            </div>
        </div>
    );
}

export default AboutDashPage;
