
import { useState } from "react";
import { Text } from "./common/Text";

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

      <div className=" text-left text-orange-300 text-3xl"> 
        {props.title}
        <p className=" text-orange-200 text-xl">  
          {props.title_detail} 
        </p>
      </div>

      <div className = {(props.index % 2 === 0 ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse") + " flex gap-4"}>

        <div className="w-full h-min relative shadow-black/60 shadow-lg shadow-main overflow-hidden group">

          <img className ="object-contain w-full h-full" src={props.images[currImgIndex]} alt='proj'/>

          <button className="
            cursorHover w-1/12 h-full p-2 absolute right-0 md:-right-16 top-0 from-black/75 
            bg-gradient-to-l flex items-center md:group-hover:right-0 
            transition-all duration-300 ease-out" onClick={ () => OnButtonClick(true) }>
            <img className="mx-auto w-4" src={"Icons/arrow_button_right.png"} alt='proj'/>
          </button>

          <button className="
            cursorHover w-1/12 h-full p-2 absolute left-0 md:-left-16 top-0 from-black/75 
            bg-gradient-to-r flex items-center md:group-hover:left-0 
            transition-all duration-300 ease-out" onClick={ () => OnButtonClick(false) }>
            <img className="mx-auto w-4" src={"Icons/arrow_button_left.png"} alt='proj'/>
          </button>
        
        </div>
        
        <div className={(props.index % 2 === 0 ? "md:pl-10" : "md:pr-10") + " flex flex-col text-xl gap-6 text-center md:text-left w-full"}> 

          <div className="flex grow gap-5 flex-col text-sm xl:text-sm 2xl:text-xl 3xl:text-2xl drop-shadow-sm shadow-black">
            <Text text={props.description} specialText="HACKYEAH" specialClassName=" text-orange-200 cursorHover" linkName="https://hackyeah.pl/"/>
             <p>{props.description2}</p>
          </div>
          
          <div className = {(props.index % 2 === 0 ? "justify-center md:justify-end" : "justify-center md:justify-start") + " flex gap-4"}>
            <button className="shadow-slate-900 cursorHover shadow-lg shadow-main pt-1 border border-slate-600 hover:border-orange-300 rounded-sm px-8 text-sm bg-slate-800 text-orange-500 hover:bg-slate-900 hover:text-orange-300"><a className="cursorHover" href="#">CODE</a></button>
            <button className="shadow-slate-900 cursorHover shadow-lg shadow-main pt-1 border border-slate-600 hover:border-orange-300 rounded-sm px-8 text-sm bg-slate-800 text-orange-500 hover:bg-slate-900 hover:text-orange-300"><a className="cursorHover" href="#">DOWNLOAD</a></button>
          </div>
          
        </div>

      </div>

    </div>
  );
  
}
