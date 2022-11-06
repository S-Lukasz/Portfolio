import Header from '../components/Header';
import ProjectComponent from '../components/Project';
import Project from '../components/ProjectButton';

export default function Home() {

  const Projects = [
    {
      title: "CYBERBUG",
      desc: "Opis gry jakiejs tam Opis gry jakiejs tamOpis gry jakiejs ",
      desc2: "Opis gry jakiejs tam Opis gry jakiejs tamOpis gry jakiejs tamOpis gry jakiejs tamOpis gry jakiejs tamOpis gry jakiejs tamOpis gry jakiejs tam Opis gry jakiejs Opis",
      icon: "Icons/cyberbug_game_icon.png",
      images: ["Screens/bug_game_screen_1.png", "Screens/bug_game_screen_2.png", "Screens/bug_game_screen_3.png"]
    },
    {
      title: "CRAWLER SOULS",
      desc: "Opis gry ddd jakiejs tam Opis gry jakiejs tamOpis gry jakiejs tamOpis gry jakiejs tamOpiss",
      desc2: "Opis gry ddd jakiejs tam Opis gry jakiejs tamOpis gry jakiejs tamOpis gry jakiejs tamOpis gry jakiejs tamOpis gry jakiejs tamOpis gry jakiejs tam Opis gry ",
      icon: "Icons/crawlersouls_game_icon.png",
      images: ["Screens/game_screen_1.png", "Screens/game_screen_2.png", "Screens/game_screen_3.png"]
    },
    {
      title: "PACMAN 3D",
      desc: "Opis gry jakiejs tam Opis gry2 jakiejs tamOpis gry jakiejs tamOpis gry2 jakiejs tamOpis ",
      desc2: "Opis gry jakiejs tam Opis gry2 jakiejs tamOpis gry jakiejs tamOpis gry2 jakiejs tamOpis gry jakiejs tamOpis gry jakiejs tamOpis gry jakiejs tam Opis gry ",
      icon: "Icons/pacman3D_game_icon.png",
      images: ["Screens/pacman_game_1.PNG", "Screens/pacman_game_2.PNG", "Screens/pacman_game_3.PNG"]
    }

  ];

  return (

    <div className="min-h-screen flex flex-col">

      <Header projects={Projects}></Header>
      
      <div className="grow">

        <div className="w-full before:bg-gradient-to-t before:from-customBgColor/75 before:via-transparent before:to-customBgColor/75 relative before:absolute before:top-0 before:right-0 before:left-0 before:bottom-0"> <img src="/main_background_temp.png" alt='logo'/> </div>

        <div className="flex flex-col items-center gap-14 w-3/4 mx-auto text-4xl text-center my-6 pb-20">

          <div>
            <p className="text-left font-bold text-orange-300 text-5xl mt-4"> ABOUT ME </p>
          </div>

          <div className="flex flex-col items-center gap-2">

            <div className="flex gap-10">
              <img className="h-52" src="/logo_temp.png" alt='icon'/>
              <p className="text-left">
              <span className=" font-bold text-orange-200">Welcome, </span> <br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate autem, voluptate quasi quam animi, 
                exercitationem quod vel placeat earum asperiores nemo quae corporis amet voluptates, beatae aliquid aut eligendi
              </p>
            </div>

            <div className="flex flex-col items-center gap-10 h-52">

              <p className="text-left font-bold text-orange-300 text-5xl mt-4"> SKILLS </p>

              <div className="flex items-center gap-6">
                <img className="w-18 h-18" src="Icons/csharp_icon.png" alt='icon'/>
                <img className="w-18 h-18" src="Icons/unity_icon.png" alt='icon'/>
                <img className="w-18 h-18" src="Icons/git_icon.png" alt='icon'/>
                <img className="w-18 h-18" src="Icons/js_icon.png" alt='icon'/>
                <img className="w-14 h-14" src="Icons/react_icon.png" alt='icon'/>
              </div>

            </div>

            {/* <div className=" w-3/4 pb-20 border-b-2 mx-auto"> </div> */}

          </div>

          <div>
            <p className="text-left font-bold text-orange-300 text-5xl"> PROJECTS </p>
          </div>
          
          { Projects.map((proj, i) => 
            
            <>
              <div id={i.toString()}></div>
              <ProjectComponent index={i} title={proj.title} description={proj.desc} description2={proj.desc2} images={proj.images}/> 
            </>
          
          )}

          {/* <div className=" w-3/4 border-b-2 mx-auto"> </div> */}

          <p className="text-left font-bold text-orange-300 text-5xl"> CONTACT & MEDIA </p>
            
          <div className="flex flex-col gap-4">

            <div className="flex gap-4">
              <img className="w-12 h-12" src="Icons/mail_icon.png" alt='icon'/>
              <div className="text-left font-bold text-3xl">
                <a href="mailto:lukaszsurma73@gmail.com">Lukaszsurma73@gmail.com</a>
              </div>
            </div>

            <div className="flex gap-4">
              <img className="w-12 h-12" src="Icons/github_icon.png" alt='icon'/>
              <div className="text-left font-bold text-3xl">
                <a target="blank" href="https://github.com/S-Lukasz">GitHub</a>
              </div>
            </div>

          </div>

        </div>

      </div>

      <footer className="text-2xl bg-customColor1 text-center p-4 border-t-2 border-slate-600">
        (monke) Footer example text
      </footer>

    </div>
  );
}
