import React from 'react';
import Header from '../components/Header';
import ProjectComponent from '../components/Project';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home()
{
  const GalleryImages = ["Screens/bug_game_screen_1.png", "Screens/bug_game_screen_4.png", "Screens/game_screen_2.png", "Screens/game_screen_1.png", "Screens/pacman_game_2.png","Screens/pacman_game_3.png", "Screens/pizza_empire_1.png", "Screens/pizza_empire_4.png", "Screens/survival_3.png", "Screens/survival_4.png", "Screens/gallery_img_no_br_1.png", "Screens/gallery_img_no_br_2.png", "Screens/gallery_img_no_br_3.png", "Screens/gallery_img_no_br_4.png"];

  const Projects = [
    {
      title: "PIZZA EMPIRE",
      title_detail: "2022, Project Suspended",
      desc: "Opis gry jakiejs tam Opis gry jakiejs tamOpis gry jakiejs ",
      desc2: "Opis gry jakiejs tam Opis gry jakiejs tamOpis gry jakiejs tamOpis gry jakiejs tamOpis gry jakiejs tamOpis gry jakiejs tamOpis gry jakiejs tam Opis gry jakiejs Opis",
      icon: "Icons/pizza_icon.png",
      images: ["Screens/pizza_empire_1.png", "Screens/pizza_empire_2.png", "Screens/pizza_empire_3.png", "Screens/pizza_empire_4.png", "Screens/pizza_empire_5.png", "Screens/pizza_empire_6.png"]
    },
    {
      title: "SURVIVAL ISLAND",
      title_detail: "2022, Work in progress",
      desc: "Opis gry jakiejs tam Opis gry jakiejs tamOpis gry jakiejs ",
      desc2: "Opis gry jakiejs tam Opis gry jakiejs tamOpis gry jakiejs tamOpis gry jakiejs tamOpis gry jakiejs tamOpis gry jakiejs tamOpis gry jakiejs tam Opis gry jakiejs Opis",
      icon: "Icons/survival_game_icon.png",
      images: ["Screens/survival_1.png", "Screens/survival_2.png", "Screens/survival_3.png", "Screens/survival_4.png"]
    },
    {
      title: "CYBERBUG",
      title_detail: "2021, Finished",
      desc: "Opis gry jakiejs tam Opis gry jakiejs tamOpis gry jakiejs ",
      desc2: "Opis gry jakiejs tam Opis gry jakiejs tamOpis gry jakiejs tamOpis gry jakiejs tamOpis gry jakiejs tamOpis gry jakiejs tamOpis gry jakiejs tam Opis gry jakiejs Opis",
      icon: "Icons/cyberbug_game_icon.png",
      images: ["Screens/bug_game_screen_1.png", "Screens/bug_game_screen_2.png", "Screens/bug_game_screen_3.png"]
    },
    {
      title: "CRAWLER SOULS",
      title_detail: "2020 - 2021, Paused",
      desc: "Opis gry ddd jakiejs tam Opis gry jakiejs tamOpis gry jakiejs tamOpis gry jakiejs tamOpiss",
      desc2: "Opis gry ddd jakiejs tam Opis gry jakiejs tamOpis gry jakiejs tamOpis gry jakiejs tamOpis gry jakiejs tamOpis gry jakiejs tamOpis gry jakiejs tam Opis gry ",
      icon: "Icons/crawlersouls_game_icon.png",
      images: ["Screens/game_screen_1.png", "Screens/game_screen_2.png", "Screens/game_screen_3.png"]
    },
    {
      title: "PACMAN 3D",
      title_detail: "2021, Finished",
      desc: "Opis gry jakiejs tam Opis gry2 jakiejs tamOpis gry jakiejs tamOpis gry2 jakiejs tamOpis ",
      desc2: "Opis gry jakiejs tam Opis gry2 jakiejs tamOpis gry jakiejs tamOpis gry2 jakiejs tamOpis gry jakiejs tamOpis gry jakiejs tamOpis gry jakiejs tam Opis gry ",
      icon: "Icons/pacman3D_game_icon.png",
      images: ["Screens/pacman_game_1.PNG", "Screens/pacman_game_2.PNG", "Screens/pacman_game_3.PNG", "Screens/pacman_game_4.PNG"]
    }
  ];

  const galleryImages = GalleryImages
    //.reduce((prev : any[], curr) => [...prev, ...curr.images] as string[], [])
    .sort((a, b) => 0.5 - Math.random());

  return (

    <div id="99" className="min-h-screen flex flex-col">

      <Header projects={Projects}></Header>
      
      <div className="grow">

        <div className="w-full before:bg-gradient-to-t before:from-customBgColor/75 before:via-transparent before:to-customBgColor/75 
        relative before:absolute before:top-0 
        before:right-0 before:left-0 before:bottom-0 
        border-b-2 border-slate-600"> 
          <Carousel autoPlay centerMode centerSlidePercentage={100/3} infiniteLoop showThumbs={false} 
          renderArrowPrev={(onClickHandler, hasPrev, label) => (
            <button className="
            w-1/3 flex justify-start absolute p-2 top-0 from-black/75 bottom-0
            bg-gradient-to-r items-center z-10" onClick={ onClickHandler }>
              <div><img className="mx-auto" src={"Icons/arrow_button_left.png"} alt='proj'/></div>
            </button>
          )}
          renderArrowNext={(onClickHandler, hasNext, label) => (
            <button className="
              p-2 absolute justify-end right-0 top-0 from-black/75 bottom-0 w-1/3
              bg-gradient-to-l flex items-center z-10" onClick={ onClickHandler }>
              <div><img className="mx-auto" src={"Icons/arrow_button_right.png"} alt='proj'/></div>
            </button>
          )}
          >
            
            { galleryImages.map((image, index) => 
              <div className="border-r-4 border-r-slate-900 h-full" key={"gallery_image_"+index}>
                <img src={image} />
              </div>
            )}
          </Carousel>
       </div>
        
        
        <div className="flex flex-col items-center gap-14 w-3/4 mx-auto text-4xl text-center my-6 pb-20">

          <div>
            <p className="text-left font-bold text-orange-300 text-5xl mt-4"> ABOUT ME </p>
          </div>

          <div className="flex flex-col items-center gap-2">

            <div className="flex flex-col md:flex-row gap-10 items-end">
              <img className="shadow-black/60 shadow-lg h-48 bg-slate-800" src="/portrait.png" alt='icon'/>
              <p className="text-center md:text-left">
                <span className=" font-bold text-orange-200">WELCOME, </span> <br></br> 
                My name is Łukasz Surma AnD I&apos;'m a Game Developer, programming since the fall of 2018, and it&apos;'s my passion. 
                My latest project on which I was working is called <span className=" font-bold text-orange-200"> PIZZA EMPIRE </span> it was
                created in<span className="font-bold text-orange-200"> UNITY </span>engine with the use of<span className=" font-bold text-orange-200"> C# </span>language.
                Besides that I create websites like this one ;) in <span className=" font-bold text-orange-200"> NEXT.js</span>
              </p>
            </div>

            <div className="flex flex-col items-center gap-10 h-52">

              <p className="text-left font-bold text-orange-300 text-5xl mt-4"> SKILLS </p>

              <div className="flex flex-wrap justify-center items-center gap-6">
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

            <React.Fragment key={"project_component_"+i}>
              <div className="pb-10" id={i.toString()}></div>
              <ProjectComponent index={i} title={proj.title} title_detail={proj.title_detail} description={proj.desc} description2={proj.desc2} images={proj.images}/> 
            </React.Fragment>
          
          )}

          {/* <div className=" w-3/4 border-b-2 mx-auto"> </div> */}

          <p className="text-center md:text-left font-bold text-orange-300 text-5xl">CONTACT & MEDIA</p>
            
          <div className="flex flex-col justify-center gap-4">
            <div className="flex items-center flex-col md:flex-row gap-4">
              <img className="w-12 h-12" src="Icons/mail_icon.png" alt='icon'/>
              <div className="text-left font-bold text-2xl md:text-3xl">
                <a href="mailto:lukaszsurma73@gmail.com">Lukaszsurma73@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center flex-col md:flex-row gap-4">
              <img className="w-12 h-12" src="Icons/github_icon.png" alt='icon'/>
              <div className="text-left font-bold text-3xl">
                <a target="blank" href="https://github.com/S-Lukasz">GitHub</a>
              </div>
            </div>

          </div>

        </div>

      </div>

      <footer id="100" className="text-2xl bg-customColor1 text-center p-4 border-t-2 border-slate-600">
        (monke) Footer example text
      </footer>

    </div>
  );
}
