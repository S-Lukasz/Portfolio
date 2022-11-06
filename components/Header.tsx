
import type {Project} from "../others/types";
import Image from 'next/image';
import Link from 'next/link';
import ProjectButton from '../components/ProjectButton';
import { useEffect, useState } from "react";

export default function Project(props: { 
  projects : Project[]; 

}) {

    const logoWidth : number = 40;
    const logoHeight : number = 40;

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
  
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      handleScroll();
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
      
    }, []);

  return (
    
    <div>

        <header className={(scrollY < 100 ? "top-0" : "-top-full" ) + " transition-all duration-100 text-3xl bg-customColor1 text-center p-2 flex justify-center sticky top-0"}>

            <Link href="/">
                <Image src="/logo_temp.png" alt='logo' width={logoWidth} height={logoHeight} />
            </Link>

            <div className="grow"> 
                Hi my name is <span className=" font-bold text-orange-300">Łukasz Surma</span> 
            </div>

            <div className="w-10 h-10"> </div>

        </header>

        <div className={(scrollY < 100 ? "-top-full" : "top-0" ) + " transition-all duration-200 text-3xl bg-customColor1 text-center p-2 flex justify-center fixed border-b-2 z-10 border-slate-600 left-0 right-0"}>

            <Link href="/">
                <Image src="/logo_temp.png" alt='logo' width={logoWidth} height={logoHeight} />
            </Link>

            <div className="flex grow gap-10 justify-center"> 

                { props.projects.map((proj, i) => 
                  <ProjectButton key={"proj_button_"+i} index={i} title={proj.title} icon={proj.icon}></ProjectButton>
                )}

            </div>

            <div className="w-10 h-10"> </div>
        
        </div>

  </div>

  );
  
}
