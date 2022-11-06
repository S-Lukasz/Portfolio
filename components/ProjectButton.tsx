export default function Project(props: { 
  index : number; 
  title : string; 
  icon : string; 
}) {

  return (
    
    <a className="border pb-1 px-4 text-2xl text-orange-500 hover:bg-slate-800 hover:text-orange-300 group flex gap-2 items-center" href={"#"+props.index}>
        <img className="w-6 h-6 opacity-75 group-hover:opacity-100" src={props.icon} alt='icon'/>
        <p>{props.title}</p>
    </a>

  );
  
}
