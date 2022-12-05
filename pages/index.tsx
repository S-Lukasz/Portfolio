import React from 'react';
import Head from 'next/head'
import Header from '../components/Header';
import ProjectComponent from '../components/Project';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home()
{
  const GalleryImages = ["Screens/bug_game_screen_1.png", "Screens/bug_game_screen_4.png", "Screens/game_screen_2.png", "Screens/game_screen_1.png", "Screens/pacman_game_2.png", "Screens/pacman_game_3.png", "Screens/pizza_empire_1.png", "Screens/pizza_empire_4.png", "Screens/survival_3.png", "Screens/survival_4.png", "Screens/gallery_img_no_br_1.png", "Screens/gallery_img_no_br_2.png", "Screens/gallery_img_no_br_3.png", "Screens/gallery_img_no_br_4.png"];

  const Projects = [
    {
      title: "PIZZA EMPIRE",
      title_detail: "2022, Paused",
      desc: "Opis gry jakiejs tam Opis gry jakiejs tamOpis gry jakiejs ",
      desc2: "Opis gry jakiejs tam Opis gry jakiejs tamOpis gry jakiejs tamOpis gry jakiejs tamOpis gry jakiejs tamOpis gry jakiejs tamOpis gry jakiejs tam Opis gry jakiejs Opis",
      icon: "Icons/pizza_icon.png",
      images: ["Screens/pizza_empire_1.png", "Screens/pizza_empire_2.png", "Screens/pizza_empire_3.png", "Screens/pizza_empire_4.png", "Screens/pizza_empire_5.png", "Screens/pizza_empire_6.png"]
    },
    {
      title: "AGE OF CARPATHIAN",
      title_detail: "2022, Finished",
      desc: "WINNER OF 2ND PLACE at HACKYEAH GAME DEVELOPMENT #3POLISH MEDIVAL VILLAGES AND SETTLEMENTS CONTEST",
      desc2: "Area of the Carpathian mountains, you get land that you have to develop, mark farmland, harvest crops, graze sheep and sell materials to expand your village, take part in the race to achieve the best developed village.",
      icon: "Icons/AoC_icon.png",
      images: ["Screens/age_of_carpathian_1.png", "Screens/age_of_carpathian_2.png", "Screens/age_of_carpathian_3.png", "Screens/age_of_carpathian_4.png", "Screens/age_of_carpathian_5.png"]
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
      images: ["Screens/pacman_game_1.png", "Screens/pacman_game_2.png", "Screens/pacman_game_3.png", "Screens/pacman_game_4.png"]
    }
  ];

  const galleryImages = GalleryImages
    //.reduce((prev : any[], curr) => [...prev, ...curr.images] as string[], [])
    .sort((a, b) => 0.5 - Math.random());

  return (

    <div id="99" className="min-h-screen flex flex-col">

      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/fav_icon_gamepad.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap" rel="stylesheet"/>
      </Head>

      <Header projects={Projects}></Header>
      
      <div className="grow">

        {/* <iframe src="/gamejam_certificate.pdf" height="600" width="300"></iframe> */}

        <div className="w-full before:bg-gradient-to-t before:from-customBgColor/75 before:via-transparent before:to-customBgColor/75 
        relative before:absolute before:top-0 
        before:right-0 before:left-0 before:bottom-0 
        border-b-2 border-slate-600">
          
          <Carousel autoPlay centerMode centerSlidePercentage={100/3} infiniteLoop showThumbs={false} 
          renderArrowPrev={(onClickHandler, hasPrev, label) => (
            <button className="
            cursorHover w-1/3 flex justify-start absolute p-2 top-0 from-black/75 bottom-0
            bg-gradient-to-r items-center z-10" onClick={ onClickHandler }>
              <div><img className="pl-4 mx-auto" src={"Icons/arrow_button_left.png"} alt='proj'/></div>
            </button>
          )}
          renderArrowNext={(onClickHandler, hasNext, label) => (
            <button className="
              cursorHover p-2 absolute justify-end right-0 top-0 from-black/75 bottom-0 w-1/3
              bg-gradient-to-l flex items-center z-10" onClick={ onClickHandler }>
              <div><img className="pr-4 mx-auto" src={"Icons/arrow_button_right.png"} alt='proj'/></div>
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
            <p className="text-left text-orange-300 text-4xl mt-4"> ABOUT ME </p>
          </div>

          <div className="flex flex-col items-center gap-2">

            <div className="text-3xl flex flex-col md:flex-row gap-10 items-center">
              <img className="shadow-black/60 shadow-lg h-48 bg-slate-800" src="/portrait.png" alt='icon'/>
              <p className="text-center md:text-left">
                <span className="  text-orange-200">WELCOME, </span> <br></br> 
                My name is Łukasz and I&apos;m a Game Developer, started programming in the fall of 2018, and it became my passion, especially making Games.
                To create them I use<span className=" text-orange-200"> UNITY </span>engine with the<span className="  text-orange-200"> C# </span>language.
                Besides that I create websites like this one, made in <span className="  text-orange-200"> NEXT.js</span> <br></br> <br></br> 

                Currently I&apos;ve got <span className="  text-orange-200">2</span> years of experience in game development, including <span className="  text-orange-200">1</span> year of commercial experience.
              </p>
            </div>

            <div className="flex flex-col items-center gap-10 h-52">

              <p className="text-left text-orange-300 text-4xl mt-4"> SKILLS </p>

              <div className="flex flex-wrap justify-center items-center gap-6">
                <a className="cursorHover" href="#"><img className="drop-shadow-custom w-22 h-22" src="Icons/csharp_icon.png" alt='icon'/></a>
                <a className="cursorHover" href="#"><img className="drop-shadow-custom w-22 h-22" src="Icons/unity_icon.png" alt='icon'/></a>
                <a className="cursorHover" href="#"><img className="drop-shadow-custom w-22 h-22" src="Icons/git_icon.png" alt='icon'/></a>
                <a className="cursorHover" href="#"><img className="drop-shadow-custom w-22 h-22" src="Icons/js_icon.png" alt='icon'/></a>
                <a className="cursorHover" href="#"><img className="drop-shadow-custom w-18 h-18" src="Icons/react_icon.png" alt='icon'/></a>
              </div>

            </div>

          </div>

          <div>
            <p className="text-left  text-orange-300 text-4xl"> PROJECTS </p>
          </div>
          
          { 
            Projects.map((proj, i) => 
            <React.Fragment key={"project_component_"+i}>
              <div className="pb-10" id={i.toString()}></div>
              <ProjectComponent index={i} title={proj.title} title_detail={proj.title_detail} description={proj.desc} description2={proj.desc2} images={proj.images}/> 
            </React.Fragment>
          
          )}

          <p className="text-center md:text-left  text-orange-300 text-4xl">CONTACT & MEDIA</p>
            
          <div className="flex flex-col justify-center gap-4">
            <div className="flex items-center flex-col md:flex-row gap-4">
              <img className="w-12 h-12" src="Icons/mail_icon.png" alt='icon'/>
              <div className="cursorHover text-left  text-2xl md:text-3xl">
                <a className="cursorHover" href="mailto:lukaszsurma73@gmail.com">Lukaszsurma73@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center flex-col md:flex-row gap-4">
              <img className="w-12 h-12" src="Icons/github_icon.png" alt='icon'/>
              <div className="cursorHover text-left  text-3xl">
                <a className="cursorHover" target="blank" href="https://github.com/S-Lukasz">GitHub</a>
              </div>
            </div>

          </div>

        </div>

      </div>

      <footer id="100" className="text-xl bg-customColor1 text-center p-4 border-t-2 border-slate-600">
        (monke) Footer example text
      </footer>

    </div>
  );
}
