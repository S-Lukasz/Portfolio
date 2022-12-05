import React from "react";
import type { Project } from "../others/types";
import ProjectButton from '../components/ProjectButton';
import { useScrollDirection } from "../hooks/useScrollDirection";

export default function Project(props: { projects : Project[]; }) {
  const { scrollDirection } = useScrollDirection();

  return (
    <div>
        <header className={`
          ${scrollDirection === "up" ? "top-0" : "-top-full"} 
          transition-all duration-100 text-3xl bg-customColor1 border-b-2 border-slate-600 text-center pb-2 pt-4 flex justify-center sticky top-0`}
        >
          <div className="grow"> 
            <span className=" text-center text-orange-300 text-3xl">ŁUKASZ SURMA - PORTFOLIO</span> 
          </div>

          <div className="w-10 h-10"> </div>
        </header>

        <div className={`
          ${scrollDirection === "up" ? "-top-full" : "top-0"} 
          flex transition-all duration-200 text-3xl bg-customColor1 text-center p-4 justify-center fixed border-b-2 border-orange-300 left-0 right-0 z-20`}
        >
          <div className="cursorHover flex grow gap-6 justify-center"> 
              <ProjectButton key={"proj_button_"+99} index={99} icon={"Icons/arrow_button_up.png"}></ProjectButton>

              { props.projects.map((proj, i) => 
                <ProjectButton key={"proj_button_"+i} index={i} icon={proj.icon}></ProjectButton>
              )}

              <ProjectButton key={"proj_button_"+100} index={100} icon={"Icons/arrow_button_down.png"}></ProjectButton>
          </div>

          <div className="md:w-10 md:h-10"> </div>
        </div>
  </div>
  );
}
