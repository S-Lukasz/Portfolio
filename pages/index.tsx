import React from 'react';
import Head from 'next/head'
import Header from '../components/Header';
import ProjectComponent from '../components/Project';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home()
{
  const Skills = [
    {
      icon: "Icons/csharp_icon_new.png",
      link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    },
    {
      icon: "Icons/unity_icon_new.png",
      link: "https://unity.com/",
    },
    {
      icon: "Icons/git_icon_new.png",
      link: "https://git-scm.com/",
    },
    {
      icon: "Icons/nextjs_icon_new.png",
      link: "https://nextjs.org/",
    },
    {
      icon: "Icons/tailwindcss_icon_new.png",
      link: "https://tailwindcss.com/",
    }
  ]

  const GalleryImages = ["Screens/bug_game_screen_1.png", "Screens/bug_game_screen_4.png", "Screens/game_screen_2.png", "Screens/game_screen_1.png", "Screens/pacman_game_2.PNG", "Screens/pacman_game_3.PNG", "Screens/pizza_empire_1.png", "Screens/pizza_empire_4.png", "Screens/survival_3.png", "Screens/survival_4.png", "Screens/gallery_img_no_br_1.png", "Screens/gallery_img_no_br_2.png", "Screens/gallery_img_no_br_3.png", "Screens/gallery_img_no_br_4.png", "Screens/cossack_screen_1.png", "Screens/cossack_screen_0.png"];

  const Projects = [
    {
      title: "PIZZA EMPIRE",
      title_detail: "2022",
      desc: "Pizzera managamanet tycoon game with mafia elements.",
      desc2: "Choose a place to open a pizzeria, hire employees, pay suppliers and create your first menu. Get to know your clients, learn to deal with the mafia and keep growing. Soon your small pizzeria will grow into a huge chain covering the whole city.",
      icon: "Icons/pizza_icon.png",
      buttonDesc1: "Steam",
      buttonDesc2: "",
      buttonLink1: "https://store.steampowered.com/app/1532790/Pizza_Empire/",
      buttonLink2: "",
      specialText: "",
      specialClassName: "",
      linkName: "",
      images: ["Screens/pizza_empire_1.png", "Screens/pizza_empire_2.png", "Screens/pizza_empire_3.png", "Screens/pizza_empire_4.png", "Screens/pizza_empire_5.png", "Screens/pizza_empire_6.png"]
    },
    {
      title: "AGE OF CARPATHIAN",
      title_detail: "2022, Finished in 24h",
      desc: "Winner OF 2ND place at HACKYEAH Game Development #3 Polish Medival Villages and Settlements contest.",
      desc2: "Area of the Carpathian mountains, you get land that you have to develop, mark farmland, harvest crops, graze sheep and sell materials to expand your village, take part in the race to achieve the best developed village.",
      icon: "Icons/AoC_icon.png",
      buttonDesc1: "Download",
      buttonDesc2: "",
      buttonLink1: "https://challengerocket.com/hackyeah-2022/works/ageofcarpathian-2176a0",
      buttonLink2: "",
      specialText: "HACKYEAH",
      specialClassName: " text-orange-400 cursorHover",
      linkName: "https://hackyeah.pl/",
      images: ["Screens/age_of_carpathian_5.png", "Screens/age_of_carpathian_1.png", "Screens/age_of_carpathian_2.png", "Screens/age_of_carpathian_3.png", "Screens/age_of_carpathian_4.png"]
    },
    {
      title: "COSSACK GIRLS",
      title_detail: "2022, Finished in 48h",
      desc: "United With Ukraine Game Jam - Created with two of my friends.",
      desc2: "Cooperative game where you have to face enemies together as a ship commanders, play up to 4 people, use your Keyboard or Joysticks. Upgrade your ship, defend your country and defeat the enemy fleet.",
      icon: "Icons/cossacs_game_icon.png",
      buttonDesc1: "Download",
      buttonDesc2: "",
      buttonLink1: "https://gamejolt.com/games/cossackgirls/732462",
      buttonLink2: "",
      specialText: "United With Ukraine Game Jam",
      specialClassName: "text-orange-400 cursorHover",
      linkName: "",
      images: [ "Screens/cossack_screen_1.png", "Screens/cossack_screen_0.png", "Screens/cossack_screen_2.png"]
    },
    {
      title: "SURVIVAL ISLAND",
      title_detail: "2022, Work in progress",
      desc: "Top down survival game.",
      desc2: "Gather resources, craft new items, build your base, farm crops and explore world full of surprises.",
      icon: "Icons/survival_game_icon.png",
      buttonDesc1: "",
      buttonDesc2: "",
      buttonLink1: "",
      buttonLink2: "",
      specialText: "",
      specialClassName: "",
      linkName: "",
      images: [ "Screens/survival_4.png", "Screens/survival_1.png", "Screens/survival_2.png", "Screens/survival_3.png",]
    },
    {
      title: "CYBERBUG",
      title_detail: "2021, Finished",
      desc: "Project made for a gamejam Game Off 2021.",
      desc2: "It was created with one of my friends, game jam was organized on Itch.io, participants had to follow a one-word theme “Bug”. It is a first-person action shooter in Cyberpunk style, in which you had to fight with incoming waves of bugs, gameplay was inspired by Call of Duty BlackOps.",
      icon: "Icons/cyberbug_game_icon.png",
      buttonDesc1: "Download",
      buttonDesc2: "",
      buttonLink1: "https://pixellookstudio.itch.io/cyberbug",
      buttonLink2: "",
      specialText: "Game Off 2021",
      specialClassName: "text-orange-400 cursorHover",
      linkName: "",
      images: ["Screens/bug_game_screen_1.png", "Screens/bug_game_screen_2.png", "Screens/bug_game_screen_3.png", "Screens/bug_game_screen_4.png"]
    },
    {
      title: "CRAWLER SOULS",
      title_detail: "2020 - 2021, Paused",
      desc: "2D Top-down styled adventure RPG game.",
      desc2: "Play the role of a brave archer. Fight bosses, solve puzzles, explore, complete missions, , collect equppement and improve the character to become real hero.",
      icon: "Icons/crawlersouls_game_icon.png",
      buttonDesc1: "",
      buttonDesc2: "",
      buttonLink1: "",
      buttonLink2: "",
      specialText: "",
      specialClassName: "",
      linkName: "",
      images: ["Screens/game_screen_1.png", "Screens/game_screen_2.png", "Screens/game_screen_3.png"]
    },
    {
      title: "PACMAN 3D",
      title_detail: "2021, Finished",
      desc: "Remake of the iconic Pacman arcade game in 3D style.",
      desc2: "The game has several difficulty modes, each with a larger map and more different opponents, the levels are procedurally generated. Besides that, we can create our own levels using the map creator.",
      icon: "Icons/pacman3D_game_icon.png",
      buttonDesc1: "",
      buttonDesc2: "",
      buttonLink1: "",
      buttonLink2: "",
      specialText: "Pacman",
      specialClassName: "text-orange-400 cursorHover",
      linkName: "",
      images: ["Screens/pacman_game_2.PNG", "Screens/pacman_game_1.PNG", "Screens/pacman_game_3.PNG", "Screens/pacman_game_4.PNG"]
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
        
        
        <div className="flex flex-col items-center gap-2 w-3/4 mx-auto text-4xl text-center my-6 pb-16">

          <div>
            <p className="text-left text-orange-300 text-4xl pt-8 pb-4"> ABOUT ME </p>
          </div>

          <div className="flex flex-col items-center gap-2">

            <div className="text-2xl flex flex-col md:flex-row gap-10 items-center">
              <img className="shadow-black/60 shadow-lg h-48 bg-slate-800" src="/portrait.png" alt='icon'/>
              <p className="text-center md:text-left">
                <span className="  text-orange-200">WELCOME, </span> <br></br> 
                My name is Łukasz and I&apos;m a Game Developer, started programming in the fall of 2018, and it became my passion, especially making Games.
                To create them I use<span className=" text-orange-200"> UNITY </span>engine with the<span className="  text-orange-200"> C# </span>language.
                Besides that I create websites like this one, made in <span className="  text-orange-200"> NEXT.js</span> <br></br> <br></br> 

                Currently I&apos;ve got <span className="  text-orange-200">2</span> years of experience in game development, including <span className="  text-orange-200">1</span> year of commercial experience.
              </p>
            </div>

            <div className="flex flex-col items-center gap-10">

              <p className="text-left text-orange-300 text-4xl pt-16 pb-2"> SKILLS </p>

              <div className="flex flex-wrap justify-center items-center gap-10">
                {Skills.map((skill, i) =>
                  <a key={"skill_icon" + i} target="blank" className="cursorHover group" href={skill.link}>
                    <img
                      className="h-14 md:h-20 drop-shadow-custom mt-2 transform-gpu ease-out transition-all duration-500 group-hover:scale-[1.2] group-hover:-translate-y-2" 
                      src={skill.icon}
                      alt='icon'
                    />
                  </a>
                )}
              </div>

            </div>

          </div>

          <div>
            <p className="text-left text-orange-300 text-4xl pt-32"> PROJECTS </p>
          </div>
          
          { 
            Projects.map((proj, i) => 
            <React.Fragment key={"project_component_"+i}>
              <div className={ i === 0 ? "pb-22" : "pb-24"} id={i.toString()}></div>
              <ProjectComponent 
                index={i} 
                title={proj.title} 
                title_detail={proj.title_detail} 
                description={proj.desc} 
                description2={proj.desc2} 
                buttonDesc1={proj.buttonDesc1} 
                buttonDesc2={proj.buttonDesc2} 
                buttonLink1={proj.buttonLink1} 
                buttonLink2={proj.buttonLink2} 
                specialText={proj.specialText}
                specialClassName={proj.specialClassName}
                linkName={proj.linkName}
                images={proj.images}
              /> 
            </React.Fragment>
          
          )}

          <p className="text-center md:text-left  text-orange-300 text-3xl pt-24">CONTACT & MEDIA</p>
            
          <div className="flex flex-col justify-center gap-4 ">
            <div className="flex items-center flex-col md:flex-row gap-4 group">
              <img className="cursorHover h-12 w-12 cursor hover drop-shadow-custom transform-gpu text-left text-2xl ease-out transition-all duration-500 group-hover:scale-[1.2] group-hover:-translate-y-2" src="Icons/mail_icon_new.png" alt='icon'/>
              
              <div className="cursorHover text-left text-xl md:text-2xl">
                <a className="cursorHover" href="mailto:lukaszsurma73@gmail.com">Lukaszsurma73@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center flex-col md:flex-row gap-4 group">
              <img className="cursorHover h-10 w-10 cursor hover drop-shadow-custom transform-gpu text-left text-2xl ease-out transition-all duration-500 group-hover:scale-[1.2] group-hover:-translate-y-2" src="Icons/github_icon_new.png" alt='icon'/>
              
              <div className="cursorHover text-left text-xl md:text-2xl">
                <a className="cursorHover pl-1" target="blank" href="https://github.com/S-Lukasz">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer id="100" className="text-sm bg-customColor1 text-center text-slate-200 p-4 border-t-2 border-slate-600">
        (@) Created by Łukasz Surma in Next.js
      </footer>

    </div>
  );
}
