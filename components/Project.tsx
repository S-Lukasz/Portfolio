
import { useState } from "react";

export default function ProjectComponent(props: { 
  index : number; 
  title : string; 
  title_detail : string; 
  description : string; 
  description2 : string; 
  images : string[];
}) {

  const [currImgIndex, setIndex] = useState(0);

  function OnButtonClick(add : boolean)
  {
    if(add) setIndex((prev) => prev + 1 > props.images.length - 1 ? 0 : prev + 1)
    else setIndex((prev) => prev - 1 < 0 ? props.images.length - 1 : prev - 1)
  }

  return (
    
    <div className="flex flex-col items-center md:items-baseline gap-4">

      <div className="font-bold text-left text-orange-300 text-4xl"> 
        {props.title}
        <p className="font-semibold text-orange-200 text-2xl">  
          {props.title_detail} 
        </p>
      </div>

      <div className = {(props.index % 2 === 0 ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse") + " flex gap-4"}>

        <div className="w-full h-min relative shadow-black/60 shadow-lg shadow-main overflow-hidden group">

          <img className ="object-contain w-full h-full" src={props.images[currImgIndex]} alt='proj'/>

          <button className="
            w-1/12 h-full p-2 absolute right-0 md:-right-16 top-0 from-black/75 
            bg-gradient-to-l flex items-center md:group-hover:right-0 
            transition-all duration-300 ease-out" onClick={ () => OnButtonClick(true) }>
            <img className="mx-auto w-4" src={"Icons/arrow_button_right.png"} alt='proj'/>
          </button>

          <button className="
            w-1/12 h-full p-2 absolute left-0 md:-left-16 top-0 from-black/75 
            bg-gradient-to-r flex items-center md:group-hover:left-0 
            transition-all duration-300 ease-out" onClick={ () => OnButtonClick(false) }>
            <img className="mx-auto w-4" src={"Icons/arrow_button_left.png"} alt='proj'/>
          </button>
        
        </div>
        
        <div className={(props.index % 2 === 0 ? "md:pl-10" : "md:pr-10") + " flex flex-col text-3xl gap-6 text-center md:text-left w-full"}> 

          <div className="flex grow gap-5 flex-col text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl drop-shadow-sm shadow-black">
             <p>{props.description}</p>
             <p>{props.description2}</p>
          </div>
          
          <div className = {(props.index % 2 === 0 ? "justify-center md:justify-end" : "justify-center md:justify-start") + " flex gap-4"}>
            <button className="shadow-slate-900 shadow-lg shadow-main pb-1 px-4 text-2xl bg-slate-800 text-orange-500 hover:bg-slate-900 hover:text-orange-300"><a href="#">CODE</a></button>
            <button className="shadow-slate-900 shadow-lg shadow-main pb-1 px-4 text-2xl bg-slate-800 text-orange-500 hover:bg-slate-900 hover:text-orange-300"><a href="#">DOWNLOAD</a></button>
          </div>
          
        </div>

      </div>

    </div>
  );
  
}
