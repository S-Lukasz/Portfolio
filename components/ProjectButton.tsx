export default function Project(props: { 
  index : number; 
  icon : string; 
}) {

  return (
    
    <a className="border group rounded-lg py-2 px-4 text-2xl text-orange-500 shadow-inner hover:shadow-black bg-slate-900 hover:bg-slate-800 hover:text-orange-300 group flex gap-2 items-center" href={"#"+props.index}>
      <img className="w-4 h-4 md:w-8 md:h-8 grayscale transition duration-300 group-hover:grayscale-0" src={props.icon} alt='icon'/>
    </a>

  );
  
}
