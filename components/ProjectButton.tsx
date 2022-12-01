export default function Project(props: { 
  index : number; 
  icon : string; 
}) {

  return (
    
    <a className="cursorHover group border border-gray-400 hover:border-orange-300 rounded-sm px-6 py-2 text-2xl text-orange-500
     shadow-inner shadow-black bg-slate-800 hover:bg-slate-900
     hover:text-orange-300 group flex gap-2 items-center" href={"#"+props.index}>
      <img className=" cursorHover w-4 h-4 md:w-8 md:h-8 grayscale transition duration-300 group-hover:grayscale-0" src={props.icon} alt='icon'/>
    </a>

  );
  
}
